import { products } from "./e_commerce_mock_data.js"


const cardGrid = document.querySelector('.card__grid')
const brand__box = document.querySelector('.brand__box')


let brandarr = []



function renderCard(title) {
    cardGrid.innerHTML = ''




    let filterProducts = products.filter(function (producte) {
        return producte.name.toLowerCase().includes(title.toLowerCase())|| producte.brand.toLowerCase().includes(title.toLowerCase())
    })

    if (filterProducts.length === 0) {
        cardGrid.innerHTML = "Ничего не найдено"
    }
    if (filterProducts.length !== 0) {

        for (let i = 0; i < filterProducts.length; i++) {
            let product = filterProducts[i]

            let containerPrice = ''

            if (product.price < product.oldPrice) {
                containerPrice = `
                <span class = 'old__price' >${product.oldPrice}</span>
                <span class = 'new__price'>${product.price}</span>
                
                `
            }
            else {
                containerPrice = `
                <span class = 'new__price'></span>
                <span class = 'old__price' >${product.oldPrice}</span>
                `
            }


            let card = `
                <div class = "card">
                    <div class="card__img">
                           <img src ="${product.image}" alt="${product.name}" srcset=""> 
                           <p class = "brand">${product.brand}</p>
                    </div>
                    <div class="card__body">
                    <p class = "catecory">${product.category} / ${product.subCategory} </p>
                    <h4 class = "card__title">${product.name}</h4>
                        
                    <div class="card__bottom">
                        ${containerPrice}
                    </div>   

                    </div>
                </div>
            
            `
            cardGrid.insertAdjacentHTML('beforeend', card)
        }


    }
    for (let brand of filterProducts) {

        if (!brandarr.includes(brand.brand.substring())) {
            brandarr.push(brand.brand.substring())
        }

    }

}


function search() {
    const search = document.querySelector("#search")


    search.addEventListener("input", function () {
        renderCard(search.value)
    })
}


function showAllBrand() {
    brandarr.sort()
    brand__box.innerHTML = ''

    for (let brand of brandarr) {
        let brandBaddgle = `<p class = 'baddgle__brand'>${brand}</p>`
        brand__box.insertAdjacentHTML('beforeend', brandBaddgle)
    }
}

renderCard('')
search()
showAllBrand()