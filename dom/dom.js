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

// querySelector accepts all CSS type selector such as tag, id, class but only selects the first/one item that matches the selector in the document

const container = document.querySelector("div");
console.log(container);

// querySelectorAll() accepts all CSS type selector such as tag, id, class. selects the all item that matches the selector in the document

const containerAll = document.querySelectorAll("div");
console.log(containerAll);
