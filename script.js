const toggleButton = document.getElementById("mode-toggle");
const body = document.body;

toggleButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  body.classList.toggle("day-mode");

  if (body.classList.contains("day-mode")) {
    toggleButton.textContent = "☀️";
  } else {
    toggleButton.textContent = "🌙";
  }
});
