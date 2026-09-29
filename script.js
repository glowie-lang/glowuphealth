const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");
const sunButton = document.querySelector(".sun-button");
const tipButton = document.querySelector("#tipButton");

menuToggle?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

document.querySelectorAll(".main-nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
    if (menuToggle) menuToggle.textContent = "☰";
  });
});

sunButton?.addEventListener("click", () => {
  document.body.classList.toggle("cozy");
  sunButton.textContent = document.body.classList.contains("cozy") ? "🌙" : "☀️";
});

const tips = [
  "You don't have to be perfect, just be you. That's enough. 💚",
  "Taking a break is part of taking care of yourself. 🌿",
  "Big feelings don't make you a bad person. Feelings are information. 💭",
  "Asking for help is a brave thing to do. 🫶",
  "Your health is more than how you look — it's how you feel and function. ✨"
];

let tipIndex = 0;

tipButton?.addEventListener("click", () => {
  tipIndex = (tipIndex + 1) % tips.length;
  const quote = document.querySelector(".tip-content blockquote");

  quote.style.opacity = "0";

  setTimeout(() => {
    quote.innerHTML = `“${tips[tipIndex]}”`;
    quote.style.opacity = "1";
  }, 180);
});
