# Confidentialité et accès réseau — 1.2.7

## Données routières

Le script consulte directement `https://data.geopf.fr/wfs/ows` pour les recherches, le calque et les listes d’axes / gestionnaires. Les URL HTTPS contiennent les critères utiles : route, département, gestionnaire, emprise cartographique, types de repères, champs et pagination.

Il n’envoie ni pseudonyme Waze ni identifiant d’objet WME. Les rapprochements avec les segments et les calculs sont réalisés localement. Aucune clé d’accès à une base externe n’est intégrée.

Les requêtes passent par le gestionnaire de userscripts avec `anonymous: true` et refus des redirections. Les cookies sont omis. L’IGN reçoit l’adresse IP et les critères envoyés ; ses journaux éventuels dépendent de ses propres règles.

## Réglages et mises à jour

Les préférences sont enregistrées localement par Tampermonkey ou le gestionnaire compatible, avec `GM_getValue` et `GM_setValue`. Les identifiants de l’installation existante sont conservés.

Pour une installation reconnue comme provenant de GreasyFork, le script peut vérifier les métadonnées de la fiche 590425, au plus une fois toutes les 24 heures. Les hôtes permis sont `greasyfork.org` et `update.greasyfork.org`. Les critères de recherche routière ne leur sont pas transmis. Une installation locale sans canal GreasyFork reconnu ne déclenche pas cette vérification interne.

## Actions dans WME

Le pont FDB échange les demandes et résultats localement dans le même onglet. Les modifications de carte et les notes ne sont pas enregistrées automatiquement. La sélection automatique suit la préférence explicite de l’utilisateur et reste décochée pour une nouvelle installation.
