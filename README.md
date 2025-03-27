# Correction pour Commitment-

Ce dépôt contient des corrections pour le projet Commitment-, en particulier pour le problème des boutons de choix (choice-cards) dans le formulaire `post-job.html`.

## Problème

Dans la page `post-job.html`, les boutons de choix (checkboxes et radio buttons) dans les sections comme "Délai de recrutement" ne fonctionnent pas correctement. L'utilisateur ne peut pas cliquer sur les boutons pour les sélectionner.

## Cause

Le problème vient du gestionnaire d'événements pour les cartes de choix (`choice-card`) qui ne met pas correctement à jour l'état des checkboxes et des styles visuels lors d'un clic.

## Solution

Nous avons créé un script de correction (`choice-cards-fix.js`) qui :

1. Réinitialise les gestionnaires d'événements pour tous les éléments `.choice-card`
2. Ajoute des gestionnaires d'événements qui fonctionnent correctement
3. Garantit que les styles visuels sont correctement appliqués lorsque les éléments sont sélectionnés
4. Inclut une observation des changements du DOM pour initialiser les nouveaux éléments ajoutés dynamiquement

## Comment utiliser la correction

### Option 1 : Utiliser la version corrigée

Nous avons créé un fichier `post-job-fixed.html` qui intègre déjà notre correction. Vous pouvez simplement l'utiliser à la place du fichier original.

### Option 2 : Ajouter le script de correction

Pour corriger le problème dans le fichier original :

1. Copiez le fichier `js/choice-cards-fix.js` dans votre répertoire JavaScript
2. Dans le fichier `post-job.html`, ajoutez le script juste avant la balise fermante `</body>` :

```html
<!-- Script de correction des choice-cards -->
<script src="../js/choice-cards-fix.js"></script>
```

## Autres corrections possibles

Une autre approche pour résoudre ce problème serait de corriger directement le gestionnaire d'événements dans le script d'origine en remplaçant :

```javascript
const name = input.getAttribute('name');
document.querySelectorAll('input[name="' + name + '"]').forEach(function(r) {
    // ...
});
```

Par :

```javascript
const name = input.getAttribute('name');
document.querySelectorAll(`input[name="${name}"]`).forEach(function(r) {
    // ...
});
```

Cependant, notre approche est plus robuste car elle réimplémente complètement le gestionnaire d'événements et garantit que les styles visuels sont correctement appliqués.

## Démonstration

Après application de la correction, les boutons de choix fonctionnent comme prévu :
- Les checkboxes peuvent être cochées/décochées indépendamment
- Les boutons radio sélectionnent une seule option dans leur groupe
- L'état visuel des boutons reflète correctement leur état sélectionné

## Auteur

Créé par Bapt252
