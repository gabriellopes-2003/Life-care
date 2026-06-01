import gsap from "https://esm.sh/gsap@3.12.5";
import { ScrollTrigger } from "https://esm.sh/gsap@3.12.5/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const splitText = (selector, mode = "chars") => {
  document.querySelectorAll(selector).forEach((element) => {
    const text = element.textContent.trim();
    const parts = mode === "words" ? text.split(/\s+/) : [...text];
    element.textContent = "";

    parts.forEach((part, index) => {
      const span = document.createElement("span");
      span.className = mode === "words" ? "word" : "char";
      span.textContent = mode === "words" ? part : part === " " ? "\u00a0" : part;
      span.style.display = "inline-block";
      element.appendChild(span);
      if (mode === "words" && index < parts.length - 1) {
        element.appendChild(document.createTextNode(" "));
      }
    });
  });
};

splitText(".split-chars", "chars");
splitText(".split-words", "words");

const markLoaded = () => {
  gsap.to(".loader_mark", {
    yPercent: -40,
    opacity: 0,
    duration: 0.8,
    ease: "power3.inOut",
  });
  gsap.to(".loader", {
    autoAlpha: 0,
    duration: 0.9,
    delay: 0.15,
    ease: "power3.inOut",
  });
};

window.addEventListener("load", markLoaded);

ScrollTrigger.create({
  start: 8,
  end: "max",
  onUpdate: (self) => {
    document.body.classList.toggle("at-top", self.scroll() < 8);
  },
});

gsap.from(".hero_heading .char", {
  yPercent: 110,
  opacity: 0,
  stagger: 0.012,
  duration: 1.2,
  ease: "expo.out",
  delay: 0.35,
});

gsap.from(".hero_intro .word", {
  y: 14,
  opacity: 0,
  stagger: 0.018,
  duration: 0.9,
  ease: "power2.out",
  delay: 0.55,
});

gsap.to(".hero_device", {
  yPercent: -20,
  scale: 1.05,
  ease: "none",
  scrollTrigger: {
    trigger: ".hero_leave",
    start: "top top",
    end: "bottom top",
    scrub: true,
  },
});

document.querySelectorAll(".split-chars").forEach((element) => {
  if (element.classList.contains("hero_heading")) return;
  gsap.from(element.querySelectorAll(".char"), {
    yPercent: 105,
    opacity: 0,
    stagger: 0.01,
    duration: 0.95,
    ease: "power3.out",
    scrollTrigger: {
      trigger: element,
      start: "top 76%",
    },
  });
});

const items = gsap.utils.toArray(".hero_items-list span");
const timeline = gsap.timeline({ repeat: -1 });
items.forEach((item) => {
  timeline
    .to(item, { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" })
    .to(item, { opacity: 1, duration: 0.85 })
    .to(item, { opacity: 0, y: -16, duration: 0.35, ease: "power2.in" });
});

gsap.to(".circles span", {
  rotate: 18,
  scale: 1.08,
  stagger: 0.1,
  ease: "none",
  scrollTrigger: {
    trigger: ".parts_section",
    start: "top bottom",
    end: "bottom top",
    scrub: true,
  },
});

gsap.utils.toArray(".parts_item").forEach((card, index) => {
  ScrollTrigger.create({
    trigger: card,
    start: "top 58%",
    end: "bottom 44%",
    onEnter: () => activateCard(card),
    onEnterBack: () => activateCard(card),
  });

  gsap.from(card, {
    y: 70,
    opacity: 0,
    duration: 0.9,
    ease: "power3.out",
    delay: index * 0.06,
    scrollTrigger: {
      trigger: card,
      start: "top 82%",
    },
  });
});

function activateCard(activeCard) {
  document.querySelectorAll(".parts_item").forEach((card) => {
    card.classList.toggle("is-active", card === activeCard);
  });
}

gsap.from(".tick_field span", {
  opacity: 0,
  y: 24,
  stagger: 0.04,
  duration: 0.6,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".scan_scene",
    start: "top 62%",
  },
});

gsap.to(".tick_field", {
  yPercent: -18,
  ease: "none",
  scrollTrigger: {
    trigger: ".scan_scene",
    start: "top bottom",
    end: "bottom top",
    scrub: true,
  },
});

gsap.utils.toArray(".model_item").forEach((item) => {
  gsap.from(item, {
    y: 80,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: item,
      start: "top 80%",
    },
  });
});

gsap.to(".all_of_us-track", {
  xPercent: -42,
  ease: "none",
  scrollTrigger: {
    trigger: ".all_of_us",
    start: "top bottom",
    end: "bottom top",
    scrub: true,
  },
});

gsap.from(".btn", {
  scale: 0.72,
  opacity: 0,
  duration: 0.9,
  ease: "back.out(1.7)",
  scrollTrigger: {
    trigger: ".final_section",
    start: "top 70%",
  },
});

ScrollTrigger.refresh();
