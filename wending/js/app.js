const burger = document.querySelector('.header__burger')
const menu = document.querySelector('.header__menu')
const menuLink = document.querySelectorAll('.header__link')
const landscape = document.querySelector('.landscape')
const landscapeClose = document.querySelector('.landscape__close')
const scrollArrfow = document.querySelector('.scroll__arrow')
const body = document.querySelector('body')
const theme = document.querySelector('.theme')


burger.addEventListener('click', function () {
    menu.classList.toggle('open')
})

for (const link of menuLink) {
    link.addEventListener('click', function () {
        menu.classList.remove('open')
    })
}

// landscapeClose.addEventListener('click', function () {
//     if (landscapeClose) {

//     }
//     else {
//         landscape.style.display = 'none';
//     }

// })

theme.addEventListener('click', function () {
    body.classList.toggle('dark')
})
console.log(body);
console.log(theme);

