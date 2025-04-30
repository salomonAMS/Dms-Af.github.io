document.addEventListener('DOMContentLoaded', function() {
    // Observer pour les animations au défilement
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.1
    });

    // Sélectionner tous les éléments avec les classes d'animation
    const animElements = document.querySelectorAll('.fade-up, .fade-right, .fade-left, .scale-up');
    animElements.forEach(element => {
        observer.observe(element);
    });
});