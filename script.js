let menuBar = document.querySelector(".menuBar");
let menu = document.querySelector(".menu");
let tabletMenu = document.querySelector(".tabletMenu");
let icon = document.querySelector(".icon");

menuBar.addEventListener("click", (e) => {
  e.preventDefault();
  tabletMenu.classList.toggle("show");
  if (icon.classList.contains("fa-bars")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-x");
  } else {
    icon.classList.remove("fa-x");
    icon.classList.add("fa-bars");
  }
});
