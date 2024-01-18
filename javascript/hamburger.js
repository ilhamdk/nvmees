var leftMenu = document.getElementById("left-menu");
var leftNavContent = document.getElementById("left-nav-content");
var navToggle = document.getElementById("nav-toggle");
var navClose = document.getElementById("nav-close");

function toggleMenu() {
    leftMenu.classList.toggle("show-menu");

    // Apply styles to elements with the class "li-left" when the menu is open
    var liLeftElements = document.getElementsByClassName("li-left");
    for (var i = 0; i < liLeftElements.length; i++) {
        liLeftElements[i].style.marginRight = leftMenu.classList.contains("show-menu") ? "0px" : "";
    }

    if (leftMenu.classList.contains("show-menu")) {
        navToggle.style.display = "none";
        navClose.style.display = "block";
    } else {
        navToggle.style.display = "block";
        navClose.style.display = "none";
    }
}

function updateNavVisibility() {
    var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    navToggle.style.display = windowWidth > 767 ? "none" : "block";
    navClose.style.display = "none";
}

updateNavVisibility();

navToggle.addEventListener("click", toggleMenu);
navClose.addEventListener("click", toggleMenu);

window.addEventListener("resize", updateNavVisibility);

window.addEventListener("scroll", function () {
    if (leftMenu.classList.contains("show-menu")) {
        toggleMenu();
    }
});
