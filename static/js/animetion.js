document.addEventListener('DOMContentLoaded', function() {
    // Typewriter Effect
    const typewriters = document.querySelectorAll('.typewriter');
    
    typewriters.forEach((tw, index) => {
        const text = tw.textContent;
        tw.textContent = '';
        
        setTimeout(() => {
            let i = 0;
            const typing = setInterval(() => {
                if (i < text.length) {
                    tw.textContent += text.charAt(i);
                    i++;
                } else {
                    clearInterval(typing);
                }
            }, 100);
        }, index * 300);
    });
    
    // Scroll Animation
    const contentSections = document.querySelectorAll('.content-section , .project-card ');
    
    function checkScroll() {
        contentSections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight * 0.75) {
                section.classList.add('active');
            }
        });
    }
    
    // Initial check
    checkScroll();
    
    // Check on scroll
    window.addEventListener('scroll', checkScroll);
});

  // Apply the saved theme on page load
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
  }

  function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    // Save the current mode in localStorage
    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  }
