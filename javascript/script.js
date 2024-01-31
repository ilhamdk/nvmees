// carousel flash sale

// const carousel = document.querySelector(".carousel"),
// firstImg = carousel.querySelectorAll("img")[0],
// arrowIcons = document.querySelectorAll(".wrapper i");

// let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;

// const showHideIcons = () => {
//     // showing and hiding prev/next icon according to carousel scroll left value
//     let scrollWidth = carousel.scrollWidth - carousel.clientWidth; // getting max scrollable width
//     arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
//     arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
// }

// arrowIcons.forEach(icon => {
//     icon.addEventListener("click", () => {
//         let firstImgWidth = firstImg.clientWidth + 14; // getting first img width & adding 14 margin value
//         // if clicked icon is left, reduce width value from the carousel scroll left else add to it
//         carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
//         setTimeout(() => showHideIcons(), 60); // calling showHideIcons after 60ms
//     });
// });

// const autoSlide = () => {
//     // if there is no image left to scroll then return from here
//     if(carousel.scrollLeft - (carousel.scrollWidth - carousel.clientWidth) > -1 || carousel.scrollLeft <= 0) return;

//     positionDiff = Math.abs(positionDiff); // making positionDiff value to positive
//     let firstImgWidth = firstImg.clientWidth + 14;
//     // getting difference value that needs to add or reduce from carousel left to take middle img center
//     let valDifference = firstImgWidth - positionDiff;

//     if(carousel.scrollLeft > prevScrollLeft) { // if user is scrolling to the right
//         return carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
//     }
//     // if user is scrolling to the left
//     carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
// }

// const dragStart = (e) => {
//     // updatating global variables value on mouse down event
//     isDragStart = true;
//     prevPageX = e.pageX || e.touches[0].pageX;
//     prevScrollLeft = carousel.scrollLeft;
// }

// const dragging = (e) => {
//     // scrolling images/carousel to left according to mouse pointer
//     if(!isDragStart) return;
//     e.preventDefault();
//     isDragging = true;
//     carousel.classList.add("dragging");
//     positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
//     carousel.scrollLeft = prevScrollLeft - positionDiff;
//     showHideIcons();
// }

// const dragStop = () => {
//     isDragStart = false;
//     carousel.classList.remove("dragging");

//     if(!isDragging) return;
//     isDragging = false;
//     autoSlide();
// }

// carousel.addEventListener("mousedown", dragStart);
// carousel.addEventListener("touchstart", dragStart);

// document.addEventListener("mousemove", dragging);
// carousel.addEventListener("touchmove", dragging);

// document.addEventListener("mouseup", dragStop);
// carousel.addEventListener("touchend", dragStop);

// float button

function scrollUp() {
  const scrollUp = document.getElementById('scroll-up');
  if (this.scrollY >= 100) {
    scrollUp.classList.add('show-scroll');
  } else {
    scrollUp.classList.remove('show-scroll');
  }
}

window.addEventListener('scroll', scrollUp);

// function scrollUps() {
//   const scrollUps = document.getElementById('scroll-ups');
//   if (this.scrollY >= 78) {
//     scrollUps.classList.add('show-scrolls');
//   } else {
//     scrollUps.classList.remove('show-scrolls');
//   }
// }

// window.addEventListener('scroll', scrollUps);

// carousel promo

// const promoCarousel = document.querySelector(".promo .carousel-promo");
// const promoFirstImg = promoCarousel.querySelectorAll(".img-promo")[0];
// const promoArrowIcons = document.querySelectorAll(".promo .wrapper-promo i");
// const promoShiftAmount = 1000;

// let promoIsDragStart = false,
//   promoIsDragging = false,
//   promoPrevPageX,
//   promoPrevScrollLeft,
//   promoPositionDiff;

// const promoShowHideIcons = () => {
//   // showing and hiding prev/next icon according to carousel scroll left value
//   let promoScrollWidth =
//     promoCarousel.scrollWidth - promoCarousel.clientWidth; // getting max scrollable width
//   promoArrowIcons[0].style.display =
//     promoCarousel.scrollLeft == 0 ? "none" : "block";
//   promoArrowIcons[1].style.display =
//     promoCarousel.scrollLeft == promoScrollWidth ? "none" : "block";
// };

