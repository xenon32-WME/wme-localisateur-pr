# Sources — WME Localisateur de PR France 1.2.7

## Références officielles

- Producteur : IGN, BD TOPO® v3, classe Point de repère.
- Accès : `https://data.geopf.fr/wfs/ows`, couche `BDTOPO_V3:point_de_repere`.
- [Catalogue BD TOPO](https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_BD-TOPO).
- [Documentation WFS Géoplateforme](https://cartes.gouv.fr/aide/fr/guides-utilisateur/utiliser-les-services-de-la-geoplateforme/diffusion/wfs/).
- [Licence Ouverte Etalab 2.0](https://www.data.gouv.fr/pages/legal/licences/etalab-2-0), © IGN.

Recherches, calque, listes de gestionnaires et d’axes interrogent directement ce service, sans autre fournisseur routier. Le script utilise la couche courante, sans date d’édition fixe. Les dates `date_modification` disponibles sont affichées ; leur absence est indiquée.

## Traitements locaux

Les coordonnées sont demandées en `CRS:84` et conservées en longitude / latitude. Le numéro brut, l’abscisse, le type de repère, la section, le côté, le gestionnaire et l’identifiant IGN sont conservés. Les attributs sont adaptés au moteur sans réécriture de la source.

Les positions intermédiaires sont calculées à partir des références disponibles et des segments WME chargés. Les bornes de début et de fin et les discontinuités connues sont prises en compte. Les résultats calculés ou projetés sont des aides à l’édition, distinctes des coordonnées officielles.

La distinction A/N/D/autres axes sert à l’interface ; elle ne remplace pas le statut administratif officiel de la voie. Les listes d’axes et de gestionnaires sont dérivées localement des réponses IGN.

## A40 — correction de l’auteur

Dans l’Ain, les PR 119 et 123 servent à estimer les positions 120–122 et les PR intermédiaires concernés sur chaque chaussée WME. Les références sont lues directement sur le service IGN.

Le calque, la localisation et les notes utilisent la position corrigée ; les coordonnées IGN restent inchangées dans les données et consultables dans le détail. Aucun second marqueur IGN n’est affiché à côté de la correction. Le symbole ≈ et la mention « correction de l’auteur » identifient l’estimation. Le script refuse un calcul si le parcours est incomplet ou ambigu.

Cette méthode ne constitue ni une correction officielle de BD TOPO ni une mesure topographique de chaque borne.

## Destinations des autoroutes

Le référentiel local facilite la distinction des côtés. Les surcharges personnelles sont conservées dans les réglages du gestionnaire de userscripts. Ces libellés ne modifient pas les coordonnées IGN.
