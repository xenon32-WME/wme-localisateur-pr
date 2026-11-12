# Sources et utilisation des données

État des sources documenté le 12 novembre 2026.

## Origine du projet

Le script a été conçu pour les points de repère routiers français. Sur suggestion d’un éditeur colombien, l’auteur a ensuite intégré des données colombiennes et adapté le moteur à leur représentation des PR et des tronçons.

## France — IGN

Producteur : Institut national de l’information géographique et forestière (IGN).
Produit : BD TOPO® v3, classe Point de repère. Licence des données : Licence Ouverte / Open Licence 2.0. © IGN.

- [Catalogue officiel IGN](https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_BD-TOPO)
- [Publication IGN sur data.gouv.fr](https://www.data.gouv.fr/datasets/bd-topo-r)
- [Texte de la Licence Ouverte 2.0](https://www.data.gouv.fr/pages/legal/licences/etalab-2-0)

La licence MIT du code ne remplace pas la licence des données. Cette adaptation bénévole n’est pas un service officiel ni une approbation de l’IGN.

### Copie actuellement consultée

La table `public.wme_pr_france` du projet Supabase `Liste PR France` contient 639 073 lignes lors du contrôle :

| Identifiant du lot | Nombre | Date d’import enregistrée (UTC) |
|---|---:|---|
| `ign_bdtopo_v3` | 635 695 | 2026-08-06 16:28:57.419 |
| `ign_bdtopo_v3_intercommunal` | 3 378 | 2026-08-07 17:50:40.225 |

La date d’import n’est pas la date d’édition IGN. Le nom du paquet officiel, son empreinte et le journal complet d’extraction n’ont pas été retrouvés pour ces deux lots. Le champ `source_updated_at`, lorsqu’il existe, décrit une entité, pas le millésime du lot. Il est renseigné pour 392 869 lignes nationales et aucune ligne du lot intercommunal. Les dates d’entité vont du 21 janvier 2022 au 12 mars 2026. Aucune édition précise n’est revendiquée pour la copie servie.

Les coordonnées sont utilisées en longitude/latitude. Le service normalise notamment les références de route, les numéros et abscisses de PR, les côtés, branches et gestionnaires. Les transformations historiques exactes ne sont pas toutes reproductibles faute d’archive d’import ; les RPC actuellement déployées sont fournies dans `backend/` pour examen.

### Corrections locales

Six positions de l’A40, PR 120, 121 et 122 sur les côtés D/G, ont été corrigées par l’auteur puis reportées dans Supabase le 10 novembre 2026. Le fichier `evidence/a40-local-corrections.json` les identifie. Elles ne sont pas présentées comme des corrections officielles IGN. Tout futur réimport doit les comparer et les préserver explicitement.

## Colombie — INVÍAS / Red Vial, BETA

Producteur annoncé des données routières initiales : Instituto Nacional de Vías (INVÍAS). Les données utilisées comprennent des PR, des repères de début/fin et des guides de parcours. La copie hébergée et ses données dérivées ne sont pas assimilées automatiquement à une édition actuelle du portail officiel.

Références pour l’instruction de la demande, sans affirmation d’identité exacte avec la copie actuelle :

- [Service officiel PosteReferencia](https://hermes2.invias.gov.co/server/rest/services/MapaCarreteras/PosteReferencia/FeatureServer/0)
- [Catalogue INVÍAS PosteReferenciaODAGOL](https://inviasopendata-invias.opendata.arcgis.com/datasets/7cdbffb61dfa4c90957557015c6ad86d_0/explore)

Une clarification écrite a été demandée à INVÍAS sur les jeux exacts, les transformations, les attributions éventuelles de tiers et les conditions de réutilisation. La réponse est attendue ; aucune autorisation spécifique n’est revendiquée. La disponibilité technique d’un service n’établit pas sa licence. Aucune licence française n’est étendue à ces données.

### Inventaire des attributions colombiennes

La table `public.wme_pr_colombia` contient 18 617 lignes au contrôle du 12 novembre 2026. Son champ `source` inclut notamment 14 361 mentions « IGAC (Contrato 2932/2008) », 2 224 mentions « IGAC (Contrato 2130/2014) » et 19 mentions « Google Maps ». Le détail agrégé figure dans `evidence/colombia-source-inventory.json`. Le nom du diffuseur INVÍAS ne prouve pas à lui seul les droits sur chaque contribution. Le module Colombie reste expérimental (BETA). La publication du code ne constitue pas une confirmation des droits applicables à ces contributions. Le dépôt ne contient pas d’export complet de cette base.

## Application des données dans WME

1. L’éditeur choisit un pays, un axe et un PR, éventuellement deux PR pour délimiter une zone.
2. Le script lit les repères nécessaires via Supabase. Pour le calque, il envoie l’emprise de la carte et ses filtres.
3. Le moteur effectue localement la correspondance avec le parcours routier WME chargé. Il tient compte des branches, des chaussées, des discontinuités et des repères terminaux. Une distance entre repères peut servir à calculer une position intermédiaire ; il ne s’agit pas d’un relevé officiel supplémentaire.
4. Le résultat est affiché sur un calque et peut sélectionner des segments. Aucun tracé routier, adresse, vitesse ou fermeture n’est modifié automatiquement.
5. L’éditeur peut demander une note de carte. Cette action prépare une modification WME et reste soumise à sa vérification et à l’enregistrement manuel.
6. Un pont local permet au script FDB de demander une localisation française et, sur option explicite, la géométrie d’une note. Le Localisateur ne transmet pas ces résultats à un serveur FDB.

## Limites connues

- Traçabilité de l’édition exacte des lots français d’août 2026.
- Provenance détaillée et conditions de réutilisation des données colombiennes, en attente d’INVÍAS.
- Recette interactive de cette version dans WME ; les tests automatisés ne la remplacent pas.
