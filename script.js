function openSidebar() {
    const sidebar = document.querySelector("nav");
    const hamburgerMenu = document.getElementById("hamburger-menu");
    sidebar.classList.toggle("active");
    hamburgerMenu.style.scale = 0;
}

function closeSidebar() {
    const sidebar = document.querySelector("nav");
    const hamburgerMenu = document.getElementById("hamburger-menu");
    sidebar.classList.toggle("active");
    hamburgerMenu.style.scale = 1;
}

let prevScrollPos = window.pageYOffset;

window.addEventListener("scroll", function () {
    const currentScrollPos = window.pageYOffset;
    const header = document.querySelector("header");
    const hamburgerMenu = document.getElementById("hamburger-menu");
    const sidebar = document.querySelector("nav");
    const backToTop = document.getElementById("backToTop");
    if (window.scrollY > 300) {
        backToTop.style.display = "block";
    }
    if (prevScrollPos < currentScrollPos) {
        header.classList.add("scrollDown");
        sidebar.classList.remove("active");
        hamburgerMenu.style.scale = 1;
    } else {
        header.classList.remove("scrollDown");
        header.classList.add("scrollUp");
    }
    if (window.scrollY == 0) {
        header.classList.remove("scrollUp");
        backToTop.style.display = "none";
    }
    prevScrollPos = currentScrollPos;
});
