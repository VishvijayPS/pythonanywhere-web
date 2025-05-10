// Scroll-triggered animations
document.addEventListener("scroll", () => {
  const scrollImages = document.querySelectorAll(".scroll-image");

  scrollImages.forEach((image) => {
    const imagePosition = image.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (imagePosition < screenPosition) {
      image.classList.add("active");
    }
  });
});

// Loading page redirecting script
if (performance.getEntriesByType("navigation")[0].type === "reload") {
  // Redirect to another page
  window.location.href = "loder.html";
}

// Add event listeners for dropdown hover
const dropdowns = document.querySelectorAll(".dropdown");
const overlay = document.querySelector(".overlay");

dropdowns.forEach((dropdown) => {
  dropdown.addEventListener("mouseenter", () => {
    overlay.style.display = "block";
  });

  dropdown.addEventListener("mouseleave", () => {
    overlay.style.display = "none";
  });
});

// Hide overlay when clicking outside
overlay.addEventListener("click", () => {
  overlay.style.display = "none";
});
document.addEventListener("DOMContentLoaded", function () {
  const video = document.querySelector(".fullscreen-video video");

  // Fallback if video fails to load
  video.addEventListener("error", function () {
    const fallbackImg = this.querySelector("img");
    if (fallbackImg) {
      this.parentElement.style.background = `url(${fallbackImg.src}) center/cover no-repeat`;
      this.style.display = "none";
      fallbackImg.style.display = "block";
    }
  });

  // Make header opaque when scrolling down
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (window.scrollY > 50) {
      header.style.background = "rgba(255, 255, 255, 0.95)";
      header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
    } else {
      header.style.background = "transparent";
      header.style.boxShadow = "none";
    }
  });
});

// Add this to your existing JavaScript
document.addEventListener("DOMContentLoaded", function () {
  const navItems = document.querySelectorAll(".nav-menu li, .dropdown");
  const heroContent = document.querySelector(".hero-content");

  navItems.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      heroContent.style.opacity = "0";
      heroContent.style.visibility = "hidden";
    });

    item.addEventListener("mouseleave", () => {
      heroContent.style.opacity = "1";
      heroContent.style.visibility = "visible";
    });
  });
});

function toggleMenu() {
  const navMenu = document.querySelector('.nav-menu');
  navMenu.classList.toggle('active');
}

