const body = document.querySelector("body")
const html = document.querySelector("html")

const imgObj = [
    {
        src: "sydney.jpg",
        location: "Sydney, Australia"
    },
    {
        src: "newyork.jpg",
        location: "New York, USA"
    },
    {
        src: "newyork2.jpg",
        location: "New York, USA"
    }
]
const bgImage = imgObj[Math.floor(Math.random() * imgObj.length)]

body.style.height = "100vh"
body.style.backgroundImage = `url('img/${bgImage.src}')`
body.style.backgroundRepeat = "no-repeat"
body.style.backgroundSize = "cover"

