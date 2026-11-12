# Historique des versions

## 1.2.0 — 12 novembre 2026

### Correctif du calque PR, numéro de version conservé

- Corrige le calque PR pouvant rester sur « Chargement de la nouvelle zone… » après deux rafraîchissements successifs de la même vue.
- Partage la requête en cours entre ces rafraîchissements et applique sa réponse à la vue la plus récente.
- Empêche une erreur réseau d'une ancienne vue de remplacer le statut courant ou de relancer une requête devenue inutile.

Réinstaller le userscript pour recevoir ce correctif sur une installation 1.2.0 antérieure.

### Publication initiale

- Publication du dépôt officiel public, avec liens stables d’installation et de mise à jour.
- Localisation des PR et des zones, sélection des segments et calque filtrable.
- Lecture des données françaises et colombiennes sur Supabase ; Colombie BETA.
- Démarrage exclusivement avec le SDK WME asynchrone.
- Pont local FDB, géométries de notes sur demande et corrections A40/PRF conservés.
- Documentation des sources IGN, des corrections locales et de la confidentialité.
