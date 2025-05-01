const navLinks = document.getElementById("nav-links");
const menuBtn = document.getElementById("menu-btn");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute(
        "class",
        isOpen ? "ri-close-line" : "ri-menu-3-line"
    );
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

const scrollRevealOption = {
    distance: "60px",
    origin: "bottom",
    duration: 1000,
};

//header container
ScrollReveal().reveal(".header__container", {
    ...scrollRevealOption,
});

ScrollReveal().reveal(".header__container .section__description", {
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".header__container .header__btn", {
    ...scrollRevealOption,
    delay: 1000,
});
//about container
ScrollReveal().reveal(".about__content .section__header", {
    ...scrollRevealOption,
});
ScrollReveal().reveal(".about__content .section__description", {
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".about__content .about__btn", {
    ...scrollRevealOption,
    delay: 1000,
})
//portfolio container
ScrollReveal().reveal(".portfolio__card", {
    duration: 1000,
    interval: 500,
});