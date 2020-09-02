const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
const body = document.querySelector('body');

const handleClick = () => {
    hamburger.classList.toggle('hamburger--active');
    nav.classList.toggle('nav--active');
    body.classList.toggle('body--nav');
}

hamburger.addEventListener('click', handleClick);