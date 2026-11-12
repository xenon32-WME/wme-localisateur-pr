# Contrôles de fonctionnement du 12 novembre 2026

Version : **1.2.0**. Branche en validation : **20261112-xhr-transport**.

## Constat complémentaire et changement ciblé

Les traces de la révision précédente dans WME montrent des échecs directs `TypeError: Failed to fetch` après 0 à 1 ms, suivis dans certains cas de délais totaux de 20 secondes sur le secours Tampermonkey. L’en-tête CSP de la page publique WME Beta a été consulté : son `connect-src` n’inclut pas Supabase. Le fetch de page ne constitue donc pas une voie adaptée dans ce contexte. Les quatre réponses du calque retrouvées dans les journaux du service sur la période ciblée sont HTTP 200, avec des temps à l’origine de 137 à 332 ms. Ces durées serveur ne mesurent pas le parcours complet dans le navigateur.

L’ancienne référence utilisait déjà `GM_xmlhttpRequest`, mais sans l’option `anonymous`. [Tampermonkey documente que cette option force le moteur fetch sur Chrome](https://www.tampermonkey.net/documentation.php?locale=en&q=GM_xmlhttpRequest). Cette branche rétablit le moteur XMLHttpRequest pour les RPC, avec suppression explicite de Cookie et Referer, et garde les corrections du calque. L’interprétation de la valeur `null` en suppression d’en-tête a été vérifiée dans la distribution officielle Tampermonkey 5.5.1 ; ce n’est pas une capture réseau du navigateur utilisateur.

Ce changement isole une différence de transport réelle. Il ne prouve pas encore que le mode fetch de Tampermonkey explique à lui seul toute la lenteur. La branche reste en validation, sans annonce de gain réel dans WME. La console mesure désormais aussi les réponses réussies, leur démarrage et l’arrivée des en-têtes pour permettre cette comparaison.

Les 16 suites hors ligne de la branche passent, ainsi que la vérification de syntaxe et la reproductibilité de l’archive. Le test de transport rejette la révision précédente et valide une seule requête XMLHttpRequest, les suppressions d’en-têtes demandées, le délai total, les erreurs et l’annulation. Les tests de navigation conservent une seule requête active après dix déplacements.

Les six scénarios réels en lecture seule passent à nouveau : les 14 appels couvrant les huit RPC ont reçu HTTP 200. Le maximum de durée depuis cet environnement Node.js est d’environ 8,7 secondes ; les vérifications de listes sont plus lentes que celles du calque. Ce test utilise un adaptateur fetch côté Node.js, pas le moteur XMLHttpRequest de Tampermonkey : il vérifie le contrat des API, pas le gain attendu dans Chrome.

Les observations ci-dessous restent celles de la révision précédente, `20261112-network-cancel`.

## Défaut reproduit et corrigé

Une réponse d'ancienne vue était ignorée, mais sa requête HTTP restait active. Dix déplacements rapides avec des réponses lentes laissaient dix requêtes en cours. La correction interrompt les requêtes périmées, y compris pendant le secours Tampermonkey, et ne conserve que celle du calque courant. Une annulation ne déclenche pas de secours ni de nouvelle tentative.

Le scénario échoue sur la révision précédente (`10` requêtes actives au lieu de `1`) et réussit après correction. Les événements répétés de la même vue continuent de partager une seule requête. La désactivation, le dézoom et les changements de pays ou de filtre libèrent également la connexion.

Ce défaut d'accumulation pouvait amplifier une lenteur de transport. Il ne suffit pas à identifier l'origine de chaque délai dépassé dans un navigateur réel. Le changement antérieur vers des requêtes Tampermonkey anonymes a modifié leur mécanisme réseau : [Tampermonkey documente que cette option impose fetch](https://www.tampermonkey.net/documentation.php?locale=en&q=GM_xmlhttpRequest). Cela ne constitue pas, à lui seul, une preuve que Tampermonkey cause les délais observés.

## Accès API et données

Les huit fonctions RPC exposées au script sont présentes, leurs signatures correspondent aux paramètres du client et le rôle public dispose du droit d'exécution prévu. Les index de recherche et les index géographiques France/Colombie sont présents. Aucun changement de données, de droits ou de schéma n'a été effectué.

| Fonction | Contrôle réel en lecture seule | Résultat |
| --- | --- | --- |
| `find_wme_pr_points_v08` | A40, deux sens ; PRF D1 38+392 ; D1083 | Réponses conformes |
| `find_wme_pr_points_in_bbox_v121` | Filtre D1 avant limite ; pagination ; résultat vide ; filtre intercommunal | Réponses et métadonnées conformes |
| `list_wme_pr_intercommunal_managers` | Liste des gestionnaires | Réponse conforme |
| `list_wme_pr_intercommunal_axes` | Axes d'un gestionnaire | Réponse conforme |
| `find_wme_pr_intercommunal_scopes` | Correspondance axe/gestionnaire | Réponse conforme |
| `find_wme_pr_colombia_target` | Route 4005, PR 65+500 | Références d'encadrement présentes |
| `find_wme_pr_colombia_guides` | Guides entre 55 000 et 64 000 | Guides présents |
| `find_wme_pr_colombia_points_in_bbox` | Calque autour d'une référence colombienne | Points et métadonnées conformes |

Les six scénarios réels regroupent ces huit fonctions. Lors de ce passage depuis Node.js, quatorze appels ont reçu HTTP 200 ; une première tentative directe a expiré après 8 secondes, puis le secours a réussi. Les temps mesurés incluent le réseau de l'environnement de test : ils ne mesurent pas WME chez l'utilisateur. Le compte rendu détaillé peut être produit avec `PR_REPORT_PATH=/chemin/rapport.json node tests/live-supabase.cjs`.

Les statistiques SQL cumulées disponibles pour le calque français donnent environ 32 ms de moyenne et 166 ms au maximum. Les journaux consultés ne montrent ni attente SQL active ni annulation pour dépassement de délai sur la période étudiée. Ces observations concernent les requêtes parvenues au service et ne prouvent pas que toutes les tentatives du navigateur y sont arrivées.

## Script, SDK et traitement des réponses

Seize suites hors ligne passent. Elles couvrent :

- transport : requêtes POST, hôte autorisé, cookies omis, validation des paramètres et réponses, erreurs HTTP, absence de secours sur 401/403 ou JSON invalide, délai commun de 20 secondes incluant le corps, nettoyage des temporisateurs et annulation des requêtes périmées ;
- calque : démarrage, déplacements, rafales de données WME, cache par pays/filtre, partage des requêtes identiques, résultats tardifs, dessin interrompu et affichage avant la géométrie facultative des étiquettes ;
- SDK : acquisition asynchrone obligatoire, attente de disponibilité, instantanés partagés, adresses, sélection, graphes routiers, calques, notes et recentrage ;
- moteur et intégrations : A40/Chamoise, PRF, géométries de notes et pont FDB ;
- interface et distribution : contrôles français/espagnol/anglais, fenêtre détachée, paramètres, fréquence GreasyFork, sources, confidentialité, métadonnées et archive reproductible.

La [documentation du SDK](https://www.waze.com/editor/sdk/modules.html) et le contrat [SdkEventBus](https://www.waze.com/editor/sdk/classes/index.SDK.SdkEventBus.html) ont été consultés : l'attente de `once` et les abonnements `on` sont compatibles avec leurs contrats ; aucun accès de secours au SDK synchrone n'est ajouté.

## Vérification restant à effectuer dans WME

Le gain réel après installation doit être confirmé dans le navigateur où le problème a été observé. Si le délai réapparaît, les lignes de console contiennent désormais du texte exploitable pour distinguer un échec immédiat, une attente avant les en-têtes, une réception bloquée et un échec du secours. Le message de démarrage permet de confirmer la révision installée malgré le maintien du numéro 1.2.0.

Les contrôles automatisés n'ont pas créé ni enregistré de modification sur la carte Waze.
