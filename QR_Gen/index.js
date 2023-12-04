const button = document.querySelector(".con button")

button.addEventListener("click", () => {
    const inp = document.querySelector(".con input")
    const img = document.querySelector(".img_con img")
    img.setAttribute("src", "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + inp.value)
    img.parentElement.classList.remove("hide")
    inp.value = ""
})