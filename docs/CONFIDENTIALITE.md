# Confidentialité et accès réseau

Le script lit les données du projet Supabase Liste PR France (`ygdyaciibfyqldlejyuu.supabase.co`) par HTTPS POST vers huit fonctions RPC. Il emploie une clé publishable destinée au client, sans clé secrète ni compte utilisateur Supabase.

Le corps des requêtes contient les critères nécessaires : pays via le choix de fonction, axe, PR/abscisse, département, gestionnaire, emprise cartographique, filtres et pagination. Aucun pseudonyme Waze ni identifiant d’objet WME n’est ajouté. Le rapprochement avec les segments WME est calculé localement. Le panneau de sources expose ce fonctionnement dans les trois langues.

Les requêtes du script omettent les cookies. Supabase reçoit nécessairement l’adresse IP, les données de connexion et les requêtes. La configuration de conservation des journaux de l’hébergeur n’a pas été certifiée ici : aucune durée ni anonymisation particulière n’est promise.

Pour Supabase, le script utilise directement `GM_xmlhttpRequest`, avec `anonymous: true` et `redirect: "error"`. Les cookies sont omis et les redirections interdites : les adresses RPC sont finales. Ces options sélectionnent le moteur fetch interne de Tampermonkey sur Chrome, distinct d’un fetch de page. Le fetch de page reste retiré, Supabase ne figurant pas dans le connect-src observé sur WME.

Les en-têtes manuels Cookie/Referer de la révision intermédiaire ont été retirés. Le gestionnaire applique lui-même l’absence de cookies. Dans Tampermonkey 5.5.1, le refus des redirections permet de limiter les règles d’en-têtes à l’URL demandée. La vérification des métadonnées GreasyFork conserve son comportement anonyme antérieur. Aucun réglage de sécurité de WME ou du navigateur n’est modifié.

Une seule requête est lancée par tentative, avec un délai maximal de 20 secondes qui couvre aussi l’attente du gestionnaire. Les requêtes du calque devenues inutiles sont annulées. Le serveur, la clé publique et les paramètres RPC restent identiques.

La console locale peut indiquer le nom de la fonction RPC, le transport, le temps de démarrage (`startMs`), de réception des en-têtes (`headersMs`) et de fin (`totalElapsedMs`). Ces mesures sont les dates de réception des callbacks du gestionnaire, pas une capture des paquets réseau. Une valeur `null` signifie que l’événement n’a pas été reçu. Le rendu du calque est chronométré séparément : attente de dessin, préparation, appels au SDK et durée totale, avec un nombre de points. Le message de démarrage indique aussi le nom et la version du gestionnaire de userscripts. En cas d’échec, le panneau affiche une raison succincte et la console précise la tentative et la phase atteinte. Ces diagnostics n’ajoutent ni axe ni coordonnées de recherche et ne sont pas envoyés à un service de télémétrie.

Tampermonkey conserve les préférences locales et le cache de vérification de version. Le script ne constitue pas d’historique de recherches. Une vérification de version GreasyFork n’est possible que pour une installation identifiée comme provenant de l’URL autorisée du script 590425, au plus une fois par 24 heures. Pour les installations provenant du dépôt officiel, Tampermonkey consulte les métadonnées sur `raw.githubusercontent.com` et y télécharge les mises à jour selon ses réglages. Ces accès transmettent à GitHub les informations habituelles de connexion, dont l’adresse IP ; ils ne contiennent pas les critères de recherche PR. Le dépôt GitHub est la référence de développement et de distribution.

Le choix « Ne plus afficher ce message » pour la popup de démarrage du calque PR est une préférence locale supplémentaire, mémorisée dans Tampermonkey. Cette popup n’analyse pas les autres scripts installés et n’ajoute aucune requête réseau.

Les liens du panneau ouvrent les sites officiels uniquement sur action de l’utilisateur. Ils n’ajoutent aucune collecte automatique ni dépendance distante. Il n’existe pas de `@require`.

Le SDK WME est acquis avec `mode: "async"`. Le démarrage attend `SDK_INITIALIZED`, vérifie le retour asynchrone et refuse un SDK synchrone avant de créer l’interface et les calques. Aucune acquisition synchrone de secours n’est conservée.

Le pont `WmePrLocator` est une interface locale de page, pas une frontière d’authentification entre extensions. Il est destiné au module FDB ; les autres scripts exécutés dans le même contexte de page peuvent techniquement y accéder. Une demande de géométrie ne crée ni n’enregistre automatiquement une note.

La vérification serveur jointe porte sur les objets PR utilisés par ce script. Elle ne couvre pas tous les objets du projet Supabase ni les autres applications qui le partagent.

Les deux tables PR ont RLS activée. La table France est accessible en SELECT aux rôles anon/authenticated ; la table Colombie n’a pas de privilège direct pour ces rôles. Les trois RPC colombiennes utilisent SECURITY DEFINER avec un search_path vide et sont exécutables par anon/authenticated : elles exposent volontairement leurs résultats de lecture malgré cette absence d’accès direct. Leurs définitions sont fournies dans `backend/` pour documenter les lectures exposées. Aucune modification des droits serveur n’est nécessaire pour installer le script.
