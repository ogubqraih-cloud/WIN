// 漣 — hero.js
// Top page hero slideshow with cross-fade and slow zoom on each image.

(function () {
  "use strict";

  const slides = document.querySelectorAll(".home-hero__slide");
  if (slides.length < 2) return;

  let current = 0;
  const interval = 7000; // 7s per slide

  const setActive = (index) => {
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.classList.add("is-active");
      } else {
        slide.classList.remove("is-active");
      }
    });
  };

  // Initial state
  setActive(0);

  // Auto-rotate
  setInterval(() => {
    current = (current + 1) % slides.length;
    setActive(current);
  }, interval);
})();
