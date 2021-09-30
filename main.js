const hamburgerButton = document.getElementById('menu-trigger');
const crossButton = document.getElementById('menu-close');
const sideMenu = document.getElementById('side-menu');

function hamburgerReveal() {
  sideMenu.classList.add('show-menu');
}

hamburgerButton.addEventListener('click', hamburgerReveal);

function hamburgerHide() {
  sideMenu.classList.remove('show-menu');
}

crossButton.addEventListener('click', hamburgerHide);
