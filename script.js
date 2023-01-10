let idAdvice = document.getElementById('id')
let textAdvice = document.getElementById('advice')
let divider = document.querySelector('.divider')
let divDice = document.querySelector('.new_advice')

if (window.screen.width < 768) {
    divider.src = 'images/pattern-divider-mobile.svg'
    divider.alt = 'pattern-divider-mobile.svg'
} else {
    divider.src = 'images/pattern-divider-desktop.svg'
    divider.alt = 'pattern-divider-desktop.svg'
}

divDice.addEventListener('click', newAdvice)

function newAdvice() {
    fetch('https://api.adviceslip.com/advice').then((response) => {
        response.json().then((advice) => {
            idAdvice.innerHTML = `Advice #${advice.slip.id}`
            textAdvice.innerHTML = `"${advice.slip.advice}"`
        })
    })
}

newAdvice()