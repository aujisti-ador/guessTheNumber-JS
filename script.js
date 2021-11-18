let randomNumber = Math.floor(Math.random() * 20) + 1
// document.querySelector('.number').textContent = randomNumber
console.warn(randomNumber)
// console.log(document.querySelector('.guess').value = '30')


const numberMatchedUiChange = function () {
    document.querySelector('.message').textContent = '🥂 Correct Number...!'
    document.querySelector('.number').textContent = randomNumber
    document.querySelector('.number').style.width = '25rem'
    document.querySelector('body').style.backgroundColor = '#60b347'
}

// Check if the Guessed number is equal to Random Number
const doesNumberMatch = function (guessedNumber) {
    if (guessedNumber === randomNumber) {
        numberMatchedUiChange()
    }
}


// 'check!' button Handler
const handleButtonPressCheck = function () {
    let guessedNumber = Number(document.querySelector('.guess').value)
    doesNumberMatch(guessedNumber)
    // console.warn(typeof (guessedNumber))
}

// Handle 'Check!' button
document.querySelector('.check').addEventListener('click', handleButtonPressCheck)