const burgerBtn = document.querySelector('.menu-open-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCloseBtn = document.querySelector('.mobile-menu-close-btn');

burgerBtn.addEventListener('click', () => {
  toggleMobileMenu();
});

menuCloseBtn.addEventListener('click', () => {
  toggleMobileMenu();
});

function toggleMobileMenu() {
  mobileMenu.classList.toggle('is-open');
}