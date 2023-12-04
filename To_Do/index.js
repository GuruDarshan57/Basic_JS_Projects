const button = document.querySelector(".task_inp button")
const input = document.querySelector(".task_inp input")
const task_con = document.querySelector(".tasks")

function save_data() {
    localStorage.setItem("data", task_con.innerHTML)
}
function get_data() {
    task_con.innerHTML = localStorage.getItem("data");
}

button.addEventListener("click", () => {
    if (input.value == "") {

    }

    else {

        let con = document.createElement("div")
        let txt = document.createElement("p")
        let but = document.createElement("button")
        txt.innerHTML = input.value
        con.appendChild(txt)
        con.appendChild(but)
        task_con.appendChild(con)
        save_data();
        input.value = " "
    }
})
task_con.addEventListener("click", function (e) {
    if (e.target.tagName === "DIV" || e.target.tagName === "P") {
        e.target.classList.toggle("check")
        save_data();

    }
    else if (e.target.tagName === "BUTTON") {
        e.target.parentElement.remove()
        save_data();

    }
})

get_data();