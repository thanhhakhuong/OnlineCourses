const text = "Hello World";
let index = 0;
function displayText() {
  document.querySelector("h1").innerText = text.slice(0, index);
  index++;
  if (index > text.length) index = 0;
}
setInterval(displayText, 100); // without ()

const toggle = document.getElementById("toggle");

toggle.addEventListener("change", (event) => {
  document.body.classList.toggle("dark", event.target.checked);
});
