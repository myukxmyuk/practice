// DOM Manipulation

// getElementById()

const title = document.getElementById("main-heading");
console.log(title);

// getElementByClass()

const listItems = document.getElementsByClassName("list-items");
console.log(listItems);

// getElementByTagName()

const listItemsTagName = document.getElementsByTagName("li");
console.log(listItemsTagName);

// querySelector accepts tag & all CSS type selector such as id, class but only selects the first/one item that matches the selector in the document

const container = document.querySelector("div");
console.log(container);

// querySelectorAll() accepts tag & all CSS type selector such as id, class. selects the all item that matches the selector in the document

const containerAll = document.querySelectorAll("div");
console.log(containerAll);
