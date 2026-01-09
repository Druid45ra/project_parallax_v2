// nav-toggle.js
document.addEventListener("DOMContentLoaded", () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.getElementById('nav-links'); // Asigură-te că ID-ul există în HTML

    if (!navToggle || !navLinks) return;

    const toggleMenu = (forceClose = false) => {
        const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
        const shouldOpen = forceClose ? false : !isExpanded;

        navToggle.setAttribute('aria-expanded', String(shouldOpen));
        // Folosim o singură clasă consistentă definită în CSS
        navLinks.classList.toggle('nav-links--open', shouldOpen);
        navToggle.classList.toggle('is-active', shouldOpen); 
    };

    navToggle.addEventListener('click', () => toggleMenu());

    // Închidere la click pe link (pentru Single Page Application feel)
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => toggleMenu(true));
    });

    // Închidere cu tasta Escape (Best practice pentru accesibilitate)
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navToggle.getAttribute('aria-expanded') === 'true') {
            toggleMenu(true);
            navToggle.focus();
        }
    });
});
