export  function getAllFilter() {
    let filterGenre = []
    let filterStudios = []
    let filterYear = []
    let filterAge = []
    let filterSeasone = []


    function addFiltterToMass(objList, array) {
        for (let oneBtn of objList) {
            oneBtn.addEventListener('click', function () {
                const value = oneBtn.value;
                const index = array.indexOf(value);

                if (index === -1) {array.push(value)} 
                else {array.splice(index, 1);}

                console.log(array);
            });
        }
    }


    const genreBtnList = document.querySelectorAll('.genre__input input')
    const studiosBtnList = document.querySelectorAll('.studios__input input')
    const yearBtnList = document.querySelectorAll('.year__input input')
    const ageBtnList = document.querySelectorAll('.age__input input')
    const seasonBtnList = document.querySelectorAll('.season__input input')

    addFiltterToMass(genreBtnList, filterGenre)
    addFiltterToMass(studiosBtnList, filterStudios)
    addFiltterToMass(yearBtnList, filterYear)
    addFiltterToMass(ageBtnList, filterAge)
    addFiltterToMass(seasonBtnList, filterSeasone)
}