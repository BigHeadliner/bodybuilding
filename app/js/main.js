
$(function () {



    window.addEventListener('scroll', function () {
        const header = document.querySelector('.header__top');
        if (window.scrollY > 0) {
            header.style.opacity = '1';
          } else {
              header.style.opacity = '0.8';
          }
    });




















});