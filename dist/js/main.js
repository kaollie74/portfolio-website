// Select DOM items
console.log('js')

$(document).ready(onReady);

const navItems = document.querySelectorAll('.nav-item');

function onReady() {
  console.log('JQ')
  $('.menu-btn').on('click', toggleMenu)

}

// Set intial State of Menu
let showMenu = false;

function toggleMenu() {
  console.log('in menu button');

  if (!showMenu) {
    $('.menu-btn').addClass('close');
    $('.menu').addClass('show');
    $('.menu-nav').addClass('show');
    navItems.forEach(item => item.addClass('show'));
    showMenu = true;
  } else if (showMenu) {
    $('.menu-btn').removeClass('close');
    $('.menu').removeClass('show');
    $('.menu-nav').removeClass('show');
    navItems.forEach(item => item.removeClass('show'));
    // set Menu State
    showMenu = false;
  }

}