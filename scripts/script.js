var burgerMenu = document.getElementById('burger-menu');
var overlay = document.getElementById('menu');

burgerMenu.addEventListener('click', function () {
  toggleNav();
});

function toggleNav() {
  burgerMenu.classList.toggle("close");
  overlay.classList.toggle("overlay");
}
