"""Generate or verify the public installation files, using only Python stdlib."""
from pathlib import Path
import argparse
import io
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
files = [name, 'README.md', 'LICENSE', 'CHANGELOG.md', 'CONTRIBUTING.md', 'AGENTS.md', '.gitignore']
for folder in ['docs', 'tests', 'backend', 'evidence', 'scripts', '.github']:
    files += [str(p.relative_to(root)) for p in (root / folder).rglob('*')
              if p.is_file() and p.suffix in {'.md', '.cjs', '.sql', '.json', '.txt', '.py', '.yml', '.yaml'}]
contents = {relative: (root / relative).read_bytes() for relative in files}
contents['WME-Localisateur-de-PR-France.meta.js'] = meta
archive = io.BytesIO()
with zipfile.ZipFile(archive, 'w', compression=zipfile.ZIP_DEFLATED, compresslevel=9) as z:
    for relative in sorted(contents):
        entry = zipfile.ZipInfo(relative, date_time=(2026, 1, 1, 0, 0, 0))
        entry.compress_type = zipfile.ZIP_DEFLATED
        entry.create_system = 3
        entry.external_attr = 0o100644 << 16
        z.writestr(entry, contents[relative])
outputs = {'WME-Localisateur-de-PR-France.meta.js': meta, 'dist/Localisateur_PR.zip': archive.getvalue()}
for relative, data in outputs.items():
    target = root / relative
    if args.check:
        assert target.is_file() and target.read_bytes() == data, f'Regenerate {relative}: python3 scripts/package.py'
    else:
        target.parent.mkdir(parents=True, exist_ok=True)
        target.write_bytes(data)
print('Distribution files verified' if args.check else 'Distribution files generated')
