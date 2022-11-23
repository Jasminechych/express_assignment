const nav = document.querySelector(".nav-list");
const home = document.querySelector("#home");
const about = document.querySelector("#about");
const portfolio = document.querySelector("#portfolio");
const contact = document.querySelector("#contact");
let currentPage = home;

nav.addEventListener("click", (e) => {
  if (e.target.id !== currentPage.id) {
    currentPage.classList.remove("active");
    e.target.classList.add("active");
    currentPage = e.target;
  }
});
