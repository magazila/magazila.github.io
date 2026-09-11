const cardMass = [
  { id: 1, name: "Смартфон X", price: 49990, image: "📱" },
  { id: 2, name: "Ноутбук Pro", price: 89990, image: "💻" },
  { id: 3, name: "Наушники Air", price: 15990, image: "🎧" },
  { id: 4, name: "Часы Smart", price: 24990, image: "⌚" },
  { id: 5, name: "Клавиатура Mech", price: 6990, image: "⌨️" },
  { id: 6, name: "Монитор 27", price: 27990, image: "🖥️" },
  { id: 7, name: "Планшет Tab", price: 34990, image: "📲" },
  { id: 8, name: "Колонка Boom", price: 12990, image: "🔊" },
  { id: 9, name: "Мышь Pro", price: 3990, image: "🖱️" },
  { id: 10, name: "Роутер AX", price: 7990, image: "📶" },
  { id: 11, name: "Принтер Laser", price: 19990, image: "🖨️" },
  { id: 12, name: "Сканер Doc", price: 11990, image: "📠" },
  { id: 13, name: "Веб-камера HD", price: 5490, image: "📷" },
  { id: 14, name: "Микрофон USB", price: 8990, image: "🎤" },
  { id: 15, name: "Геймпад Wireless", price: 6490, image: "🎮" },
  { id: 16, name: "VR-шлем", price: 59990, image: "🥽" },
  { id: 17, name: "Powerbank 20000", price: 3990, image: "🔋" },
  { id: 18, name: "Зарядка GaN 65W", price: 3490, image: "🔌" },
  { id: 19, name: "Кабель USB-C", price: 990, image: "🔗" },
  { id: 20, name: "SSD 1TB", price: 8990, image: "💾" },
  { id: 21, name: "HDD 2TB", price: 6990, image: "🗄️" },
  { id: 22, name: "Флешка 128GB", price: 1990, image: "📀" },
  { id: 23, name: "Карта памяти 256GB", price: 2990, image: "💳" },
  { id: 24, name: "Проектор Mini", price: 32990, image: "📽️" },
  { id: 25, name: "Телевизор 55 дюймов", price: 54990, image: "📺" },
  { id: 26, name: "Стилус", price: 4990, image: "✏️" },
  { id: 27, name: "Графический планшет", price: 15990, image: "🖊️" },
  { id: 28, name: "Умная лампа", price: 2490, image: "💡" },
  { id: 29, name: "Робот-пылесос", price: 29990, image: "🤖" },
  { id: 30, name: "Умная колонка", price: 9990, image: "🗣️" },
  { id: 31, name: "Фитнес-браслет", price: 3990, image: "📿" },
  { id: 32, name: "Экшн-камера", price: 24990, image: "📹" },
  { id: 33, name: "Дрон", price: 79990, image: "🚁" },
  { id: 34, name: "Стабилизатор", price: 12990, image: "🎥" },
  { id: 35, name: "Штатив", price: 2990, image: "🧰" },
  { id: 36, name: "Кольцевая лампа", price: 3490, image: "💡" },
  { id: 37, name: "Аудиоинтерфейс", price: 14990, image: "🎚️" },
  { id: 38, name: "MIDI-клавиатура", price: 18990, image: "🎹" },
  { id: 39, name: "Стриминговая дека", price: 19990, image: "🎛️" },
  { id: 40, name: "Фотоаппарат", price: 69990, image: "📸" },
  { id: 41, name: "Объектив 50mm", price: 24990, image: "🔭" },
  { id: 42, name: "Вспышка", price: 8990, image: "⚡" },
  { id: 43, name: "Картридер", price: 1990, image: "📂" },
  { id: 44, name: "Док-станция", price: 11990, image: "🧩" },
  { id: 45, name: "USB-хаб", price: 2990, image: "🔌" },
  { id: 46, name: "KVM-переключатель", price: 5990, image: "🔀" },
  { id: 47, name: "ИБП 1000VA", price: 12990, image: "🔋" },
  { id: 48, name: "Сетевой фильтр", price: 1990, image: "🧯" },
  { id: 49, name: "Внешний DVD привод", price: 3490, image: "💿" },
  { id: 50, name: "Кабель HDMI", price: 1290, image: "🔌" },
];

const cardGrid = document.querySelector(".products-grid");
let oneCard = cardMass.map((card) => {
  let el = `
                <article class="product-card" data-id="${card.id}" data-name="${card.name}" data-price="${card.price}">
                    <div class="product-image">${card.image}</div>
                    <h3 class="product-title">${card.name}</h3>
                    <p class="product-price">${card.price}₽</p>
                    <button class="add-to-cart" type="button" data-id =${card.id}>В корзину</button>
                </article>
    `;
  cardGrid.insertAdjacentHTML("beforeend", el);
});

let cartArray = []

cardGrid.addEventListener('click', function (card) {
  if (card.target.classList.contains("add-to-cart")) {
    const productId = Number(card.target.dataset.id)
    const product = cardMass.find(cart => cart.id === productId)
    cartArray.push(product)
  }
  updateCart()
})

const cartContainer = document.querySelector('#cartItems')

function updateCart() {

  if (cartArray.length === 0) {
    let el = `                <div class="one-producte-cart">
                    <p class="product-number"></p>
                    <figure class="product-images"></figure>
                    <p class="product-name">Корзина пуста</p>
                    <p class="product-count"></p>
                    <p class="product-price"></p>
                </div>`
    cartContainer.insertAdjacentHTML("beforeend", el)
  }
  else {
    cartContainer.innerHTML = ''
    let count = 1
    for (let oneProd of cartArray) {

      let el = `                <div class="one-producte-cart" data-id="${count}">
                    <figure class="product-images">${oneProd.image}</figure>
                    <p class="product-name">${oneProd.name}</p>
                    <p class="product-price">${oneProd.price}</p>
                </div>`
      cartContainer.insertAdjacentHTML("beforeend", el)
      updateSumCart(Number(`${oneProd.price}`))
      count++
    }
  }
}
updateCart()
updateSumCart()




function updateSumCart() {
  const cartItems = document.querySelector('.cart-summary')
  cartItems.innerHTML = ''
  let sum = 0
  for (let onePrice of cartArray) { sum += onePrice.price }
  let el = `<p>Итого: <span id="cartTotal">${sum}</span> ₽</p>`
  cartItems.insertAdjacentHTML("beforeend", el)
}


function removeFromCart(e) {
  const cartItem = e.target.closest('.one-producte-cart');
  if (!cartItem) return;

  const index = Number(cartItem.dataset.id) - 1;
  if (index < 0 || index >= cartArray.length) return;
  cartArray.splice(index, 1);


  cartContainer.innerHTML = ''; 
  updateCart();
  updateSumCart();
}

cartContainer.addEventListener('click', removeFromCart);

