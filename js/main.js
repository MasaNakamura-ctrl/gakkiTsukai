const hamburger = document.getElementById('js-hamburger');
const nav = document.getElementById('js-nav');
hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
    hamburger.classList.toggle('active');
});