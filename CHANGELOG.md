# Historique des versions

## 1.2.0 — 12 novembre 2026

### Correctif du calque PR, numéro de version conservé

- Corrige le calque PR pouvant rester sur « Chargement de la nouvelle zone… » après deux rafraîchissements successifs de la même vue.
- Partage la requête en cours entre ces rafraîchissements et applique sa réponse à la vue la plus récente.
- Empêche une erreur réseau d'une ancienne vue de remplacer le statut courant ou de relancer une requête devenue inutile.
- Affiche les points et cartouches sans attendre la récupération de la géométrie WME ; le placement des étiquettes s'affine ensuite en arrière-plan.
- Lit le zoom et l'emprise en parallèle et réutilise cette vue pour le dessin, sans les redemander au SDK. Une vue devenue obsolète reste ignorée.
- Vérifie également la zone à la fin du chargement des données WME, même sans étiquettes : les nouvelles vues peuvent charger leurs PR au lieu de seulement redessiner le cache précédent.
- Invalide les clés de rendu avant le retrait des points : un dessin interrompu ne peut plus laisser un calque vide considéré à tort comme déjà affiché.
- Regroupe les événements de navigation avec une première échéance de 120 ms, sans la repousser à chaque paquet WME et sans attente d'inactivité du navigateur.
- Conserve la réponse et le dessin en cours lorsque la vue ne change pas ; une nouvelle zone, un nouveau filtre ou un nouveau pays invalide toujours les résultats précédents.
- Diffère la conversion des segments/rues servant aux étiquettes après le premier affichage et la rafale de données WME, pour éviter de refaire ce travail à chaque paquet.
- Utilise une connexion directe à Supabase sans cookies ni référent, avec le transport anonyme Tampermonkey en secours si la connexion directe échoue ou dépasse 8 secondes. Les deux transports partagent le même délai maximal de 20 secondes par tentative, réception du corps incluse.
- Affiche la raison d'une nouvelle tentative du calque (délai dépassé, erreur réseau ou statut HTTP) et consigne localement le transport utilisé. Les erreurs HTTP et les réponses JSON invalides ne déclenchent pas de secours par un autre transport.

Réinstaller le userscript pour recevoir ce correctif sur une installation 1.2.0 antérieure.

### Publication initiale

- Publication du dépôt officiel public, avec liens stables d’installation et de mise à jour.
- Localisation des PR et des zones, sélection des segments et calque filtrable.
- Lecture des données françaises et colombiennes sur Supabase ; Colombie BETA.
- Démarrage exclusivement avec le SDK WME asynchrone.
- Pont local FDB, géométries de notes sur demande et corrections A40/PRF conservés.
- Documentation des sources IGN, des corrections locales et de la confidentialité.
