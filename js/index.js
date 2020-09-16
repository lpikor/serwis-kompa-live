const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
const navItem = document.querySelectorAll('.nav__item');
const dropdownArrow = document.querySelectorAll('.nav__dropdown-arrow');
const body = document.querySelector('body');

const handleClick = () => {
    hamburger.classList.toggle('hamburger--active');
    nav.classList.toggle('nav--active');
    body.classList.toggle('body--nav');
}

hamburger.addEventListener('click', handleClick);
dropdownArrow.forEach(arrow => {
    arrow.addEventListener('click', () => {
        arrow.parentNode.querySelector('.nav__inner-list').classList.toggle('nav__inner-list--active');
    });
})