const slideMass = document.querySelectorAll(".slide");
let countCard = slideMass.length;
let widthCard = slideMass[0].clientWidth;
let step = widthCard + 20;
let startPos = 0;

let indexCard = 0;

let maxOffset = step * (countCard - 1);

console.log(maxOffset, -maxOffset);

const leftBtn = document.querySelector(".slider__left");
const rigthBtn = document.querySelector(".slider__rigth");
const containerSlider = document.querySelector(".slider__container");

window.addEventListener("resize", function () {
  widthCard = slideMass[0].clientWidth;
  step = widthCard + 20;
  maxOffset = step * (countCard - 1);
  let nowPos = -(indexCard * step);
  startPos = nowPos;
  containerSlider.style.transform = `translateX(${nowPos}px)`;
});

rigthBtn.addEventListener("click", function () {
  startPos -= step;
  containerSlider.style.transform = `translateX(${startPos}px)`;
  indexCard += 1;
  if (indexCard === countCard) {
    indexCard = 0;
  }
  if (startPos < -maxOffset) {
    containerSlider.style.transform = `translateX(0px)`;
    startPos = 0;
  }
  console.log(indexCard);
});

leftBtn.addEventListener("click", function () {
  startPos += step;
  containerSlider.style.transform = `translateX(${startPos}px)`;
  indexCard -= 1;

  if (indexCard <= 0) {
    indexCard = countCard;
  }
  if (startPos > 0) {
    containerSlider.style.transform = `translateX(${0 - maxOffset}px)`;
    startPos = -maxOffset;
  }
  console.log(indexCard);
});

const pagination = document.querySelector(".slider__pagination");
pagination.innerHTML = "";

let i = 0;

for (let slide of slideMass) {
  const dot = document.createElement("div");
  dot.classList.add("slider__circle");
  dot.dataset.index = i;
  pagination.appendChild(dot);
  i++;
}
const allDots = document.querySelectorAll(".slider__circle");
allDots[0].classList.add("active");

function updateActiveDot(index) {
  const dots = document.querySelectorAll(".slider__circle");
  for (let dot of dots) {
    dot.classList.remove("active");
  }
  dots[index].classList.add("active");
}
function goToSlide(index) {
  let offset = -index * step;
  containerSlider.style.transform = `translateX(${offset}px)`;
  startPos = offset;
  indexCard = index;
  updateActiveDot(index);
}
pagination.addEventListener("click", function (event) {
  const dot = event.target.closest(".slider__circle");

  if (dot) {
    const index = Number(dot.dataset.index);
    goToSlide(index);
  }
});
