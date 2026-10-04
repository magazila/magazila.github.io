import { books } from "./data.js";

export function rendreCard() {

    const booksMass = books;
    const bookGrid = document.querySelector(".book__grid");

    for (let oneBook of booksMass) {
        let inStoke = ''
        
        if (oneBook.inStock === true) {
            inStoke = `<p class="card__inStoke card__inStoke--true">В наличии </p>`
        }
        else {
            inStoke = `<p class="card__inStoke card__inStoke--false">Нет на складе </p>`
        }

        let bookObj = `
                 <div class="card card__book">
                <div class="card__cover"><img src="${oneBook.cover}" alt="${oneBook.title}" />
                    <div class="favorite">
                        <svg xmlns="http://w3.org" viewBox="0 0 24 24" width="24" height="24" fill="none"
                            stroke="currentColor" stroke-width="1">
                            <path
                                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                        </svg>
                    </div>
                            ${inStoke}
                </div>
                <div class="card__body">
                    
                    <p class="card__title">${oneBook.title}</p>
                    <p class="card__author">${oneBook.author}</p>
                    <p class="card__genre">${oneBook.genre} </p>
                    <p class="card__prise">${oneBook.price} ₽</p>

                    <p class="card__rating">★ ${oneBook.rating}</p>
                    <p class="card__desc">${oneBook.description}</p>
                    <p class="card__year">${oneBook.year}</p>
                    </p>
                </div>
            </div>
        `;
        bookGrid.insertAdjacentHTML("beforeend", bookObj);
    }
}