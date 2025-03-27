/**
 * Script corrigé pour le problème des checkboxes de délai de recrutement
 * Le problème était dans le sélecteur utilisé pour les radios/checkboxes de même groupe
 */
document.addEventListener('DOMContentLoaded', function() {
    // Gestion des cartes de choix
    const choiceCards = document.querySelectorAll('.choice-card');
    
    choiceCards.forEach(function(card) {
        const input = card.querySelector('input');
        
        // Initialiser l'état
        if (input.checked) {
            card.classList.add('selected');
        }
        
        // Ajouter le gestionnaire d'événements
        card.addEventListener('click', function(e) {
            if (e.target !== input) {
                input.checked = !input.checked;
            }
            
            if (input.type === 'checkbox') {
                card.classList.toggle('selected', input.checked);
            } else if (input.type === 'radio') {
                // Désélectionner tous les autres radios du même groupe
                const name = input.getAttribute('name');
                // Utilisation des backticks et ${} pour le sélecteur au lieu de concaténation simple
                document.querySelectorAll(`input[name="${name}"]`).forEach(function(r) {
                    const parentCard = r.closest('.choice-card');
                    if (parentCard) {
                        parentCard.classList.toggle('selected', r.checked);
                    }
                });
                
                // Déclencher l'événement change pour les logiques conditionnelles
                const event = new Event('change');
                input.dispatchEvent(event);
            }
        });
    });
});
