const checkTheme = () => {
  document.querySelector("body").classList.toggle("theme-dark");
  document.querySelector("body").classList.toggle("theme-light");
};

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".check-theme").addEventListener("click", checkTheme);
});
