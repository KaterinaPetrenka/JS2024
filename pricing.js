// Menu toggle for mobile
// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});
const menuToggle = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.navbar');

menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('open');
});

// Add interactivity if required for future enhancements
document.querySelectorAll('.pricing-button').forEach(button => {
    button.addEventListener('click', () => {
        alert('Thank you for your interest! We will reach out to you soon.');
    });
});
