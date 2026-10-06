import { books } from "./data.js";

function getMinPrice(list) {
  if (!list.length) return null;
  let min = list[0].price;
  for (const book of list) {if (book.price < min) min = book.price;}
  return min;
}

function getMaxPrice(list) {
  if (!list.length) return null;
  let max = list[0].price;
  for (const book of list) {if (book.price > max) max = book.price;}
  return max;
}

export function renderPrice() {
  const priceBox = document.querySelector(".select__price");
  if (!priceBox) return;
  const minPrice = getMinPrice(books);
  const maxPrice = getMaxPrice(books);
  const obj = `
    <label>
      <p>От</p>
      <input type="number" value="${minPrice}" id="min_price">
    </label>
    <label>
      <p>До</p>
      <input type="number" value="${maxPrice}" id="max_price">
    </label>`;

  priceBox.insertAdjacentHTML("beforeend", obj);
}