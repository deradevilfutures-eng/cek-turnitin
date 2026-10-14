
"use strict";

(() => {
  const button = document.getElementById("menuButton");
  const menu = document.getElementById("navMenu");

  if (button && menu) {
    button.addEventListener("click", () => {
      const isOpen = menu.classList.toggle("open");
      button.setAttribute("aria-expanded", String(isOpen));
    });

    menu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        menu.classList.remove("open");
        button.setAttribute("aria-expanded", "false");
      });
    });
  }

  const year = document.getElementById("year");

  if (year) {
    year.textContent = String(new Date().getFullYear());
  }
})();
