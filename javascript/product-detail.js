var ProductImg = document.getElementById("ProductImg");
var SmallImg = document.getElementsByClassName("small-img");

for (var i = 0; i < SmallImg.length; i++) {
  SmallImg[i].onclick = function () {
    ProductImg.src = this.src;
  };
}

function changeContent(contentNumber) {
  // Hide all content containers
  var contentContainers = document.getElementsByClassName('content-container-pd');
  for (var i = 0; i < contentContainers.length; i++) {
    contentContainers[i].classList.remove('active-pd');
  }

  // Show the selected content container
  var selectedContent = document.getElementById('content' + contentNumber);
  selectedContent.classList.add('active-pd');
}

var header = document.getElementById("btn-pd");
var btns = header.getElementsByClassName("btn-hover");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active-btn-pd");
  current[0].className = current[0].className.replace(" active-btn-pd", "");
  this.className += " active-btn-pd";
  });
}

function changeIconFav() {
  var icon = document.querySelector('.fav-icon i');

  // Periksa apakah ikon memiliki kelas fa-solid
  if (icon.classList.contains('fa-solid')) {
    // Ganti kelas menjadi fa-regular jika sebelumnya fa-solid
    icon.classList.remove('fa-solid');
    icon.classList.add('fa-regular');
  } else {
    // Ganti kelas menjadi fa-solid jika sebelumnya fa-regular
    icon.classList.remove('fa-regular');
    icon.classList.add('fa-solid');
  }
}
