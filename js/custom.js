let toggleMenu = document.querySelector("header .toggles");
let links = document.querySelector("header nav");
let header = document.querySelector(".header");
let up = document.querySelector(".up");

toggleMenu.onclick = function () {
  this.classList.toggle("open");
  links.classList.toggle("open");
};

window.addEventListener("scroll", function () {
  window.scrollY >= 100
    ? header.classList.add("active")
    : header.classList.remove("active");
});

window.onscroll = function () {
  this.scrollY >= 900
    ? up.classList.add("active")
    : up.classList.remove("active");
};
up.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
