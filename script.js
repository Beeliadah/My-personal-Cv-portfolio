// Dark/Light mode toggle
const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;
toggleBtn.addEventListener('click', () => {
    body.classList.toggle('light');
    const icon = toggleBtn.querySelector('i');
    if (body.classList.contains('light')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
});

// Typing effect for title
const titleEl = document.getElementById('typing-title');
const titles = ['Front End & Back End Developer', 'Full-Stack Engineer', 'Electrical Technologist', 'Digital Marketing Expert', 'Cybersecurity Enthusiast'];
let titleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const current = titles[titleIndex];
    if (isDeleting) {
        titleEl.textContent = current.substring(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
            isDeleting = false;
            titleIndex = (titleIndex + 1) % titles.length;
        }
    } else {
        titleEl.textContent = current.substring(0, charIndex + 1);
        charIndex++;
        if (charIndex === current.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }
    }
    setTimeout(typeEffect, isDeleting ? 50 : 100);
}
typeEffect();

// Smooth scroll & active nav highlight
const navLinks = document.querySelectorAll('nav ul li a');
const sections = document.querySelectorAll('.cv-section');

function setActive() {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionBottom = sectionTop + section.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
            current = section.getAttribute('id');
        }
    });
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', setActive);
setActive();

// Smooth scroll for nav links
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Scroll reveal animation for sections
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });
document.querySelectorAll('.cv-section').forEach(section => observer.observe(section));

// Back to top button
const backBtn = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
    if (window.scrollY > 500) backBtn.style.display = 'flex';
    else backBtn.style.display = 'none';
});
backBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
backBtn.style.display = 'none';