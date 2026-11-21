# WME Localisateur de PR France

Version 1.2.7, dédiée à la France. Lire README.md, CONTRIBUTING.md et les documents concernés avant modification.

Le dépôt public officiel et durable est `xenon32-WME/wme-localisateur-pr`. Toutes les corrections et améliorations futures doivent y être regroupées. Ne pas créer de dépôt parallèle ou de dépôt par version. Travailler sur une branche dédiée, puis ouvrir une pull request vers `main`. Livrer une archive ZIP avec le code, la documentation et les contrôles correspondants.

Données routières exclusivement sur le WFS officiel Géoplateforme. Aucun autre fournisseur routier ni clé d’accès. Langues : français et anglais. Préserver les identifiants de préférences, les calculs, le SDK exclusivement asynchrone et le pont FDB.

Le recalage A40 reste une estimation de l’auteur, distincte des coordonnées officielles conservées. Préserver son encadrement par les PR 119 et 123 et le refus des parcours incomplets ou ambigus.

Une version identifie des octets uniques : augmenter `@version` et `VERSION` ensemble après toute modification d’un script livré. Conserver les anciennes empreintes dans `release-manifest.json`. Vérifier avec `node --check WME-Localisateur-de-PR-France.user.js`, `node tests/run.cjs` et `python3 scripts/package.py --check`.

Les tests simulés ne remplacent pas une recette WME. Contrôles API en lecture seule. Ne pas modifier de données serveur, enregistrer automatiquement des modifications WME ou envoyer de message à la place de l’auteur.

Ne pas publier de correspondance privée, de secrets ou de rapport interne. Les versions antérieures restent conservées dans l’historique et les archives précédentes.
