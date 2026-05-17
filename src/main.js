const burgerBtn = document.querySelector('.menu-open-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCloseBtn = document.querySelector('.mobile-menu-close-btn');
const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');

burgerBtn.addEventListener('click', () => {
  toggleMobileMenu();
});

menuCloseBtn.addEventListener('click', () => {
  toggleMobileMenu();
});

mobileMenuLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('is-open');
  });
});

function toggleMobileMenu() {
  mobileMenu.classList.toggle('is-open');
}