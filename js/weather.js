const city = document.querySelector("#weather span:first-child")
const weather = document.querySelector("#weather span:last-child")

city.style.color = "grey"
weather.style.fontSize = "25px"

function successHandle(position) {
    const coord = position.coords
    const lat = coord.latitude
    const lon = coord.longitude
    const API_KEY = "c2f8c14d0d4188d2113d349306d21afb"

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`

    fetch(url)
    .then(response => response.json())
    .then(data => {
        city.innerText = data.name
        weather.innerText = `${Math.floor(data.main.temp)}° ${data.weather[0].main}`
    })
}

function errHandle() {
    // alert("")
}   

navigator.geolocation.getCurrentPosition(successHandle, errHandle)