

const max = parseInt(prompt())
const min = parseInt(prompt())

 function randomNumber (a, b) {

    return Math.floor(Math.random() * (max-min+1) + min)

}
function show() {
    console.log(randomNumber(max, min))
}
show()