//toggle icon
const toggler = document.querySelector("#toggler");
//toggle_bar
const toggle_bar = document.querySelector(".settings_bar")
//submit button
const submit = document.querySelector(".settings_bar button")
//input
const input = document.querySelector("#date")
//initial_message
const message = document.querySelector("#ini_message")
//time_display
const timer = document.querySelector("#time_dis")
//years
const year = document.querySelector(".years h1")
//years
const month = document.querySelector(".months h1")
//years
const day = document.querySelector(".days h1")
//years
const hour = document.querySelector(".hours h1")
//years
const minute = document.querySelector(".minutes h1")
//years
const second = document.querySelector(".seconds h1")
//check
let toogle = false;


toggler.addEventListener("click", () => {
    toggle_bar.classList.toggle("hide");
})

let time = () => {
    const set_date = new Date(input.value)
    const cur_date = new Date()
    const date_diff = cur_date - set_date
    let years = Math.floor((date_diff) / (1000 * 60 * 60 * 24 * 365))
    let months = Math.floor(((date_diff) / (1000 * 60 * 60 * 24 * 30)) % 12)
    let days = Math.floor((date_diff) / (1000 * 60 * 60 * 24) % 30)
    let hours = Math.floor((date_diff) / (1000 * 60 * 60) % 24)
    let minutes = Math.floor((date_diff) / (1000 * 60) % 60)
    let seconds = Math.floor((date_diff) / (1000) % 60)

    year.innerHTML = (years > 9) ? years : "0" + years
    month.innerHTML = (months > 9) ? months : "0" + months
    day.innerHTML = (days > 9) ? days : "0" + days
    hour.innerHTML = (hours > 9) ? hours : "0" + hours
    minute.innerHTML = (minutes > 9) ? minutes : "0" + minutes
    second.innerHTML = (seconds > 9) ? seconds : "0" + seconds


}
submit.addEventListener("click", () => {
    if (input.value == 0) {
        message.classList.toggle("blink")
    }
    else {
        setInterval(() => {
            time()
        }, 1000);

        if (toogle === false) {
            message.classList.toggle("hide")
            timer.classList.toggle("hide")
            toogle = true
        }

    }

})