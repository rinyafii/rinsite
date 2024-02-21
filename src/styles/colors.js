/*

const body = document.body;
const system = document.getElementById("theme-system-button");
const light = document.getElementById("theme-light-button");
const dark = document.getElementById("theme-dark-button");

system.addEventListener("click", () => setTheme("system"));

light.addEventListener("click", () => setTheme("light"));

dark.addEventListener("click", () => setTheme("dark"));

const availableThemes = ["system", "light", "dark"];

function setTheme(themeToSet) {
  if (!availableThemes.includes(themeToSet)) return;
  window.localStorage.setItem("theme", themeToSet);
  availableThemes.forEach((theme) => {
    if (theme !== themeToSet && body.classList.contains(theme))
      body.classList.remove(theme);
  });
  if (!body.classList.contains(themeToSet)) {
    body.classList.add(themeToSet);
  }
}

(function loadTheme() {
  const theme = window.localStorage.getItem("theme");
  setTheme(theme);
})();

*/