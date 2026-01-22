(function () {
  // Year in footer
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile nav toggle
  const navToggle = document.getElementById("navToggle");
  const navList = document.getElementById("navList");
  if (navToggle && navList) {
    navToggle.addEventListener("click", () => {
      const isOpen = navList.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }

  // Language switch: keeps same page name (index/services/work/contact)
  const langButtons = document.querySelectorAll(".lang-btn");
  if (langButtons.length) {
    langButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const targetLang = btn.getAttribute("data-lang"); // en or fr
        if (!targetLang) return;

        const path = window.location.pathname; // e.g. /en/services.html
        const parts = path.split("/").filter(Boolean); // ["en","services.html"]
        if (parts.length < 2) {
          // If somehow on root
          window.location.href = `./${targetLang}/index.html`;
          return;
        }

        const currentLang = parts[0];          // en or fr
        const page = parts.slice(1).join("/"); // services.html (or index.html)

        // Same repo base
        const base = `/${parts[0] === currentLang ? "" : ""}`; // kept simple
        const newUrl = `/${targetLang}/${page}`;

        window.location.href = newUrl;
      });
    });
  }
})();
