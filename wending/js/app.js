let cardWidth = document.querySelector('.featured__card').clientWidth
let countCard = document.querySelectorAll('.featured__card').length

let nowNumberCard = 0
let step = cardWidth + 20
let maxPosCard = step * (countCard - 1)
let containerCard = document.querySelector('.featured__card-wrapper')
let scrollLeft = 0
const btbl = document.querySelector('.featured__card-right')
const btbR = document.querySelector('.featured__card-left')
window.addEventListener('resize', function () {
    cardWidth = document.querySelector('.featured__card').clientWidth
    step = cardWidth + 20
    maxPosCard = step * (countCard - 1)
    scrollLeft = nowNumberCard * step
    containerCard.style.transform = `translateX(-${scrollLeft}px)`
})
window.addEventListener('scroll', function () {
    let scrollY = window.scrollY
    if (scrollY > 300) {
        document.querySelector('.header').style.background = 'var(--color-primary-400)'
    }
    else {
        document.querySelector('.header').style.background = ''
    }
})
function checkleft() {
    if (nowNumberCard === countCard - 1) {
        btbR.style.display = 'none'
    }
    else {
        btbR.style.display = 'flex'
    }
}
function checkRigth() {
    if (nowNumberCard === 0) {
        btbl.style.display = 'none'
    }
    else {
        btbl.style.display = 'flex'
    }
}
btbR.addEventListener('click', function () {
    if (nowNumberCard < countCard - 1) {
        nowNumberCard += 1
        scrollLeft = nowNumberCard * step
        containerCard.style.transform = `translateX(-${scrollLeft}px)`
        console.log(nowNumberCard + 1)
        checkleft()
        checkRigth()
    }
})
btbl.addEventListener('click', function () {
    if (nowNumberCard > 0) {
        nowNumberCard -= 1
        scrollLeft = nowNumberCard * step
        containerCard.style.transform = `translateX(-${scrollLeft}px)`
        console.log(nowNumberCard + 1)
        checkleft()
        checkRigth()
    }
})
checkleft()
checkRigth()