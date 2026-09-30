const btn = document.querySelector('.openModal')
const close = document.querySelector('.modal__close')


btn.addEventListener('click', openModal)
close.addEventListener('click', closeModal)


function openModal() {
    const modal = document.querySelector('.modal')
    modal.classList.add('modalOpen')
} function closeModal() {
    modal.classList.remove('modalOpen')
}





