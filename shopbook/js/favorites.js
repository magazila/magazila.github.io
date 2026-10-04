export function initFav() {

    const favoriteList = document.querySelectorAll('.favorite')

    for (let favorite of favoriteList) {
        favorite.addEventListener('click', function () {
            favorite.classList.toggle('check')
        })
    }
}