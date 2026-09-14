const screens = document.querySelectorAll(".screen");

function goTo(id) {
  screens.forEach(screen => screen.classList.remove("active"));

  const target = document.getElementById(id);
  target.classList.add("active");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

  // Cada cambio de pantalla genera unos corazones suaves.
  createHearts(8);
}

function reveal(card) {
  card.classList.toggle("revealed");
}

function openLetter() {
  const envelope = document.getElementById("envelope");
  const letter = document.getElementById("letter");
  const openText = document.getElementById("openText");
  const futureBtn = document.getElementById("futureBtn");

  envelope.classList.add("open");

  setTimeout(() => {
    letter.classList.add("show");
    openText.textContent = "tamo";
    futureBtn.classList.remove("hidden");
    createHearts(20);
  }, 650);
}

function createHearts(amount = 10) {
  const container = document.getElementById("hearts");

  for (let i = 0; i < amount; i++) {
    const heart = document.createElement("span");
    heart.className = "floating-heart";
    heart.textContent = Math.random() > .3 ? "♥" : "♡";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (12 + Math.random() * 18) + "px";
    heart.style.animationDuration = (4 + Math.random() * 5) + "s";
    heart.style.animationDelay = Math.random() * 1.5 + "s";

    container.appendChild(heart);

    setTimeout(() => heart.remove(), 10000);
  }
}

// Corazones ocasionales mientras está abierta la página.
setInterval(() => {
  if (Math.random() > .35) createHearts(1);
}, 1800);




document.querySelectorAll(".photo-card img").forEach(img => {
  img.addEventListener("error", () => {
    img.style.display = "none";
    img.parentElement.classList.add("photo-missing");
  });
});
