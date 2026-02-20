// MOBILE NAVBAR
const navbar = document.getElementById('navbar');
const toggle = document.getElementById('toggle');
toggle.addEventListener('click', () => navbar.classList.toggle('open'));
document.querySelectorAll('.nav-drawer a').forEach(link => {
    link.addEventListener('click', () => navbar.classList.remove('open'));
});

// SCROLL REVEAL
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.classList.add('visible');
            observer.unobserve(e.target);
        }
    });
}, { threshold: 0.1 });
revealEls.forEach(el => observer.observe(el));