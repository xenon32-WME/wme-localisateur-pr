# WME Localisateur de PR

Ce dépôt public `xenon32-WME/wme-localisateur-pr` est le dépôt officiel et durable de ce script. Toutes les corrections et améliorations futures doivent y être enregistrées. Ne pas créer de dépôt parallèle ou de dépôt par version.

Lire le README, CONTRIBUTING.md et les documents pertinents dans docs/ avant de modifier leur périmètre. La source distribuée est le fichier `.user.js` à la racine ; les métadonnées et le ZIP sont générés avec `python3 scripts/package.py`.

Travailler sur une branche dédiée pour les changements futurs. Préserver les modifications existantes de l’utilisateur. `main` est la branche de distribution publique et ses URL d’installation doivent rester stables.

Maintenir `@version` et `VERSION` identiques. Pour une nouvelle version, mettre à jour CHANGELOG.md, README.md et les fichiers générés. Exécuter la vérification de syntaxe, `node tests/run.cjs` et `python3 scripts/package.py --check`. Le contrôle réel Supabase est en lecture seule ; ne le relancer que si les changements concernent les données ou le transport.

Conserver le SDK WME exclusivement asynchrone, les préférences, le pont FDB et les corrections métier existantes. Ne pas prétendre qu’un test simulé équivaut à une recette dans WME. Les corrections de code ne donnent pas lieu à des changements non nécessaires sur la base partagée.

La documentation publique décrit les fonctionnalités, l’installation, les sources, la confidentialité et les limites connues. Elle ne doit pas contenir de dossiers internes, de correspondances privées ni de secrets.
