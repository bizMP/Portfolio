// MOBILE NAVBAR
const navbar = document.getElementById('navbar');
const toggle = document.getElementById('toggle');
toggle.addEventListener('click', () => navbar.classList.toggle('open'));
document.querySelectorAll('.nav-drawer a').forEach(link => {
    link.addEventListener('click', () => {
        if (!link.classList.contains('nav-external')) {
            navbar.classList.remove('open');
        }
    });
});

// FAQ ACCORDION
document.querySelectorAll('.question').forEach(q => {
    q.querySelector('.question-header').addEventListener('click', () => {
        const isOpen = q.classList.contains('open');
        document.querySelectorAll('.question').forEach(other => other.classList.remove('open'));
        if (!isOpen) q.classList.add('open');
    });
});

// COLOR CIRCLES
document.querySelectorAll('.colorCircle').forEach(circle => {
    circle.addEventListener('click', function() {
        document.querySelectorAll('.colorCircle').forEach(c => c.classList.remove('selected'));
        this.classList.add('selected');
    });
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
}, { threshold: 0.08 });
revealEls.forEach(el => observer.observe(el));