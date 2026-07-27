import { animate, stagger } from "motion";

document.addEventListener("DOMContentLoaded", () => {
  animate(
    ".hero-item",
    {
      opacity: [0, 1],
      y: [30, 0]
    },
    {
      duration: 0.7,
      delay: stagger(0.12),
      easing: "ease-out"
    }
  );
});