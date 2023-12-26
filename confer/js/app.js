const burger = document.querySelector('#burger')
const closemenu = document.querySelector('#close')
const nav = document.querySelector('#nav')
const navbar = document.querySelector('.navbar')


burger.addEventListener('click', () => {
    nav.style.left = `0`
})
closemenu.addEventListener('click', () => {
    nav.style.left = `-100%`
})


