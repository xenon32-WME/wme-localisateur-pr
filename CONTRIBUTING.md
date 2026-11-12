# Contribuer

Le dépôt `xenon32-WME/wme-localisateur-pr` est la référence officielle et durable du script. Toutes les corrections, améliorations, traductions et évolutions de documentation doivent être enregistrées ici. Ne pas recréer un dépôt à chaque version.

## Organisation

- `WME-Localisateur-de-PR-France.user.js` : source du script distribué.
- `WME-Localisateur-de-PR-France.meta.js` : en-tête généré pour les mises à jour.
- `dist/Localisateur_PR.zip` : archive d’installation générée.
- `tests/` : contrôles exécutables sans dépendances npm.
- `docs/` : sources et confidentialité.
- `backend/` : définitions des fonctions serveur consultées, à titre documentaire ; ce n’est pas une migration à rejouer.
- `evidence/` : inventaires et corrections de données datés.

## Modifier le script

1. Créer une branche dans ce dépôt à partir de `main`.
2. Apporter une modification ciblée et adapter les tests concernés si le comportement change.
3. Pour une nouvelle version distribuée, augmenter `@version` et `VERSION` ensemble, mettre à jour le README et ajouter une entrée au CHANGELOG.
4. Exécuter `python3 scripts/package.py` pour régénérer les métadonnées et l’archive. Ne pas les modifier manuellement.
5. Exécuter les trois commandes de vérification du README. Effectuer une recette WME adaptée aux fonctions modifiées.
6. Enregistrer le code, la documentation et les fichiers générés dans le même changement, puis ouvrir une pull request vers `main`.

`main` alimente les liens publics d’installation et de mise à jour : une modification fusionnée y devient immédiatement téléchargeable. Les expérimentations restent dans les branches de développement.

## Préserver les contrats existants

Conserver le SDK WME exclusivement asynchrone, les identifiants de préférences, les garanties de confidentialité et la compatibilité du pont local FDB. Aucune opération de création de note ne doit enregistrer automatiquement les modifications dans WME.

Documenter tout changement de source, d’attribution ou d’accès réseau. Ne jamais ajouter de secret serveur au userscript. Les changements de code client ne justifient pas un réimport de données ou une modification des droits du projet Supabase partagé. Préserver explicitement les six corrections locales A40 lors de toute évolution des données.
