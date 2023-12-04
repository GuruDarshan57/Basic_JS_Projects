const button = document.querySelector(".toggle")
const link = document.querySelector(".nav_links")

document.querySelector(".logo").addEventListener("click", (e) => {
    if (e.target.id === "hi") {
        link.classList.toggle("unhide")
    }
})