const navLinks = document.querySelector("nav-links");
const menuBtn = document.querySelector("menu__btn");
const menuBtnIcon = document.querySelector("menu__btn i");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute(
        "class",
        isOpen ? "ri-close-line" : "ri-menu-3-line"
    );
});