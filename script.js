const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

let date = new Date()
let hr = date.getHours()
let min = date.getMinutes()
let sec = date.getSeconds()

let hrPosition = (hr*360/12) + (min*(360/60)/12)
let minPosition = (min*360/60)+(sec*(360/60)/60)
let secPosition = sec*360/60

function runTheClock() {
    secPosition = secPosition + 6
    minPosition = minPosition + (1/10)
    hrPosition = hrPosition + (1/120)

    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)"
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)"
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)"
}

let interval = setInterval(runTheClock, 1000)
