const button = document.querySelector(".buttons");
const exp = document.querySelector(".exp h2")
const tot = document.querySelector(".tot h2")
const mode = document.querySelector("#mode")

button.addEventListener("click", function (e) {
    let ele = e.target.id
    if (ele === "num" || ele === "ope") {
        if (exp.innerHTML === "0") {
            exp.innerHTML = e.target.innerHTML
            tot.innerHTML = eval(exp.innerHTML)
        }
        else {
            exp.innerHTML = exp.innerHTML + e.target.innerHTML
            tot.innerHTML = eval(exp.innerHTML)
        }
    }
    else if (ele === "mode" || ele === "modes") {

        document.body.classList.toggle("dark")
        mode.innerHTML = (document.body.classList.length === 1) ? "<i id='modes' class='fa-solid fa-sun'></i>" : "<i id='modes' class='fa-solid fa-moon'>"
    }
    else if (ele === "uti") {
        if (e.target.innerHTML === "AC") {
            exp.innerHTML = "0"
            tot.innerHTML = eval(exp.innerHTML)
        }
        else {
            if (exp.innerHTML != "0" && exp.innerHTML != "" && exp.innerHTML.length != 1) {
                exp.innerHTML = exp.innerHTML.slice(0, -1)
                tot.innerHTML = eval(exp.innerHTML)
            }
            else {
                exp.innerHTML = ""
                tot.innerHTML = ""
            }

        }
    } else if (ele == "tot") {
        exp.innerHTML = tot.innerHTML

    }
})
