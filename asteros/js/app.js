const burger = document.querySelector('#burger')
const closemenu = document.querySelector('#close')


burger.addEventListener('click', () => {
    megamenu.style.top = `0`
})
closemenu.addEventListener('click', () => {
    megamenu.style.top = `-150%`
})


