import { animeList } from "./anime_database.js";
import { initFilter, showAllFilter } from "./filter.js";
import { getAllFilter } from "./filterAll.js";


const cardGrid = document.querySelector(".card__grid");
const sideBar = document.querySelector('.sidebar')


function renderCard( title = '', 
    // filters = { ganre: {}, studio: {}, year: {}, age: {}, season: {}} , 
    limit = 150) 
    
    {
        cardGrid.innerHTML=''

    const filterAnime = animeList.filter(function (anime) {
        return anime.title.toLowerCase().includes(title.toLowerCase())
    })

    if (filterAnime.length === 0) {
        cardGrid.innerHTML= "Ничего не нашлось"
    }
    else {
        getCard(filterAnime)
    }
    function getCard(array) {

        for (let i = 0; i < limit; i++) {
            if (i >= array.length) {
                break
            }

            else {

                let anime = array[i]
                let card = `

        <div class="card" data-id = ${anime.id}>
            <div class="card__img">
                <img src="${anime.poster}" alt="${anime.title}">
            </div>
            <div class="card__body">
                <p class = "card__title">${anime.title}</p>
            </div>
        </div>
        `
                cardGrid.insertAdjacentHTML('beforeend', card)
            }

        }


    }
}

function searchAnime (){
    const search = document.querySelector("#search")

    search.addEventListener("input", function(){

        renderCard(search.value)
    })
    renderCard()
}

function showSidebar(){
    const btn = document.querySelector('.burger')

    btn.addEventListener('click', function(){
        sideBar.classList.toggle('open')
    })
}





initFilter()
showAllFilter()
getAllFilter()
searchAnime()
showSidebar()