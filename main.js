const menuButton = document.querySelector(".menu-button");
const mainNav = document.querySelector(".nav__list");

menuButton.addEventListener("click", () => {
    mainNav.classList.toggle("active");
})