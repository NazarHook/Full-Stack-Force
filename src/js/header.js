'use strict';
const menuMobile = document.querySelector('.mobile-modal');
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuList = document.querySelector('.menu-list');
const closeBtn = document.querySelector('.close-btn');
const menuLinks = document.querySelectorAll('.modal-nav-item');
const orderBtn = document.querySelector('.order-btn');
const orderSection = document.querySelector('#order-section');
const orderButton = document.querySelector('.button-active');
window.addEventListener('load', event => {
  event.preventDefault();
  menuMobile.classList.remove('is-open');
  menuMobile.style.transition = '0ms';
  menuList.classList.remove('open');
  menuList.style.transition = '0ms';
});
function openMenu() {
  menuMobile.style.transition =
    'opacity 250ms cubic-bezier(0.4, 0, 0.2, 1), visibility 250ms cubic-bezier(0.4, 0, 0.2, 1), transform 500ms cubic-bezier(0.4, 0, 0.2, 1)';
  menuMobile.classList.add('is-open');
}

function closeMenu() {
  menuMobile.classList.remove('is-open');
}
function toggleLinks() {
  menuList.style.transition =
    'opacity 750ms cubic-bezier(0.4, 0, 0.2, 1), visibility 750ms cubic-bezier(0.4, 0, 0.2, 1), transform 1250ms cubic-bezier(0.4, 0, 0.2, 1)';
  menuList.classList.toggle('open');
}
function scroll(event) {
  event.preventDefault();
  const targetId = event.target.getAttribute('href');
  const targetElement = document.querySelector(targetId);
  if (targetElement) {
    closeMenu();
    targetElement.scrollIntoView({ behavior: 'smooth' });
  }
}
function order(event) {
  event.preventDefault();
  closeMenu();
  orderSection.scrollIntoView({ behavior: 'smooth' });
}
menuLinks.forEach(link => {
  link.addEventListener('click', scroll);
});
orderBtn.addEventListener('click', order);
menuList.addEventListener('click', scroll);
menuBtn.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);
menu.addEventListener('click', toggleLinks);
orderButton.addEventListener('click', order);
