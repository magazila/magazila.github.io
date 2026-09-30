function initModal() {
    const btn = document.querySelector('.openModal')
    const modal = document.querySelector('.modal')
    const close = document.querySelector('.modal__close')

    btn.addEventListener('click', openModal)

    function openModal() {
        modal.classList.add('modal__openned')
        addEvent()
    }
    function closeModal() {
        modal.classList.remove('modal__openned')
        removeEvent()
    }

    function clickOutside (event){
        const clickTarget = event.target
        if (clickTarget === modal){
            closeModal()
        }
    }

    function initBtnEsc(event) {
        if (event.key === 'Escape') {
            closeModal()
        }
    }
    function addEvent() {
        close.addEventListener('click', closeModal)
        document.addEventListener('keydown', initBtnEsc)
        modal.addEventListener('click', clickOutside)
        
    }
    function removeEvent() {
        close.removeEventListener('click', closeModal)
        document.removeEventListener('keydown', initBtnEsc)
        modal.removeEventListener('click', clickOutside)
    }

}

initModal()