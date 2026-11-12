# Diagnostic prod/Beta — 12 novembre 2026

Version 1.2.0, révision en validation `20261112-no-redirect`.

## Observations

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

## Changement et validation attendue

Les RPC Supabase utilisent des URL finales. Le script demande désormais `anonymous: true` et `redirect: "error"` via `GM_xmlhttpRequest`. Les cookies restent omis ; les redirections ne sont plus suivies. [La documentation Tampermonkey](https://www.tampermonkey.net/documentation.php?locale=en&q=GM_xmlhttpRequest) précise que ces options sélectionnent son moteur fetch sur Chrome. Il ne s’agit pas du fetch de page, incompatible avec la politique réseau observée sur WME.

Les paramètres API, la base et le fonctionnement du SDK ne changent pas. Les annulations et le délai maximal de 20 secondes restent actifs. Les temps du dessin sont maintenant consignés séparément des réponses API, sans coordonnées ni noms de route. Cela permet de distinguer une attente du gestionnaire d’un rendu lent dans WME Beta. Le nom et la version du gestionnaire sont ajoutés au message de démarrage.

La révision reste sur une branche de validation. Les contrôles automatisés et les lectures réelles des API ne remplacent pas la comparaison après installation dans WME Beta. Aucun gain réel dans Beta n’est annoncé avant cette vérification.

## Contrôles de cette révision

La syntaxe, les 16 suites hors ligne et la reproductibilité de l’archive passent. Les six scénarios API en lecture seule couvrant les huit RPC passent également, avec 14 réponses HTTP 200. Ils utilisent un adaptateur Node.js avec les redirections interdites ; ils ne mesurent pas les performances de Tampermonkey ou du SDK dans le navigateur utilisateur.
