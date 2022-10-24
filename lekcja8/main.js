const cont = document.querySelector(".beer_container");
const btnBeers = [...document.querySelectorAll(".beer")];

btnBeers.forEach((element) => {
  element.addEventListener("click", moveBeer);
});

function moveBeer() {
  if (this.className === "beer_somersby beer") {
    cont.classList.toggle("left");
    cont.style.backgroundColor = "red";
  } else if (this.className === "beer_lech beer") {
    cont.classList.toggle("left");
    cont.style.backgroundColor = "green";
  } else {
    cont.classList.toggle("left");
    cont.style.backgroundColor = "blue";
  }
}