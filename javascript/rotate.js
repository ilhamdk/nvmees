document.addEventListener('DOMContentLoaded', function () {

  var subBtns = document.querySelectorAll('.sub-btn');

  subBtns.forEach(function(subBtn) {
    subBtn.addEventListener('click', function () {

      var subMenu = subBtn.nextElementSibling;

      subMenu.style.display = (subMenu.style.display === 'block') ? 'none' : 'block';

      subBtn.lastElementChild.classList.toggle('rotate-chevron');
    });
  });

});