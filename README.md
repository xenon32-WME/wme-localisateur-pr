# WME Localisateur de PR France — 1.2.7

Version **1.2.7** du 21 novembre 2026. Recherche, localisation et affichage des points repères routiers français dans Waze Map Editor. Interface en **français et anglais**.

## Installation

1. Télécharger puis extraire [Localisateur_PR_France_1.2.7.zip](dist/Localisateur_PR_France_1.2.7.zip).
2. Installer `WME-Localisateur-de-PR-France.user.js` à la place de l’ancienne version.
3. Ne conserver qu’une installation active et recharger WME.
4. Autoriser `data.geopf.fr` si le gestionnaire le demande.

Le nom, l’espace de noms et les identifiants des réglages sont conservés. Les préférences d’affichage, filtres, destinations d’autoroutes et choix de sélection existants sont repris. Une ancienne langue non prise en charge est remplacée par le français. Le pays n’est plus un réglage : cette édition est dédiée à la France.

## Fonctions

- Recherche d’un PR entier ou intermédiaire, par exemple `35+450`, ou d’une zone entre deux PR.
- Autoroutes, routes nationales, départementales et axes métropolitains ou intercommunaux disponibles dans la source.
- Calque des points repères, filtrage par axe, côtés et destinations des autoroutes.
- Permalink, copie du résultat, sélection des segments sur demande et préparation de notes de carte.
- Recherches depuis FDB grâce à l’interface locale existante.

## Données et précision

Les données routières sont lues directement sur le WFS officiel de la Géoplateforme : `https://data.geopf.fr/wfs/ows`, couche `BDTOPO_V3:point_de_repere`. © IGN, BD TOPO®, Licence Ouverte Etalab 2.0. Les dates de modification disponibles sont affichées ; aucune date n’est inventée.

Les coordonnées source sont conservées. Les positions interpolées ou projetées sur WME restent des aides à l’édition, sans valeur topographique officielle.

Sur l’A40 dans l’Ain, les PR 120 à 122 et les positions intermédiaires concernées sont estimés à partir des PR 119 et 123 sur chaque chaussée WME. Le calque, les recherches et les notes utilisent cette correction de l’auteur, explicitement signalée ; les coordonnées IGN restent consultables dans le détail. Les parcours incomplets ou ambigus sont refusés.

En cas de rupture de parcours, le message rappelle de vérifier le numéro de route dans l’adresse principale ou alternative des segments traversés, notamment en ville.

Voir [Sources](docs/SOURCES.md), [Confidentialité](docs/CONFIDENTIALITE.md) et [Historique](CHANGELOG.md).

## Développement et distribution

Le dépôt officiel est [xenon32-WME/wme-localisateur-pr](https://github.com/xenon32-WME/wme-localisateur-pr). Toutes les corrections et améliorations futures sont centralisées ici. Le code, la documentation et l’archive de la 1.2.7 sont regroupés dans cette mise à jour. La publication sur GreasyFork est gérée séparément par l’auteur.

```sh
node --check WME-Localisateur-de-PR-France.user.js
node tests/run.cjs
python3 scripts/package.py
python3 scripts/package.py --check
```

Chaque version identifie des octets uniques, contrôlés par SHA-256. Les tests automatisés ne remplacent pas la vérification dans WME.

Code sous [licence MIT](LICENSE). Projet communautaire distinct des services officiels Waze et IGN.
