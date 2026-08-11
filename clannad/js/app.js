let header = document.querySelector('.header')
let open__menu = document.querySelector('.open__menu')
let header__link = document.querySelectorAll('.header__link')
let all__card = document.querySelectorAll('.chara__card')
let count__card = all__card.length
let step = 1135
let now__step = 0
let max__scroll = -(step * (count__card - 1))

let rigth__arrow = document.querySelector('.chara__container-rigth')
let left__arrow = document.querySelector('.chara__container-left')
let chara__container = document.querySelector('.chara__container')

// console.log(count__card)
// console.log(max__scroll)
// console.log('right arrow:', rigth__arrow);
// console.log('left arrow:', left__arrow);
// console.log('container:', chara__container);
// console.log('Количество карточек:', count__card);
// console.log('Максимальный сдвиг:', max__scroll);
// console.log('Шаг:', step);

open__menu.addEventListener('click', function () {
    header.classList.toggle('openned__menu')
})

for (let link of header__link)
    link.addEventListener('click', function () {
        header.classList.remove('openned__menu')
    });

rigth__arrow.addEventListener('click', function () {

    if (now__step - step >= max__scroll) {
        now__step -= step;
        chara__container.style.transform = `translateX(${now__step}px)`;
    }
});

left__arrow.addEventListener('click', function () {
    if (now__step + step <= 0) {
        now__step += step;
        chara__container.style.transform = `translateX(${now__step}px)`;
    }
});




