const hamburgerMenuLink = document.querySelector('.hamburger-menu-link');
const nav = document.querySelector('.nav');
const menuCross = document.querySelector('.menu-cross');

var flex = 'flex';
var block = 'block';
var none = 'none';

hamburgerMenuLink.addEventListener('click', function() {
  event.preventDefault();
  nav.style.display = flex;
  menuCross.style.display = block;
});

menuCross.addEventListener('click', function() {
  event.preventDefault();
  nav.style.display = none;
  menuCross.style.display = none;
});