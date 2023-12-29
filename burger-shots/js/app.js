const tab = document.querySelectorAll('.tab-btn')

for (const tabs of tab) {
    tabs.addEventListener('click', () => {
        clearActiveClasses ()
        tabs.classList.add('active')
    })
}

function clearActiveClasses() {
    tab.forEach((tabs) => {
        tabs.classList.remove ('active')
    })
}