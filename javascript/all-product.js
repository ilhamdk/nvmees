document.addEventListener('DOMContentLoaded', function () {

  var subBtns = document.querySelectorAll('.sub-btn');

  subBtns.forEach(function(subBtn) {
    subBtn.addEventListener('click', function () {

      var subMenu = subBtn.nextElementSibling;

      subMenu.style.display = (subMenu.style.display === 'block') ? 'none' : 'block';

      subBtn.lastElementChild.classList.toggle('rotate');
    });
  });

  var menuBtn = document.querySelector('.menu-btn');
  menuBtn.addEventListener('click', function () {
    var sideBar = document.querySelector('.side-bar');
    sideBar.classList.add('active');
    menuBtn.style.visibility = 'hidden';
  });

  var closeBtn = document.querySelector('.close-btn');
  closeBtn.addEventListener('click', function () {
    var sideBar = document.querySelector('.side-bar');
    sideBar.classList.remove('active');
    menuBtn.style.visibility = 'visible';
  });
});
