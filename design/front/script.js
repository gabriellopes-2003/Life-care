window.addEventListener("load", () => {
  document.body.classList.add("is-loaded");
});

const revealTargets = document.querySelectorAll(
  ".reveal-text, .feature-card, .signal-panel, .clarity h2, .clarity p, .model article, .people h2, .healthcare > div, .round-cta"
);

const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
      }
    }
  },
  { threshold: 0.18, rootMargin: "0px 0px -8% 0px" }
);

revealTargets.forEach((target, index) => {
  target.style.transitionDelay = `${Math.min(index % 4, 3) * 80}ms`;
  observer.observe(target);
});

const cards = [...document.querySelectorAll(".feature-card")];

window.addEventListener(
  "scroll",
  () => {
    const scrollY = window.scrollY;
    cards.forEach((card, index) => {
      const drift = Math.sin((scrollY / 260) + index) * 10;
      card.style.setProperty("--drift", `${drift}px`);
    });
  },
  { passive: true }
);
