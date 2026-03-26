gsap.registerPlugin(ScrollTrigger);

// LOADER
window.addEventListener("load", () => {
  gsap.to(".loader", {
    opacity: 0,
    duration: 1,
    onComplete: () => {
      document.querySelector(".loader").style.display = "none";
    },
  });
});

// HERO
gsap.from(".title", { y: -100, opacity: 0, duration: 1.5 });
gsap.from(".subtitle", { opacity: 0, delay: 1 });

// PARALLAX
gsap.to(".bg", {
  scrollTrigger: {
    trigger: ".parallax",
    scrub: true,
  },
  y: 200,
});

gsap.to(".mid", {
  scrollTrigger: {
    trigger: ".parallax",
    scrub: true,
  },
  y: 100,
});

// ROCKET JOURNEY
gsap.to(".rocket", {
  scrollTrigger: {
    trigger: ".journey",
    start: "top top",
    end: "bottom bottom",
    scrub: true,
  },
  x: window.innerWidth * 0.6,
  y: -200,
  rotation: 45,
});

// CARDS
gsap.utils.toArray(".card").forEach((card) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 80%",
    },
    y: 100,
    opacity: 0,
  });
});

// TIMELINE
gsap.utils.toArray(".step").forEach((step) => {
  gsap.from(step, {
    scrollTrigger: {
      trigger: step,
      start: "top 80%",
    },
    scale: 0,
    opacity: 0,
  });
});
