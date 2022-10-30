// Traverse the DOM

// Event Listeners

const buttonTwo = document.querySelector(".btn-two");

function alertBtn() {
  alert("I also love Javascript");
}

buttonTwo.addEventListener("click", alertBtn);

// Or Explicitly use the callback function

// buttonTwo.addEventListener("click", () => {
//   alert("I also love Javascript");
// });

// Mouseover

const newBackgroundColor = document.querySelector(".card-header");
newBackgroundColor.addEventListener("mouseover", () => {
  newBackgroundColor.style.backgroundColor = "blue";
});
