import { books } from "./data.js";

export function renderGenre() {
  const genreContainer = document.querySelector(".select__genre");
  const genreList = [];

  for (let oneGenre of books) {
    if (!genreList.includes(oneGenre.genre)) genreList.push(oneGenre.genre);
  }
  for (let genre of genreList) {
    let obj = `<label><input type="checkbox" value="${genre}">${genre}</label></label>`;
    genreContainer.insertAdjacentHTML("afterend", obj);
  }
}