// promoArrowIcons.forEach((icon) => {
//   icon.addEventListener("click", () => {
//     let promoFirstImgWidth = promoFirstImg.clientWidth + 14; // getting first img width & adding 14 margin value
//     // if clicked icon is left, reduce width value from the carousel scroll left else add to it
//     promoCarousel.scrollLeft +=
//       icon.id == "leftpromo" ? - promoShiftAmount : promoShiftAmount;
//     setTimeout(() => promoShowHideIcons(), 60); // calling promoShowHideIcons after 60ms
//   });
// });

// const promoAutoSlide = () => {
//   // if there is no image left to scroll then return from here
//   if (
//     promoCarousel.scrollLeft - (promoCarousel.scrollWidth - promoCarousel.clientWidth) > -1 ||
//     promoCarousel.scrollLeft <= 0
//   )
//     return;

//   promoPositionDiff = Math.abs(promoPositionDiff); // making promoPositionDiff value positive
//   let promoFirstImgWidth = promoFirstImg.clientWidth + 14;
//   // getting difference value that needs to add or reduce from carousel left to take the middle img center
//   let promoValDifference =
//     promoFirstImgWidth - promoPositionDiff;

//   if (promoCarousel.scrollLeft > promoPrevScrollLeft) {
//     // if the user is scrolling to the right
//     return (promoCarousel.scrollLeft +=
//       promoPositionDiff > promoFirstImgWidth / 3
//         ? promoValDifference
//         : -promoPositionDiff);
//   }
//   // if the user is scrolling to the left
//   promoCarousel.scrollLeft -=
//     promoPositionDiff > promoFirstImgWidth / 3
//       ? promoValDifference
//       : -promoPositionDiff;
// };

// const promoDragStart = (e) => {
//   // updating global variables value on mouse down event
//   promoIsDragStart = true;
//   promoPrevPageX = e.pageX || e.touches[0].pageX;
//   promoPrevScrollLeft = promoCarousel.scrollLeft;
// };

// const promoDragging = (e) => {
//   // scrolling images/carousel to the left according to the mouse pointer
//   if (!promoIsDragStart) return;
//   e.preventDefault();
//   promoIsDragging = true;
//   promoCarousel.classList.add("dragging-promo");
//   promoPositionDiff = (e.pageX || e.touches[0].pageX) - promoPrevPageX;
//   promoCarousel.scrollLeft = promoPrevScrollLeft - promoPositionDiff;
//   promoShowHideIcons();
// };

// const promoDragStop = () => {
//   promoIsDragStart = false;
//   promoCarousel.classList.remove("dragging-promo");

//   if (!promoIsDragging) return;
//   promoIsDragging = false;
//   promoAutoSlide();
// };

// promoCarousel.addEventListener("mousedown", promoDragStart);
// promoCarousel.addEventListener("touchstart", promoDragStart);

// document.addEventListener("mousemove", promoDragging);
// promoCarousel.addEventListener("touchmove", promoDragging);

// document.addEventListener("mouseup", promoDragStop);
// promoCarousel.addEventListener("touchend", promoDragStop);

//slideshow banner hero
var counter = 0;

function nextSlide() {
    counter++;
    if (counter >= document.querySelectorAll('.st').length) {
        counter = 0;
    }
    updateSlide();
    updateCircleButtons();
}

function prevSlide() {
    counter--;
    if (counter < 0) {
        counter = document.querySelectorAll('.st').length - 1;
    }
    updateSlide();
    updateCircleButtons();
}

function goToSlide(index) {
    counter = index;
    updateSlide();
    updateCircleButtons();
}

function updateSlide() {
    document.querySelector('.slide').style.transform = 'translateX(' + (-counter * 100) + '%)';
}

function updateCircleButtons() {
    var circleButtons = document.querySelectorAll('.circle-btn');
    
    circleButtons.forEach(function(button, index) {
        if (index === counter) {
            button.classList.add('active-circle-btn');
        } else {
            button.classList.remove('active-circle-btn');
        }
    });
}

setInterval(nextSlide, 7000);

// Dynamically create circle buttons
var circleContainer = document.getElementById('circleContainer');
for (var i = 1; i < document.querySelectorAll('.st').length; i++) {
    var button = document.createElement('button');
    button.className = 'circle-btn';
    button.setAttribute('onclick', 'goToSlide(' + i + ')');
    circleContainer.appendChild(button);
}