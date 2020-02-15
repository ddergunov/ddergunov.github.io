
////= ../../../node_modules/bootstrap/js/dist/util.js
////= ../../../node_modules/bootstrap/js/dist/modal.js

window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header__menu'),
        menuItem = document.querySelectorAll('.header__menu-item'),
        hamburger = document.querySelector('.hamburger');
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        menu.classList.toggle('active');
    });
    
    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            menu.classList.toggle('active');
        });
    });
});