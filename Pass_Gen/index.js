const pass = document.querySelector(".display h2")
const button = document.querySelector(".gen button")
const slider = document.querySelector(".range input")
const range = document.querySelector(".range h3")
const c1 = document.querySelector("#upper_case")
const c2 = document.querySelector("#number")
const c3 = document.querySelector("#symbol")
const cop = document.querySelector(".cop input")

slider.addEventListener("input", (ev) => {
    range.innerHTML = "Password Length " + slider.value
})

button.addEventListener("click", () => {
    pass.innerHTML = ""
    const upr = "QWERTYUIOPASDFGHJKLZXCVBNM"
    const lwr = "qwertyuiopasdfghjklzxcvbnm"
    const num = "1234567890"
    const sym = "!@#$%^&*()_?/"
    let str = lwr + ((c1.checked) ? upr : "") + ((c2.checked) ? num : "") + ((c3.checked) ? sym : "")
    let len = str.length
    for (let i = 0; i < slider.value; i++) {
        let ind = Math.floor(Math.random() * len)
        pass.innerHTML = pass.innerHTML + str[ind]
    }
})
