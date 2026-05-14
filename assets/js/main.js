// 漣 — main.js
// Common interactions: header scroll, hamburger, scroll-fade, footer year

(function () {
  "use strict";

  // ========== Header: shrink on scroll ==========
  const header = document.querySelector(".site-header");
  if (header) {
    const onScroll = () => {
      if (window.scrollY > 40) {
        header.classList.add("is-scrolled");
      } else {
        header.classList.remove("is-scrolled");
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  // ========== Hamburger: toggle SP menu ==========
  const hamburger = document.querySelector(".hamburger");
  const spMenu = document.querySelector(".sp-menu");

  if (hamburger && spMenu) {
    const closeMenu = () => {
      hamburger.classList.remove("is-open");
      spMenu.classList.remove("is-open");
      document.body.style.overflow = "";
      hamburger.setAttribute("aria-expanded", "false");
    };

    const openMenu = () => {
      hamburger.classList.add("is-open");
      spMenu.classList.add("is-open");
      document.body.style.overflow = "hidden";
      hamburger.setAttribute("aria-expanded", "true");
    };

    hamburger.addEventListener("click", () => {
      const isOpen = hamburger.classList.contains("is-open");
      isOpen ? closeMenu() : openMenu();
    });

    // Close when clicking any anchor inside the menu
    spMenu.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", closeMenu);
    });

    // ESC closes the menu
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && hamburger.classList.contains("is-open")) {
        closeMenu();
      }
    });
  }

  // ========== Scroll-fade: observe and reveal ==========
  const fadeTargets = document.querySelectorAll(".scroll-fade");

  if ("IntersectionObserver" in window && fadeTargets.length > 0) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "0px 0px -10% 0px",
        threshold: 0.15,
      }
    );

    fadeTargets.forEach((el) => observer.observe(el));
  } else {
    // Fallback: show everything immediately
    fadeTargets.forEach((el) => el.classList.add("is-visible"));
  }

  // ========== Footer: dynamic year ==========
  const yearEl = document.querySelector("[data-year]");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
})();
