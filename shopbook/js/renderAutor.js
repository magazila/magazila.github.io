import { books } from "./data.js";



export function renderAutor(){

    const autorList = []

    for(let autor of books){
        if(!autorList.includes(autor.author)){
            autorList.push(autor.author)
        }
    }

    autorList.sort()

    for (let oneLabel of autorList){
        const filterAutor = document.querySelector('.filter__autor')
         let obj = `<label><input type="checkbox" value="${oneLabel}">${oneLabel}</label></label>`;
         filterAutor.insertAdjacentHTML("beforeend", obj)
    }
}