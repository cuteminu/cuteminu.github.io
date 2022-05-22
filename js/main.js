const loginForm = document.querySelector("#login-form")
const qText = document.querySelector("#question")
const loginText = document.querySelector("#login-form input")
const welcome = document.querySelector("#display-user")

const weatherDisplay = document.getElementById("weather")
const todoDisplay = document.getElementById("todo-display")

const welcomeQuotes = [
    ["Good morning", "Enjoy your day", "Just do it",],
    ["Good evening", "Love your work", "Be happy", "Enjoy your lunch",],
    ["Good night", "You did great", "It must have been tough",],
]

const HIDDEN_CLASS = "hidden"

function getTimebasedQuote() {
    const time = new Date()
    const hour = time.getHours()
    if (hour < 12 && hour > 6) {
        return welcomeQuotes[0][Math.floor(Math.random() * 3)]
    } else if (hour < 20 && hour > 12) {
        return welcomeQuotes[1][Math.floor(Math.random() * 4)]
    } else {
        return welcomeQuotes[2][Math.floor(Math.random() * 3)]
    }
}

function loginHandle(event) {
    event.preventDefault()
    const username = loginText.value
    localStorage.setItem("username", username)

    // login part
    loginForm.classList.add(HIDDEN_CLASS)
    qText.classList.add(HIDDEN_CLASS)
    displayUser(username)

    // clock part
    clock.classList.remove(HIDDEN_CLASS)
    liveUpdateClock()

    // weather part
    weatherDisplay.classList.remove(HIDDEN_CLASS)

    // todo part
    todoDisplay.classList.remove(HIDDEN_CLASS)   
}

function displayUser(username) {
    welcome.innerText = `${getTimebasedQuote()}, ${username}.`
}

const savedUsername = localStorage.getItem("username")          


if (savedUsername !== null) { // logged in before
    loginForm.classList.add(HIDDEN_CLASS)
    qText.classList.add(HIDDEN_CLASS)
    weatherDisplay.classList.remove(HIDDEN_CLASS)
    todoDisplay.classList.remove(HIDDEN_CLASS)

    displayUser(savedUsername)
} else {    // not logged in yet
    loginForm.classList.remove(HIDDEN_CLASS)
    qText.classList.remove(HIDDEN_CLASS)
    weatherDisplay.classList.add(HIDDEN_CLASS)
    todoDisplay.classList.add(HIDDEN_CLASS)

    loginForm.addEventListener("submit", loginHandle)
}