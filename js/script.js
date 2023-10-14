// toggle class active
const navbarNav = document.querySelector(".navbar-nav");

//ketika hamburger menu di click
document.querySelector("#garis-tiga-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//klick di luar sidebar untuk menghilangkan navbar
const hamburger = document.querySelector("#garis-tiga-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
