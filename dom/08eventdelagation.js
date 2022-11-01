// Event delegation refers to the process of using event propagation (bubbling) to handle events at a higher level in the DOM than the element on which the event originated. It allows us to attach a single event listener for elements that exist now or in the future

document.querySelector("ul").addEventListener("click", (e) => {
  console.log(e.target.getAttribute("id") + " is clicked");

  const target = e.target;

  if (target.matches("li")) {
    target.style.backgroundColor = "orange";
  }
});

const movie = document.querySelector("ul");
const newMovie = document.createElement("li");

newMovie.innerText = "Rugby";
// newMovie.classList.add("list-items");
// newMovie.classList.add("list-group-item");
newMovie.className = "list-items list-group-item";
newMovie.setAttribute("id", "rugby");

movie.append(newMovie);
