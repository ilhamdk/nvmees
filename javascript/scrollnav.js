function scrollNav() {
  const scrollNav = document.getElementById('scroll-nav');
  const scrollPadding = document.getElementById('scroll-padding-nav');
  const scrollLeft = document.getElementById('scroll-left-nav');
  const scrollImg = document.getElementById('scroll-img');
  const scrollNavmenu = document.getElementById('scroll-nav-menu');
  if (this.scrollY >= 100 && window.innerWidth > 768) {
    scrollNav.classList.add('show-scroll-nav');
    scrollPadding.classList.add('show-padding-nav');
    scrollLeft.classList.add('show-left-nav');
    scrollImg.classList.add('show-img-nav');
    scrollNavmenu.classList.add('show-nav-menu');
  } else {
    scrollNav.classList.remove('show-scroll-nav');
    scrollPadding.classList.remove('show-padding-nav');
    scrollLeft.classList.remove('show-left-nav');
    scrollImg.classList.remove('show-img-nav');
    scrollNavmenu.classList.remove('show-nav-menu');
  }
}

window.addEventListener('scroll', scrollNav);