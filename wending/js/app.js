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

landscapeClose.addEventListener('click', function () {
    landscape.style.display = 'none';
})
    // theme.addEventListener('click', function () {
    //     body.classList.toggle('dark')
    // })


const massFeaturedCard = document.querySelectorAll('.featured__card')
const countCard = massFeaturedCard.length
let cardWidht = document.querySelector('.featured__card').clientWidth
let positionCard = 0
const step = cardWidht + 20
const leftArrow = document.querySelectorAll('.featured__card-left-arrow')
const rightArrow = document.querySelectorAll('.featured__card-right-arrow')
const containerCard = document.querySelector('.featured__card-wrapper')





for (let right of rightArrow) {
    right.addEventListener('click', function(){
        positionCard = positionCard - step
        containerCard.style.transform = `translateX(${positionCard}px)`
    })
}
for (let left of leftArrow) {
    left.addEventListener('click', function(){
        positionCard = positionCard + step
        containerCard.style.transform = `translateX(${positionCard}px)`
    })
}


console.log(countCard)
console.log(cardWidht)
console.log(step)


