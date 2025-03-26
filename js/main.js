// Navigation
const initNavigation = () => {
  const mobileMenu = document.getElementById("mobile-menu");
  const navLinks = document.querySelector(".nav-links");

  mobileMenu?.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
};

// Scroll animations
const observeElements = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  });

  document.querySelectorAll(".content-section").forEach((section) => {
    observer.observe(section);
  });
};

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  observeElements();
});
