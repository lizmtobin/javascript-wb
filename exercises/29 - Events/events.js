const button = document.querySelector(".button");

function listenClick() {
  console.log("Click!");
}

//arrow function
// const listenClick = () => {
//   console.log("Click!");
// };

//coffee function
// listenClick = ->
//   console.log 'Click!'
//   return

button.addEventListener("click", listenClick);
button.removeEventListener("click", listenClick);
