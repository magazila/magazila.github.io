import { books } from "./data.js";

function myPrint(param) {
  console.log(param);
}

function getAllGenre() {
  const ganreList = document.querySelector(".ganre__list");
  const allGenre = [];

  books.forEach(function (book) {
    if (!allGenre.includes(book.genre)) {
      allGenre.push(book.genre);
    }
  });

  allGenre.sort();

  allGenre.forEach(function (genre) {
    let obj = `<label><input type="checkbox" value="${genre}" class="ganre__check"><p class="genre">${genre}</p></label>`;
    ganreList.insertAdjacentHTML("beforeend", obj);
  });
}

let currentLimit = 15;
let currentGenre = "all";

function renderCard(limit = 15, genre = "all", maxPrice, minPrice) {
  const cardGrid = document.querySelector(".card__grid");
  const showMoreCard = document.querySelector(".showMoreCard");
  cardGrid.innerHTML = "";

  let filteredBooks = [];

  if (genre === "all") {
    books.forEach(function (book) {
      filteredBooks.push(book);
    });
  } else {
    books.forEach(function (book) {
      if (book.genre === genre) {
        filteredBooks.push(book);
      }
    });
  }
  let booksToRender = [];
  filteredBooks.forEach(function (book, index) {
    if (index < limit) {
      booksToRender.push(book);
    }
  });
  booksToRender.forEach(function (book) {
    let age = "";
    if (book.ageRating === "18+") {
      age = `<p class="baggle baggle__age age-18">${book.ageRating}</p>`;
    } else if (book.ageRating === "16+") {
      age = `<p class="baggle baggle__age age-16">${book.ageRating}</p>`;
    } else if (book.ageRating === "12+") {
      age = `<p class="baggle baggle__age age-12">${book.ageRating}</p>`;
    } else if (book.ageRating === "6+") {
      age = `<p class="baggle baggle__age age-6">${book.ageRating}</p>`;
    }

    let inStock = "";
    if (book.inStock === true) {
      inStock = `<button class="add__cart" type="button"><i class="fa-solid fa-cart-shopping"></i>  В корзину </button>`;
    } else {
      inStock = `<button class="add__cart" type="button" disabled>  Нет в наличии </button>`;
    }
    let cardBook = `
      <div class="card">
        <div class="card__img">
          <img src="${book.coverThumb}" alt="${book.title}" />
          <p class="baggle baggle__genre">${book.genre}</p>
          <p class="baggle baggle__rait">
            <i class="fa-solid fa-ranking-star"></i> ${book.rating}
          </p>
          ${age}
        </div>
        <div class="card__body">
          <p class="card__title">${book.title}</p>
          <p class="card__author">${book.author}</p>
          <p class="card__price">${book.price} ${book.currency}</p>
          <div class="card__bottom">
            <button class="add__fav" type="button"><i class="fa-solid fa-heart"></i></button>
            ${inStock}
          </div>
        </div>
      </div>`;

    cardGrid.insertAdjacentHTML("beforeend", cardBook);
  });
  if (limit < filteredBooks.length) {
    showMoreCard.innerHTML = "Показать ещё";
    showMoreCard.style.display = "";
  } else {
    showMoreCard.innerHTML = "";
    showMoreCard.style.display = "none";
  }
}
function initShowMore() {
  const showMoreCard = document.querySelector(".showMoreCard");
  showMoreCard.addEventListener("click", function () {
    currentLimit = currentLimit + 5;             
    renderCard(currentLimit, currentGenre);       
  });
}

getAllGenre();
renderCard(currentLimit, currentGenre);
initShowMore();