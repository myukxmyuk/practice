// Creating Elements

const ul = document.querySelector("ul");
const li = document.createElement("li");

// Adding Elements

ul.append(li);

// Modifying Text

li.innerText = "X-men";

// Guide in Modifying Text, avoid using innerHTML, see output in console for difference

const firstListItem = document.querySelector(".list-items");

console.log(firstListItem.innerText);
console.log(firstListItem.textContent);
console.log(firstListItem.innerHTML);
