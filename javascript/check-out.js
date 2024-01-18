
// hamburger button

var leftMenu = document.getElementById("left-menu");
var navToggle = document.getElementById("nav-toggle");
var navClose = document.getElementById("nav-close");

function toggleMenu() {
    leftMenu.classList.toggle("show-menu");

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




var leftMenu = document.getElementById("left-menu");
var navToggle = document.getElementById("nav-toggle");
var navClose = document.getElementById("nav-close");

function toggleMenu() {
    leftMenu.classList.toggle("show-menu");
    navToggle.style.display = navToggle.style.display === "none" ? "block" : "none";
    navClose.style.display = navClose.style.display === "none" ? "block" : "none";
}

// Set display none for nav-close when the page loads
navClose.style.display = "none";

// Set up click event listeners for nav-toggle and nav-close
navToggle.addEventListener("click", toggleMenu);
navClose.addEventListener("click", toggleMenu);

// Set up resize event listener to handle screen size changes
window.addEventListener("resize", function () {
    var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    navToggle.style.display = windowWidth > 767 ? "none" : "block";
});

// popup new address

let popupAddress = document.getElementById("pop-up-address");
let popupAddressContainer = document.querySelector(".pop-up-address");
let popupAddressContainerBg = document.querySelector(".pop-up-address-bg");

function openPopupAddress(){
  popupAddressContainer.classList.add("open-popup-address");
  popupAddressContainerBg.classList.add("open-popup-address-bg")
}

function closePopupAddress(){
  popupAddressContainer.classList.remove("open-popup-address");
  popupAddressContainerBg.classList.remove("open-popup-address-bg")
}

 // new address

let popupNewAddress = document.getElementById("pop-up-new-address");
let popupNewAddressContainer = document.querySelector(".pop-up-new-address");
let popupNewAddressContainerBg = document.querySelector(".pop-up-new-address-bg");

function OpenPopupNewAddress(){
  popupNewAddressContainer.classList.remove("open-popup-address");
  popupNewAddressContainerBg.classList.remove("open-popup-address-bg")
  popupNewAddressContainer.classList.add("open-popup-new-address");
  popupNewAddressContainerBg.classList.add("open-popup-new-address-bg")
}

function closePopupNewAddress(){
  popupNewAddressContainer.classList.remove("open-popup-new-address");
  popupNewAddressContainerBg.classList.remove("open-popup-new-address-bg")
}

// popup change shipping

let popupShipping = document.getElementById("pop-up-shipping");
let popupShippingContainer = document.querySelector(".pop-up-shipping");
let popupShippingContainerBg = document.querySelector(".pop-up-shipping-bg");

function openPopupShipping(){
  popupShippingContainer.classList.add("open-popup-shipping");
  popupShippingContainerBg.classList.add("open-popup-shipping-bg")
}

function closePopupShipping(){
  popupShippingContainer.classList.remove("open-popup-shipping");
  popupShippingContainerBg.classList.remove("open-popup-shipping-bg")
}

// checkbox only one 

var checkboxes = document.querySelectorAll('input[type="checkbox"]');

checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
        var name = this.name;

        checkboxes.forEach(function(otherCheckbox) {
            if (otherCheckbox.name === name && otherCheckbox !== checkbox) {
                otherCheckbox.checked = false;
            }
        });
    });
});
