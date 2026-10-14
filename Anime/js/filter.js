import { animeList } from "./anime_database.js";

const genreList = []
const animeType = []
const animeYear = []
const animeStudio = []
const animeSeason = []
const animeAgeRating = []

function perebor(param, key) {

    for (let i = 0; i < animeList.length; i++) {
        const value = animeList[i][key]
        if (!param.includes(value)) {
            param.push(value)
        }
    }
}
function getGenre() {
    for (let i = 0; i < animeList.length; i++) {

        for (let oneGenre of animeList[i].genres) {
            if (!genreList.includes(oneGenre)) {
                genreList.push(oneGenre)
            }
        }
    }
}
function getType() {
    perebor(animeType, 'type')
}
function getYear() {
    perebor(animeYear, 'year')
}
function getStudio() {
    perebor(animeStudio, 'studio')
}
function getSeason() {
    perebor(animeSeason, 'season')
}
function getAgeRating() {
    perebor(animeAgeRating, 'ageRating')
}
export function initFilter() {
    getGenre()
    getType()
    getYear()
    getStudio()
    getSeason()
    getAgeRating()
}


function filterPerebor(id, list) {

    let clasic = id.replace('#', '')

    const select = document.querySelector(id)

    for (let i = 0; i < list.length; i++) {
        let obj = `<label class ="${clasic}__input"><input type="checkbox" value="${list[i]}"> ${list[i]}  </label>`
        select.insertAdjacentHTML('beforeend', obj)
    }
}

function getAllGenre() {
    genreList.sort()
    filterPerebor('#genre', genreList)
}
function getAllStudio() {
    animeStudio.sort()
    filterPerebor('#studios', animeStudio)
}
function getAllYears() {
    animeYear.sort()
    filterPerebor('#year', animeYear)
}
function getAge() {
    animeAgeRating.sort()
    filterPerebor('#age', animeAgeRating)
}
function getSeoson() {
    animeSeason.sort()
    filterPerebor('#season', animeSeason)
}


export function showAllFilter() {
    getAllGenre()
    getAllStudio()
    getAllYears()
    getAge()
    getSeoson()
}

