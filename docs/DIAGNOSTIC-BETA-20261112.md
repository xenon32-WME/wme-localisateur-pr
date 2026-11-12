# Diagnostic prod/Beta — 12 novembre 2026

Version 1.2.0, révision distribuée `20261112-no-redirect`. Diagnostic rouvert après des essais supplémentaires.

## Observations avant correction

La même révision `20261112-xhr-transport` a été observée dans les deux environnements. Les essais utilisateur indiquent un fonctionnement fluide sur WME prod et des lenteurs persistantes sur Beta.

Sur Beta, trois tentatives ont expiré après environ 20 à 21 secondes sans callback `onloadstart` ni en-têtes reçus. Une réponse réussie a pris 2 962 ms, dont 2 723 ms avant le callback de démarrage. Sur prod, un dépassement initial existe également dans les traces, suivi de réponses de 6 419, 1 191 et 1 544 ms. Ce sont des délais de callbacks mesurés dans le script, pas des mesures réseau brutes. Ils indiquent une attente avant livraison des données et ne suffisent pas à attribuer la différence au SDK Beta ou à un autre script précis.

## Mécanisme reproduit hors navigateur

La distribution officielle Tampermonkey 5.5.1 a été examinée. Dans son traitement des en-têtes, le suivi des redirections peut conduire à préparer une règle globale après avoir attendu les autres transferts gérés. Tampermonkey ajoute lui-même un en-tête Origin à retirer dans sa configuration habituelle ; les en-têtes manuels Cookie/Referer de la révision précédente ne sont donc pas la seule entrée possible dans ce chemin.

La fonction de préparation de cette distribution a été exécutée dans une VM isolée, sans navigateur ni réseau, avec un transfert indépendant laissé en attente :

| Configuration | Prête avant la fin du transfert indépendant | Portée de la règle |
| --- | --- | --- |
| Redirections suivies | Non | Globale (`*`) |
| Redirections refusées | Oui | URL de la RPC |

Cette reproduction établit le mécanisme de la version examinée, pas la cause exclusive de chaque attente dans le navigateur utilisateur. Une autre requête qui détient déjà un verrou global peut toujours retarder le script.

## Changement et validation utilisateur

Les RPC Supabase utilisent des URL finales. Le script demande désormais `anonymous: true` et `redirect: "error"` via `GM_xmlhttpRequest`. Les cookies restent omis ; les redirections ne sont plus suivies. [La documentation Tampermonkey](https://www.tampermonkey.net/documentation.php?locale=en&q=GM_xmlhttpRequest) précise que ces options sélectionnent son moteur fetch sur Chrome. Il ne s’agit pas du fetch de page, incompatible avec la politique réseau observée sur WME.

Les paramètres API, la base et le fonctionnement du SDK ne changent pas. Les annulations et le délai maximal de 20 secondes restent actifs. Les temps du dessin sont maintenant consignés séparément des réponses API, sans coordonnées ni noms de route. Cela permet de distinguer une attente du gestionnaire d’un rendu lent dans WME Beta. Le nom et la version du gestionnaire sont ajoutés au message de démarrage.

Le 12 novembre 2026, un premier retour utilisateur après installation indiquait une disparition des lenteurs après la fin du chargement initial. Des essais supplémentaires ont ensuite montré des lenteurs résiduelles : les premiers déplacements proches ou lointains sont plus lents, puis les nouvelles vues deviennent rapides, y compris dans des zones non encore parcourues. La première conclusion de résolution était donc prématurée.

Le code testé est conservé à l’identique pour la publication sur `main`. Aucun délai artificiel supplémentaire ni changement de démarrage n’a été ajouté.

## Mesures complémentaires sur Beta

La console confirme Tampermonkey **5.5.1** et la révision **20261112-no-redirect**. Les traces du calque donnent notamment :

| Durée de requête | Premier callback de démarrage | Dessin après réponse |
| --- | --- | --- |
| 11 873 ms | 11 725 ms | 115 ms |
| 12 829 ms | 12 828 ms | 36 ms |
| 14 226 ms | 14 033 ms | 81 ms |

De nombreuses requêtes ultérieures prennent entre 200 et 494 ms, avec un callback de démarrage souvent reçu vers 120 ms. Les dessins observés dans cet échantillon prennent de 8 à 242 ms, sans attente mesurée dans la file de dessin. Cela confirme que le dessin du calque ne représente pas les 12 à 14 secondes des trois exemples.

Sur la fenêtre serveur du 12 novembre 2026 de **20:00:00 à 20:24:34 UTC**, les 37 POST reçus pour la RPC française du calque répondent tous HTTP 200. Le champ `response.origin_time` vaut en moyenne **150 ms**, avec un minimum de **46 ms** et un maximum de **823 ms**. Cette agrégation n’est pas une corrélation requête par requête avec la console et ne mesure ni le trajet réseau complet ni les requêtes qui n’auraient pas atteint le serveur.

L’attente dominante est donc observée avant réception du premier callback Tampermonkey. Deux causes restent à départager : une attente du gestionnaire avant émission et une livraison tardive des callbacks lorsque la page est occupée. La préparation des requêtes dans Tampermonkey utilise toujours un verrou partagé, même lorsque la requête courante refuse les redirections ; une autre requête peut déjà le détenir. Ce mécanisme est compatible avec les traces, mais aucun autre script précis n’a été identifié comme responsable. Le cache des PR seul n’explique pas le retour utilisateur concernant les zones inédites.

### Prochain essai d’isolement

Conserver la même version du Localisateur. Fermer les autres onglets WME, désactiver temporairement les autres userscripts actifs sur WME, puis recharger Beta avec uniquement le Localisateur actif. Attendre le chargement initial et comparer plusieurs déplacements proches puis lointains, dont des zones inédites. Relever les mêmes durées API et rendu. Restaurer ensuite les scripts désactivés.

Si les attentes disparaissent, réactiver les autres scripts par groupes pour rechercher l’interaction. Si elles persistent, poursuivre le diagnostic du Localisateur, du gestionnaire et de la charge de la page. Aucun préchargement artificiel, relancement agressif ni nouveau transport n’est ajouté sans ce résultat.

## Contrôles de cette révision

La syntaxe, les 16 suites hors ligne et la reproductibilité de l’archive passent. Les six scénarios API en lecture seule couvrant les huit RPC passent également, avec 14 réponses HTTP 200. Ils utilisent un adaptateur Node.js avec les redirections interdites ; ils ne mesurent pas les performances de Tampermonkey ou du SDK dans le navigateur utilisateur.
