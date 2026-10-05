import { books } from "./data.js";

export function filterCard(param = "all") {
  const bookTopNav = document.querySelector(".book__content");

  let filterMass = [];

  if (param === "all") {
    filterMass = books;
  } else {
    filterMass = books.filter(function (filterBook) {
      return filterBook.genre === param;
    });
  }

  let bookTopInfo = `   
  <div class="book__nav">
                    <div class="find__book">Найдено <strong>${filterMass.length}</strong> книг</div>
                    <select name="" id="">

                        <option value="pop">По популярности (по умолчанию)</option>
                        <option value="maxPrice">Цена: по возрастанию</option>
                        <option value="minPrice">Цена: по убыванию</option>
                        <option value="rait">Рейтинг</option>
                        <option value="year">Год: сначала новые</option>

                    </select>
                </div>`;
  bookTopNav.insertAdjacentHTML("afterbegin", bookTopInfo);

  for (let oneBook of filterMass) {
    let book__grid = document.querySelector(".book__grid");

    let inStoke = ''

    if(oneBook.inStock === true){
        inStoke = `<p class="card__inStoke card__inStoke--true">В наличии </p>`
    }
        else{
        inStoke = `<p class="card__inStoke card__inStoke--false">Нет на складе </p>`
    }

    let bookObj = `                    <div class="card card__book">
                        <div class="card__cover"><img src="${oneBook.cover}" alt="${oneBook.title}">
                            <div class="favorite">
                                <svg xmlns="http://w3.org" viewBox="0 0 24 24" width="24" height="24" fill="none"
                                    stroke="currentColor" stroke-width="1">
                                    <path
                                        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z">
                                    </path>
                                </svg>
                            </div>
                            ${inStoke}
                        </div>
                        <div class="card__body">

                            <p class="card__title">${oneBook.title}</p>
                            <p class="card__author">${oneBook.author}</p>
                            <p class="card__genre">${oneBook.genre}</p>
                            <p class="card__prise">${oneBook.price} ₽</p>

                            <p class="card__rating">★ ${oneBook.rating}</p>
                            <p class="card__desc">${oneBook.description}</p>
                            <p class="card__year">${oneBook.year}</p>
                            <p></p>
                        </div>
                    </div>`;

    book__grid.insertAdjacentHTML("beforeend", bookObj);
  }
}
