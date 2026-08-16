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

    console.log('максимум ширина контейнера', maxPosCard)
    console.log('ширина карточки', cardWidth)
    console.log('длина шага', step)
    console.log('номер карточки', nowNumberCard + 1)
    console.log('позиция для смещения', scrollLeft)
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

console.log('максимум ширина контейнера', maxPosCard)
console.log('ширина карточки', cardWidth)
console.log('длина шага', step)
console.log('номер карточки', nowNumberCard + 1)
console.log('позиция для смещения', scrollLeft)


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