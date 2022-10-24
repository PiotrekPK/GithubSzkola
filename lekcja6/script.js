const btns = [...document.querySelectorAll("button")]
const select = document.querySelector("select")
const pjs = document.getElementById("pjs")

pjs.style.color = "red"

btns.map((btn, index) => {
    btn.addEventListener("click" , () => {
        const value = document.querySelector("input").value
        pjs.style.fontSize = value + "%"
        const selectValue = select.value
        if(selectValue === "prosty") {
            pjs.style.fontStyle = "normal"
        }else {
            pjs.style.fontStyle = "Italic"
        }
        if(index === 0) {
           pjs.style.color = "red"
        }else if (index === 1) {
            pjs.style.color = "green"
        }else {
            pjs.style.color = "blue"
        }
    })
})

//PIOTR KWIATEK