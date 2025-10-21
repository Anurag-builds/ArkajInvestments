// js
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Set theme from localStorage or default dark
function setTheme(isLight) {
if (isLight) {
  body.classList.remove("dark-theme");
  body.classList.add("light-theme");
  themeToggle.checked = true;
  themeToggle.setAttribute("aria-checked", "true");
} else {
  body.classList.remove("light-theme");
  body.classList.add("dark-theme");
  themeToggle.checked = false;
  themeToggle.setAttribute("aria-checked", "false");
}
}

themeToggle.addEventListener("change", () => {
setTheme(themeToggle.checked);
localStorage.setItem("agri-theme-light", themeToggle.checked);
});

// Load saved theme on page load
const savedTheme = localStorage.getItem("agri-theme-light");
setTheme(savedTheme === "true");

// Design switch logic


// Show initial design 1

