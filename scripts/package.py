"""Freeze a version's userscript bytes and generate or verify its review archive."""
from pathlib import Path
import argparse
import hashlib
import io
import json
import re
import zipfile

root = Path(__file__).resolve().parent.parent
parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument('--check', action='store_true')
args = parser.parse_args()
name = 'WME-Localisateur-de-PR-France.user.js'
source = (root / name).read_bytes()
marker = b'// ==/UserScript=='
assert source.count(marker) == 1, 'Expected one userscript header'
meta = source[:source.index(marker) + len(marker)] + b'\n'
version = re.search(rb'^// @version\s+(\S+)', meta, re.M).group(1).decode()
assert re.fullmatch(r'\d+\.\d+\.\d+(?:\.[a-z]+\d*)?', version), 'Invalid version'
assert re.search(rb'const VERSION = "([^"]+)";', source).group(1).decode() == version, 'Version mismatch'
source_hash = hashlib.sha256(source).hexdigest()
manifest_path = root / 'release-manifest.json'
manifest = json.loads(manifest_path.read_text()) if manifest_path.exists() else {'algorithm':'sha256','versions':{}}
assert manifest.get('algorithm') == 'sha256' and isinstance(manifest.get('versions'), dict), 'Invalid release manifest'
known_hash = manifest['versions'].get(version)
assert known_hash in (None, source_hash), 'This version already identifies different code. Increment @version and VERSION; retain the old hash.'
assert not args.check or known_hash == source_hash, 'Version not frozen; run python3 scripts/package.py'
manifest['versions'][version] = source_hash
manifest_bytes = (json.dumps(manifest, ensure_ascii=False, indent=2) + '\n').encode()
files = [name, 'README.md', 'LICENSE', 'CHANGELOG.md', 'CONTRIBUTING.md', 'AGENTS.md', '.gitignore']
for folder in ['docs', 'tests', 'evidence', 'scripts', '.github']:
    files += [str(p.relative_to(root)) for p in (root / folder).rglob('*')
              if p.is_file() and p.suffix in {'.md', '.cjs', '.sql', '.json', '.txt', '.py', '.yml', '.yaml'}]
contents = {relative: (root / relative).read_bytes() for relative in files}
contents['WME-Localisateur-de-PR-France.meta.js'] = meta
contents['release-manifest.json'] = manifest_bytes
contents['SHA256SUMS.txt'] = f'{source_hash}  {name}\n'.encode()
archive = io.BytesIO()
with zipfile.ZipFile(archive, 'w', compression=zipfile.ZIP_DEFLATED, compresslevel=9) as z:
    for relative in sorted(contents):
        entry = zipfile.ZipInfo(relative, date_time=(2026, 1, 1, 0, 0, 0))
        entry.compress_type = zipfile.ZIP_DEFLATED
        entry.create_system = 3
        entry.external_attr = 0o100644 << 16
        z.writestr(entry, contents[relative])
outputs = {'WME-Localisateur-de-PR-France.meta.js': meta, 'release-manifest.json': manifest_bytes,
           'SHA256SUMS.txt': contents['SHA256SUMS.txt'], f'dist/Localisateur_PR_France_{version}.zip': archive.getvalue()}
for relative, data in outputs.items():
    target = root / relative
    if args.check:
        assert target.is_file() and target.read_bytes() == data, f'Regenerate {relative}: python3 scripts/package.py'
    else:
        target.parent.mkdir(parents=True, exist_ok=True)
        target.write_bytes(data)
print(f'{"Verified" if args.check else "Generated"} version {version}, userscript SHA-256 {source_hash}')
