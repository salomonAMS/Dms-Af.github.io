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

// Animation pour les éléments du portfolio
document.addEventListener('DOMContentLoaded', function() {
    // Observer pour les animations au défilement
    const portfolioObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Ajouter un délai aléatoire pour chaque élément
          setTimeout(() => {
            entry.target.classList.add('active');
          }, Math.random() * 500); // Délai aléatoire entre 0 et 500ms
        } else {
          // Option: retirer la classe active lorsque l'élément n'est plus visible
          // entry.target.classList.remove('active');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    });
  
    // Sélectionner tous les éléments du portfolio
    const portfolioItems = document.querySelectorAll('.portfolio-box');
    portfolioItems.forEach(item => {
      portfolioObserver.observe(item);
    });
  });