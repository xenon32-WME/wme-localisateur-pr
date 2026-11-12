# Confidentialité et accès réseau

Le script lit les données du projet Supabase Liste PR France (`ygdyaciibfyqldlejyuu.supabase.co`) par HTTPS POST vers huit fonctions RPC. Il emploie une clé publishable destinée au client, sans clé secrète ni compte utilisateur Supabase.

Le corps des requêtes contient les critères nécessaires : pays via le choix de fonction, axe, PR/abscisse, département, gestionnaire, emprise cartographique, filtres et pagination. Aucun pseudonyme Waze ni identifiant d’objet WME n’est ajouté. Le rapprochement avec les segments WME est calculé localement. Le panneau de sources expose ce fonctionnement dans les trois langues.

Les requêtes du script omettent les cookies. Supabase reçoit nécessairement l’adresse IP, les données de connexion et les requêtes. La configuration de conservation des journaux de l’hébergeur n’a pas été certifiée ici : aucune durée ni anonymisation particulière n’est promise.

Pour Supabase, le script essaie d'abord `fetch` dans le navigateur avec `credentials: "omit"`, `referrerPolicy: "no-referrer"` et les redirections interdites. Le contrôle CORS peut transmettre l'origine du contexte d'exécution (par exemple `https://beta.waze.com`), sans le chemin ni les paramètres de l'URL WME. Si cette connexion échoue ou ne termine pas sous 8 secondes, le script utilise la requête anonyme du gestionnaire de userscripts avec le délai restant sur un budget total de 20 secondes. Une erreur HTTP, notamment 401 ou 403, n'est pas rejouée par un autre transport. Le serveur et le contenu des requêtes restent identiques ; aucune autorisation serveur supplémentaire n'est nécessaire.

En cas d'échec, le panneau affiche une raison succincte et la console locale du navigateur peut indiquer le nom de la fonction RPC, le transport utilisé, la phase de connexion ou réception, le type d'erreur, la tentative et le délai écoulé. Le message d'erreur de connexion est limité à 200 caractères et ses URL sont masquées. Ces diagnostics n'ajoutent ni axe ni coordonnées de recherche et ne sont pas envoyés à un service de télémétrie. Les requêtes du calque devenues inutiles sont annulées ; l'annulation ne provoque pas de transport de secours.

Tampermonkey conserve les préférences locales et le cache de vérification de version. Le script ne constitue pas d’historique de recherches. Une vérification de version GreasyFork n’est possible que pour une installation identifiée comme provenant de l’URL autorisée du script 590425, au plus une fois par 24 heures. Pour les installations provenant du dépôt officiel, Tampermonkey consulte les métadonnées sur `raw.githubusercontent.com` et y télécharge les mises à jour selon ses réglages. Ces accès transmettent à GitHub les informations habituelles de connexion, dont l’adresse IP ; ils ne contiennent pas les critères de recherche PR. Le dépôt GitHub est la référence de développement et de distribution.

Les liens du panneau ouvrent les sites officiels uniquement sur action de l’utilisateur. Ils n’ajoutent aucune collecte automatique ni dépendance distante. Il n’existe pas de `@require`.

Le SDK WME est acquis avec `mode: "async"`. Le démarrage attend `SDK_INITIALIZED`, vérifie le retour asynchrone et refuse un SDK synchrone avant de créer l’interface et les calques. Aucune acquisition synchrone de secours n’est conservée.

Le pont `WmePrLocator` est une interface locale de page, pas une frontière d’authentification entre extensions. Il est destiné au module FDB ; les autres scripts exécutés dans le même contexte de page peuvent techniquement y accéder. Une demande de géométrie ne crée ni n’enregistre automatiquement une note.

La vérification serveur jointe porte sur les objets PR utilisés par ce script. Elle ne couvre pas tous les objets du projet Supabase ni les autres applications qui le partagent.

Les deux tables PR ont RLS activée. La table France est accessible en SELECT aux rôles anon/authenticated ; la table Colombie n’a pas de privilège direct pour ces rôles. Les trois RPC colombiennes utilisent SECURITY DEFINER avec un search_path vide et sont exécutables par anon/authenticated : elles exposent volontairement leurs résultats de lecture malgré cette absence d’accès direct. Leurs définitions sont fournies dans `backend/` pour documenter les lectures exposées. Aucune modification des droits serveur n’est nécessaire pour installer le script.
