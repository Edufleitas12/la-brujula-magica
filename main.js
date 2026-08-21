// La Brújula Mágica - Main Entry File

console.log("¡La Brújula Mágica está lista para marcar el camino! 🧭✨");

// Simple interactive feedback on button clicks for verification
const btnExplore = document.getElementById('btn-explore');
const btnAbout = document.getElementById('btn-about');

if (btnExplore) {
  btnExplore.addEventListener('click', (e) => {
    console.log("Explorando la aventura. Desplazando hacia la historia...");
    // Allow default anchor navigation for smooth scrolling to #historia
  });
}

if (btnAbout) {
  btnAbout.addEventListener('click', (e) => {
    console.log("Conocer el proyecto clickeado. Desplazando hacia #proyecto...");
    // Allow default anchor navigation for smooth scrolling to #proyecto
  });
}

// Scroll Reveal Observer for Storyboard Timeline Items
const revealCallback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // Triggers once
    }
  });
};

const revealObserver = new IntersectionObserver(revealCallback, {
  threshold: 0.15,
  rootMargin: "0px 0px -50px 0px"
});

document.querySelectorAll('.scroll-reveal').forEach(el => {
  revealObserver.observe(el);
});
