let randomNumber = Math.floor(Math.random() * 20) + 1
let score = 20
let highScore = 0
// document.querySelector('.number').textContent = randomNumber
console.warn(randomNumber)
// console.log(document.querySelector('.guess').value = '30')

// when number matched to random number
const numberMatchedUiChange = function () {
    document.querySelector('.message').textContent = '🥂 Correct Number...!'
    document.querySelector('.number').textContent = randomNumber
    document.querySelector('.number').style.width = '25rem'
    document.querySelector('body').style.backgroundColor = '#60b347'
}

// when number doesn't match to random number
const numberDoesntMatchedUiChange = function () {
    document.querySelector('.message').textContent = '😒 Empty Number...!'
    document.querySelector('body').style.backgroundColor = '#8B0000'
    document.querySelector('.number').textContent = '😑'
}

// Check if the Guessed number is equal to Random Number
const isNumberMatched = function (guessedNumber) {
    // when number matched to random number
    if (guessedNumber === randomNumber) {
        numberMatchedUiChange()
        // when number doesn't match and not empty value
    } else if (guessedNumber != '') {
        // console.log(guessedNumber)
        guessedNumber > randomNumber ? document.querySelector('.message').textContent = '📈 Too High!' : document.querySelector('.message').textContent = '📉 Too Low!'
        // when input is empty but pressed check buton
    } else {
        // when number doesn't match to random number
        numberDoesntMatchedUiChange()
    }
}


// 'check!' button Handler
const handleButtonPressCheck = function () {
    let guessedNumber = Number(document.querySelector('.guess').value)
    isNumberMatched(guessedNumber)
    // console.warn(typeof (guessedNumber))
}

// Handle 'Check!' button
document.querySelector('.check').addEventListener('click', handleButtonPressCheck)