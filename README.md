# WME Localisateur de PR

Dépôt officiel public du **WME Localisateur de PR**, développé par Xenon32 pour Waze Map Editor.

Le script localise un point de repère routier ou une zone comprise entre deux PR, affiche le résultat sur la carte et peut sélectionner les segments correspondants. Il prend en charge les données françaises IGN et un module Colombie BETA. La création d’une note de carte reste une action explicite de l’éditeur, suivie d’un enregistrement manuel dans WME.

**Toutes les corrections et améliorations du script sont centralisées dans ce dépôt.** Les développements se font dans des branches dédiées. Une nouvelle version n’est publiée qu’après validation ; chaque version correspond à un code identifié.

## Version publique

La fiche publique conservée est [GreasyFork 590425 — version 1.1.5](https://greasyfork.org/fr/scripts/590425-wme-localisateur-de-pr-france). Elle reste inchangée jusqu’à la validation de la prochaine version.

Le code 1.2.0 présent dans ce dépôt n’est plus proposé à l’installation. Les liens d’installation directe et de téléchargement depuis `main` sont retirés. Ne pas utiliser `main` comme canal de mise à jour d’une version de travail.

Les développements suivants sont préparés séparément. Le dépôt reste public pour consulter le code et son historique.

## Utilisation

- Choisir le pays, le type de route, l’axe et le département ou gestionnaire si nécessaire.
- Saisir un PR au format `52+000` ; renseigner un deuxième PR pour obtenir une zone.
- Pour les autoroutes, choisir le sens de circulation.
- Utiliser le calque PR pour afficher les repères de la vue courante et filtrer un axe.
- Vérifier le résultat sur la carte avant d’ajouter une note ou d’utiliser la sélection.

L’interface propose le français, l’espagnol et l’anglais. Un pont local permet au module FDB de demander une localisation française.

## Mises à jour et assistance

La prochaine version validée sera publiée sur la fiche GreasyFork 590425. Aucune nouvelle version ne doit être distribuée automatiquement depuis une branche de travail. Le code reste lisible, sans compilation ni dépendance JavaScript téléchargée à l’exécution.

Pour un problème ou une proposition, [ouvrir une issue](https://github.com/xenon32-WME/wme-localisateur-pr/issues) en précisant la version, le pays, l’axe, les PR, le résultat attendu et les étapes pour reproduire. Éviter les informations personnelles dans les captures et messages.

## Sources et confidentialité

- [Origine des données, transformations et limites connues](docs/SOURCES.md)
- [Accès réseau, stockage local et confidentialité](docs/CONFIDENTIALITE.md)
- [Historique des versions](CHANGELOG.md)
- [Contribuer et préparer une version](CONTRIBUTING.md)

Les données françaises proviennent de l’IGN, sous Licence Ouverte 2.0. Supabase héberge la copie consultée. Le millésime exact des lots français d’août 2026 n’a pas été conservé. Les données colombiennes restent en BETA ; leurs conditions de réutilisation font l’objet d’une clarification écrite auprès d’INVÍAS.

Code sous [licence MIT](LICENSE). Les licences et attributions des données sont distinctes de celle du code. Ce projet communautaire n’est pas un service officiel de Waze, de l’IGN ou d’INVÍAS.

## Vérifications

Avec Node.js 22 et Python 3, sans installation de dépendances :

```sh
node --check WME-Localisateur-de-PR-France.user.js
node tests/run.cjs
python3 scripts/package.py --check
```

Contrôle facultatif du service réel, en lecture seule :

```sh
node tests/live-supabase.cjs
```

Les tests automatisés vérifient le moteur, le transport réseau, le démarrage asynchrone, les contrôles d’interface et le pont FDB. Ils ne remplacent pas une vérification interactive dans WME.
