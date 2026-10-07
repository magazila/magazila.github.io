import { books } from "./data.js";

const bookGrid = document.querySelector(".book__grid");
const allGenre = document.querySelector(".ganre__list");

function renderGanre() {
  const setGenre = [];
  books.forEach(function (book) {
    if (book.genre && !setGenre.includes(book.genre)) {
      setGenre.push(book.genre);
    }
  });

  setGenre.sort();

  setGenre.forEach(function (genre) {
    let obj = `<label class='label__genre'>
             <input type="checkbox" class="genre__checkbox" value="${genre}">${genre}
           </label>`;
    allGenre.insertAdjacentHTML("beforeend", obj);
  });

  const btnOpen = document.querySelector(".genre__open");
  const btClose = document.querySelector(".genre__close");

  btnOpen.addEventListener("click", function () {
    allGenre.classList.add("open");
    btnOpen.style.display = "none";
    btClose.style.display = "block";
  });
  btClose.addEventListener("click", function () {
    allGenre.classList.remove("open");
    btnOpen.style.display = "block";
    btClose.style.display = "";
  });
}

function renderCard(param = "all", minPrice = "all", maxPrice = "all") {
  bookGrid.innerHTML = "";
  const bookFilter = books.filter(function (book) {
    if (param === "all" || (Array.isArray(param) && param.length === 0)) {
      return true;
    }
    if (Array.isArray(param)) {
      return param.includes(book.genre);
    }
    return book.genre === param;
  });
  bookFilter.forEach(function (book) {
    let card = `
        <div class='card'>
          <div class='card__img'><img src='${book.coverThumb}'></div>
          <p class='card__name'>${book.title}</p>
          <p class='card__author'>${book.author}</p>
          <p class='genre'>${book.genre}</p>
        </div>`;
    bookGrid.insertAdjacentHTML("beforeend", card);
  });
}

function getFilterGenre() {
  const filterGenre = [];
  const genreList = document.querySelectorAll(".genre__checkbox");
  const btn = document.querySelector(".sendFilter");

  genreList.forEach(function (genre) {
    genre.addEventListener("change", function () {
      const checked = document.querySelectorAll(".genre__checkbox:checked");
      filterGenre.length = 0;
      checked.forEach((g) => filterGenre.push(g.value));
    });
  });

  btn.addEventListener("click", function () {
    renderCard(filterGenre);   
  });
}



renderCard();
renderGanre();

getFilterGenre();
