function createLemon() {
  const lemon = document.createElement("div");
  lemon.classList.add("lemon");
  lemon.innerText = "🍋";
  document.body.appendChild(lemon);
  lemon.style.left = Math.random() * 100 + "vw";
  lemon.style.animationDuration = Math.random() * 3 + 2 + "s";
  setTimeout(() => {
    lemon.remove();
  }, 5000);
}

setInterval(createLemon, 300);
