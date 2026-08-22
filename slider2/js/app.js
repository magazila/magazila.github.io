function print(param) {
    console.log(param); // это функция, так писать кончол.лог долго 
}

let slider = document.querySelector(".slider-scrolling");
let arrowLeft = document.querySelector(".slide-arrow-left");
let arrowRigth = document.querySelector(".slide-arrow-right");
let slideNav = document.querySelector(".slider-pagination");

let cardIndx = 0;
let Position = 0;
let sliderMass = []

//создаем функции добавления элекмента в массив 
function addSliderMass(url, title, subtitle) {
    let slide = `
                  <div class="slide">
            <img src="${url}" alt="${subtitle}" />
            <div class="slide-info">
              <h2 class="slide-title">${title}</h2>
              <h3 class="slide-subtitle">${subtitle}</h3>
            </div>
          </div>
    `
    sliderMass.push(slide)
}
//добавляем персонадей и подписи к ним 
addSliderMass('img\\1.jpg', 'Семейная фотосъемка', 'Общая фотография где изображены Фука Усию Нагиса и Томое')
addSliderMass('img\\2.jpg', '1', '2')
addSliderMass('img\\3.jpg', '1', '2')



for (let oneslide of sliderMass) {
    slider.insertAdjacentHTML('beforeend', oneslide)
}

//проходим по всем слайдером порсле создания 
let colSlide = document.querySelectorAll(".slide").length;

//создаем функции
function checkLeft() {
    if (Position === 0) {
        arrowLeft.style.display = `none`;
    } else {
        arrowLeft.style.display = `flex`;
    }
}
function checkRigth() {
    if (Position === -(100 * (colSlide - 1)) || colSlide === 0) {
        arrowRigth.style.display = `none`;
    } else {
        arrowRigth.style.display = `flex`;
    }
}

function checkBtn(params) {
    for (let dot of dots) {
        dot.classList.remove('active')
        if (Number(dot.value) === params) {
            dot.classList.add('active')
        }
    }
}

function transform(param) {
    slider.style.transform = `translateX(${param}%)`;// это функция изолированна, поэтому парам можно применить
}

//проверяем нчальное положение стрелок 
checkLeft();
checkRigth();

//функция клика по стрелкам
arrowRigth.addEventListener("click", function () {
    Position -= 100;
    transform(Position);
    cardIndx += 1;
    checkLeft();
    checkRigth();
    checkBtn(cardIndx)
});
arrowLeft.addEventListener("click", function () {
    Position += 100;
    transform(Position);
    cardIndx -= 1;
    checkLeft();
    checkRigth();
    checkBtn(cardIndx)
});
//Создаем точки для переключения слайда 
for (let i = 0; i < colSlide; i += 1) {
    let circle = `<button class="slider-circle" type="button" value="${i}"></button>`;
    slideNav.insertAdjacentHTML("beforeend", circle);
}
//Проходим по созданным точкам
let dots = document.querySelectorAll('.slider-circle')

for (let dot of dots) {
    dots[0].classList.add('active')
    print(Number(dot.value))
    dot.addEventListener('click', function () {
        for (let dot of dots) {
            dot.classList.remove('active')
            this.classList.add('active')
        }
        Position = (0 - (dot.value * 100))
        cardIndx = Number(dot.value)
        transform(Position)
        checkLeft();
        checkRigth()
    })

}
