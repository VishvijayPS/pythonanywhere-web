      // Create a hidden iframe to preload the main page
      const iframe = document.createElement("iframe");
      iframe.src = "home.html";
      iframe.style.display = "none";

      iframe.onload = function () {
        // Add a delay (in milliseconds) after the page loads
        setTimeout(function () {
          window.location.href = "home.html";
        }, 2000);
      };

      document.body.appendChild(iframe);