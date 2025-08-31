# Soft-Lock Opacité (anti-impayés 💸)

Un mini-script *vanilla JS* qui fait disparaître progressivement un site entre deux dates (ex. en cas de non-paiement).  
À la fin de la période, l’opacité passe à `0` et les interactions sont bloquées.

## ✨ Ce que ça fait

- Fait décroître l’opacité du `<body>` de **1 → 0** linéairement entre `dateDebut` et `dateFin`.
- Une fois arrivé à `0`, désactive tous les clics via `pointer-events: none`.
- Rafraîchit automatiquement l’opacité **toutes les heures**.

## 🎯 Cas d’usage

- Garde-fou “soft” pour les sites non réglés.  
- Message clair au client sans couper l’hébergement ni casser le SEO brutalement.  
- Réversible instantanément (une ligne à commenter/retirer).

## 🚀 Installation rapide

1. Ajoute le script sur le site (idéalement **en bas de page**, juste avant `</body>`).  
2. Renseigne **tes dates** de début/fin.  
3. **Push en liiiiigne.**
