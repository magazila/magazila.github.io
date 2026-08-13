const menu = document.querySelector('.open__menu')
const header = document.querySelector('.header')
const allLink = document.querySelectorAll('.header__link')

menu.addEventListener('click', function(){
    header.classList.toggle('openned')
})

for (const link of allLink){
    link.addEventListener('click', function(){
        header.classList.remove('openned')
    })
}
