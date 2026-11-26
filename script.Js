const toggle = document.getElementById('menuToggle');
const menu = document.getElementById('mobileMenu');

function setMenu(open) {
    menu.classList.toggle('open', open);
    toggle.classList.toggle('active', open);
    document.body.classList.toggle('menu-open', open);
    toggle.textContent = open ? '✕' : '☰';
    toggle.setAttribute('aria-expanded', open);
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
}

toggle.addEventListener('click', () => {
    setMenu(!menu.classList.contains('open'));
});

menu.querySelectorAll('a, .btn').forEach(el => {
    el.addEventListener('click', () => setMenu(false));
});

document.addEventListener('keydown', e => {
    if (e.key === 'Escape') setMenu(false);
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 767) setMenu(false);
});