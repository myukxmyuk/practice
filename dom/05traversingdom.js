// Traverse the DOM

// Parent Node Traversal

let ul = document.querySelector("ul");

console.log(ul);
console.log(ul.parentNode); // getting the parent node
console.log(ul.parentElement); // getting the parent element

console.log(ul.parentNode.parentNode); // getting the grandparent node
console.log(ul.parentElement.parentElement); // getting the grandparent element

const html = document.documentElement;

console.log(html);
console.log(html.parentNode);
console.log(html.parentElement);

// Child Node Traversal

console.log(ul.childNodes); // node list includes the other node ie tab/space, document
console.log(ul.firstChild); // first child is a text which is tab/space between two elements tags
console.log(ul.lastChild); // last child is a text which is tab/space between two elements tags

console.log(ul.children); // element node list includes only elements tag
console.log(ul.firstElementChild); // first child is the first element tag withing the children node
console.log(ul.lastElementChild); // last child is the last element tag within the children node

// Sibling Node Traversal

const div = document.querySelector(".card");

console.log(div.childNodes);
console.log(ul.previousSibling);
console.log(ul.nextSibling);

console.log(div.children);
console.log(ul.previousElementSibling);
console.log(ul.nextElementSibling);
