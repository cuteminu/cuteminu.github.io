const clock = document.querySelector("#clock")
let displayFlag = false

function updateClock() {
    const time = new Date()
    let hour = time.getHours()
    const minute = String(time.getMinutes()).padStart(2, "0")

    if (displayFlag) { // display in AM / PM
        if (hour > 12) {
            hour = String(hour - 12)
        } else {
            hour = String(hour)
        }
    } else {
        hour = String(hour)
    }
    
    clock.innerText = `${hour}:${minute}`
}

function liveUpdateClock() {
    updateClock()
    setInterval(updateClock, 1000)
}

if (savedUsername !== null) {
    clock.classList.remove(HIDDEN_CLASS)
    liveUpdateClock()
} else {
    clock.classList.add(HIDDEN_CLASS)
}
