document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('show');
});

ScrollReveal().reveal('.show-case');
ScrollReveal().reveal('.emuladores-cards', { delay: 500 });
ScrollReveal().reveal('.card-banner-one', { delay: 500 });
ScrollReveal().reveal('.card-banner-two', { delay: 500 });


