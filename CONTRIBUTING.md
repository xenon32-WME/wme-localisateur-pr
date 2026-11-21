# Contribuer

Le dépôt de référence est `xenon32-WME/wme-localisateur-pr`. Centraliser ici les évolutions et regrouper le code, la documentation et les fichiers générés dans une même pull request vers `main`. La publication GreasyFork reste une étape distincte.

## Contrats à préserver

- France exclusivement : WFS officiel IGN, sans fournisseur routier de secours.
- Interface français / anglais ; français par défaut pour une ancienne langue non prise en charge.
- SDK exclusivement asynchrone, préférences existantes, pont FDB et calques conservés.
- Aucune sauvegarde automatique WME. Notes et sélection sur action ou choix explicite.
- Coordonnées officielles conservées, estimations de l’auteur signalées. A40 : encadrement 119–123 et refus des parcours incomplets ou ambigus.
- Requêtes anonymes, sans redirection.

## Une version, un code

1. Travailler sur une branche dédiée sans écraser les modifications de l’auteur.
2. Augmenter `@version` et `VERSION` ensemble lorsqu’un script déjà livré change.
3. Mettre à jour la documentation et les tests concernés.
4. Exécuter `node --check WME-Localisateur-de-PR-France.user.js` et `node tests/run.cjs`.
5. Générer avec `python3 scripts/package.py`, puis vérifier avec `python3 scripts/package.py --check`.

Le générateur conserve les anciennes empreintes et refuse des octets différents pour une même version. Ne jamais remplacer une empreinte historique pour contourner ce contrôle.

Les directives `@updateURL` et `@downloadURL` sont absentes. GreasyFork fournit le canal de mise à jour lors de la publication sur la fiche 590425. Ne pas introduire `none` ni une URL vers une branche de développement.
