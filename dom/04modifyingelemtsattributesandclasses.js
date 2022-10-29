// Creating Elements

const ul = document.querySelector("ul");
const li = document.createElement("li");

// Adding Elements

ul.append(li);

// Modifying Text

li.innerText = "X-men";

// Modifying Attributes

li.setAttribute("id", "main-heading");

// Removing Attributes
li.removeAttribute("id");

const title = document.querySelector("#main-heading");

console.log(title.getAttribute("id"));

// Modifying Classes

li.classList.add("list-group-item", "text-bg-secondary");

// Removing Classes
// li.classList.remove("list-group-item", "text-bg-secondary");

console.log(li.classList.contains("list-group-item"));

// Removing Elements

// li.remove();
