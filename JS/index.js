

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

function downloadCV() {
    const link = document.createElement('a');
    link.href = '/FILES/Abed Tayar - Software Engineer.pdf';
    link.download = 'Abed Tayar - Software Engineer.pdf';
    link.click();
}
// Mobile menu functionality
function toggleMobileMenu() {
    const mobileNav = document.getElementById('mobileNav');
    const menuBtn = document.querySelector('.mobile-menu-btn i');

    mobileNav.classList.toggle('active');

    if (mobileNav.classList.contains('active')) {
        menuBtn.classList.remove('fa-bars');
        menuBtn.classList.add('fa-times');
    } else {
        menuBtn.classList.remove('fa-times');
        menuBtn.classList.add('fa-bars');
    }
}

function closeMobileMenu() {
    const mobileNav = document.getElementById('mobileNav');
    const menuBtn = document.querySelector('.mobile-menu-btn i');

    mobileNav.classList.remove('active');
    menuBtn.classList.remove('fa-times');
    menuBtn.classList.add('fa-bars');
}

// Close mobile menu when clicking outside
document.addEventListener('click', function (e) {
    const mobileNav = document.getElementById('mobileNav');
    const menuBtn = document.querySelector('.mobile-menu-btn');

    if (!mobileNav.contains(e.target) && !menuBtn.contains(e.target)) {
        closeMobileMenu();
    }
});

// Add scroll effect to header
window.addEventListener('scroll', function () {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.1)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.08)';
    }
});

// Animate skill cards on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
        }
    });
}, observerOptions);

document.querySelectorAll('.skill-card, .project-card').forEach(card => {
    observer.observe(card);
});
