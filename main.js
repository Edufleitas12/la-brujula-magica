// La Brújula Mágica - Main Entry File

console.log("¡La Brújula Mágica está lista para marcar el camino! 🧭✨");

const btnExplore = document.getElementById('btn-explore');
const btnAbout = document.getElementById('btn-about');
const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.getElementById('main-nav');
const navLinks = document.querySelectorAll('.main-nav .nav-link');

if (btnExplore) {
  btnExplore.addEventListener('click', () => {
    console.log("Explorando la aventura. Desplazando hacia la historia...");
  });
}

if (btnAbout) {
  btnAbout.addEventListener('click', () => {
    console.log("Conocer el proyecto clickeado. Desplazando hacia #proyecto...");
  });
}

// Menú hamburguesa para celulares y tablets
const setMenuState = (isOpen) => {
  if (!menuToggle || !mainNav) return;

  menuToggle.classList.toggle('is-open', isOpen);
  mainNav.classList.toggle('is-open', isOpen);
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
  document.body.classList.toggle('menu-open', isOpen);
};

if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    setMenuState(!mainNav.classList.contains('is-open'));
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => setMenuState(false));
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setMenuState(false);
  });

  document.addEventListener('click', (event) => {
    if (window.innerWidth > 768 || !mainNav.classList.contains('is-open')) return;
    if (!mainNav.contains(event.target) && !menuToggle.contains(event.target)) {
      setMenuState(false);
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) setMenuState(false);
  });
}

// Scroll Reveal Observer
const revealCallback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
};

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver(revealCallback, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });

  document.querySelectorAll('.scroll-reveal').forEach((el) => {
    revealObserver.observe(el);
  });
} else {
  document.querySelectorAll('.scroll-reveal').forEach((el) => {
    el.classList.add('visible');
  });
}
