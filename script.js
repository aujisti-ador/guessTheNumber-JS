let randomNumber = Math.floor(Math.random() * 20) + 1
let score = 20
let highScore = 0


// Set again button
const setAgainButton = function () {
    randomNumber = Math.floor(Math.random() * 20) + 1
    score = 20
    document.querySelector('.score').textContent = score
    document.querySelector('.message').textContent = 'Start guessing...!'
    document.querySelector('.number').style.width = '15rem'
    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.number').textContent = '?'
    document.querySelector('.guess').value = ''
    document.querySelector('.check').style.backgroundColor = '#eee'
    document.querySelector('.check').disabled = false
}

// when number matched to random number
const setNumberMatchedUiChange = function () {
    document.querySelector('.message').textContent = '🥂 Correct Number...!'
    document.querySelector('.number').textContent = randomNumber
    document.querySelector('.number').style.width = '25rem'
    document.querySelector('body').style.backgroundColor = '#60b347'
    document.querySelector('.score').textContent = score
    document.querySelector('.highscore').textContent = highScore
    document.querySelector('.check').style.backgroundColor = '#808080'
    document.querySelector('.check').disabled = true
}

// when number doesn't match to random number
const setNumberDoesntMatchUiChange = function (guessedNumber) {
    score--
    if (score) {
        guessedNumber > randomNumber ? document.querySelector('.message').textContent = '📈 Too High!' :
            document.querySelector('.message').textContent = '📉 Too Low!'
        document.querySelector('.score').textContent = score
        document.querySelector('body').style.backgroundColor = '#222'
        document.querySelector('.number').textContent = '?'
    } else {
        // when score is below zero
        document.querySelector('.score').textContent = score
        document.querySelector('.check').style.backgroundColor = '#808080'
        document.querySelector('.check').disabled = true
        document.querySelector('.message').textContent = '💥 You Lost...!'

    }
}

// when input is empty value
const setEmptyUiChange = function () {
    document.querySelector('.message').textContent = '😒 Empty Number...!'
    document.querySelector('body').style.backgroundColor = '#8B0000'
    document.querySelector('.number').textContent = '😑'
}

// Check if the Guessed number is equal to Random Number
const isNumberMatched = function (guessedNumber) {
    // when number matched to random number
    if (guessedNumber === randomNumber) {
        score > highScore ? highScore = score : ''
        setNumberMatchedUiChange()
        // when number doesn't match and not empty value
    } else if (guessedNumber != '') {
        setNumberDoesntMatchUiChange(guessedNumber)
        // when input is empty but pressed check buton
    } else {
        // when number doesn't match to random number
        setEmptyUiChange()
    }


}

// 'check' button Handler
const handleButtonPressCheck = function () {
    let guessedNumber = Number(document.querySelector('.guess').value)
    isNumberMatched(guessedNumber)
}

// Handle 'Check' button
document.querySelector('.check').addEventListener('click', handleButtonPressCheck)
document.querySelector('.again').addEventListener('click', setAgainButton)