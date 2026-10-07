import { books } from "./data.js";

const bookGrid = document.querySelector(".book__grid");
const allGenre = document.querySelector(".ganre__list");

function renderGanre() {
  const setGenre = [];
  books.forEach(function (book) {
    if (!setGenre.includes(book.genre)) {
      setGenre.push(book.genre);
    }
  });
  console.log(setGenre);

  setGenre.forEach(function (genre) {
    let obj = `<label><input type="checkbox" name="${genre}" id="">${genre} </label>`;
    allGenre.insertAdjacentHTML('beforeend', obj);
  });
}

function renderCard(param = "all") {
  if (param === "all") {
    books.forEach(function (book) {
      let card = `
        <div class = 'card'>
        <div class = 'card__img'><img src = '${book.coverThumb}'></div>
        <p class = 'card__name'>${book.title}</p>
        <p class = 'card__author'>${book.author}</p>
        <p class = 'genre'>${book.genre}</p>
        </div`;
      bookGrid.insertAdjacentHTML("beforeend", card);
    });
  }

  const bookFilter = books.filter(function (book) {
    return book.genre === param;
  });

  bookFilter.forEach(function (book) {
    let card = `
        <div class = 'card'>
        <div class = 'card__img'><img src = '${book.coverThumb}'></div>
        <p class = 'genre'>${book.genre}</p>
        </div
        
        `;
    bookGrid.insertAdjacentHTML("beforeend", card);
  });
}

function openGenre(){
    const btn = document.querySelector('.genre__open')

    btn.addEventListener('click', function(){
        allGenre.classList.toggle('open')
    })
}


renderCard();
renderGanre();
openGenre();
