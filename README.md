# WME Localisateur de PR

Dépôt officiel public du **WME Localisateur de PR**, développé par Xenon32 pour Waze Map Editor.

Le script localise un point de repère routier ou une zone comprise entre deux PR, affiche le résultat sur la carte et peut sélectionner les segments correspondants. Il prend en charge les données françaises IGN et un module Colombie BETA. La création d’une note de carte reste une action explicite de l’éditeur, suivie d’un enregistrement manuel dans WME.

**Toutes les corrections et améliorations du script sont centralisées dans ce dépôt.** La branche `main` contient la version distribuée. Les développements se font dans des branches de ce même dépôt, puis sont intégrés après vérification.

## Installation

Version actuelle : **1.2.0**.

1. Installer Tampermonkey dans le navigateur.
2. [Installer le userscript](https://raw.githubusercontent.com/xenon32-WME/wme-localisateur-pr/main/WME-Localisateur-de-PR-France.user.js), ou télécharger [l’archive ZIP](https://raw.githubusercontent.com/xenon32-WME/wme-localisateur-pr/main/dist/Localisateur_PR.zip) et ouvrir le fichier `.user.js` qu’elle contient.
3. Ne conserver qu’une seule version active du Localisateur, puis recharger WME.

Si une ancienne variante porte un autre nom ou un numéro supérieur à 1.2.0, son remplacement doit être manuel. Les préférences utilisent les mêmes identifiants internes. Vérifier les anciennes installations avant de les supprimer.

Les correctifs du calque PR du 12 novembre conservent le numéro **1.2.0** : rafraîchissements concurrents et premier affichage sans attente de la géométrie WME. Pour remplacer une installation 1.2.0 antérieure, réinstaller le userscript depuis le lien ci-dessus : la vérification habituelle des versions ne suffit pas à détecter ces correctifs.

Le script requiert le SDK WME asynchrone et fonctionne sur WME et WME Beta. Aucun paramétrage Supabase n’est nécessaire.

## Utilisation

- Choisir le pays, le type de route, l’axe et le département ou gestionnaire si nécessaire.
- Saisir un PR au format `52+000` ; renseigner un deuxième PR pour obtenir une zone.
- Pour les autoroutes, choisir le sens de circulation.
- Utiliser le calque PR pour afficher les repères de la vue courante et filtrer un axe.
- Vérifier le résultat sur la carte avant d’ajouter une note ou d’utiliser la sélection.

L’interface propose le français, l’espagnol et l’anglais. Un pont local permet au module FDB de demander une localisation française.

## Mises à jour et assistance

Les métadonnées d’installation pointent vers ce dépôt. Tampermonkey vérifie et installe les versions suivantes selon ses réglages de mise à jour. Le code publié reste lisible, sans compilation ni dépendance JavaScript téléchargée à l’exécution.

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
