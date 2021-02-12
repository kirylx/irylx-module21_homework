import close from "../assets/close-24px.svg";
import menu from "../assets/menu-24px.svg";

// ABOUT.HTML:

const navbars = document.querySelector(".header__navbars");
const navbarsIcon = document.querySelector("#navbarsIcon");

const toggleNavbar = function toggleResponsiveNavbarWhenClicking() {
    navbars.classList.toggle("navbars-visible");
    if (navbars.classList.contains("navbars-visible")) {
        navbarsIcon.src = close;
    } else {
        navbarsIcon.src = menu;
    }
};

navbars.addEventListener("click", toggleNavbar);
