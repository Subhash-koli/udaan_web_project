document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been received. We will get back to you soon.`);
        form.reset();
    } else {
        alert('Please fill in all fields before submitting.');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const images = [
        './image1.jpg',
        './image2.jpg',
        './image3.jpg',
        './image4.jpg'
    ];

    let currentIndex = 0;
    const heroElement = document.querySelector('.hero');

    setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length; 
        heroElement.style.backgroundImage = `url('${images[currentIndex]}')`;
    }, 1000);
});

document.addEventListener("DOMContentLoaded", () => {
    const mobileMenu = document.getElementById("mobile-menu");
    const nav = document.querySelector("header nav");

    mobileMenu.addEventListener("click", () => {
        nav.classList.toggle("active");
        mobileMenu.querySelector("i").classList.toggle("fa-bars");
        mobileMenu.querySelector("i").classList.toggle("fa-times");
    });
});
// Scroll Progress Bar
window.addEventListener("scroll", () => {
    const progressBar = document.getElementById("progress-bar");
    const scrollDistance = document.documentElement.scrollTop;
    const totalHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercentage = (scrollDistance / totalHeight) * 100;
    progressBar.style.width = scrollPercentage + "%";
});

// Swiper Initialization
const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});
