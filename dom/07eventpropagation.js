document.querySelector("#grand-parent").addEventListener(
  "click",
  () => {
    console.log("Grandparent Clicked");
  },
  true
); // false is the default value that is the event bubbling. It is the third parameter which is useCapture. if sets to true, then the propagation is event capturing

document.querySelector("#parent").addEventListener(
  "click",
  (e) => {
    console.log("Parent Clicked");
  },
  false
);

document.querySelector("#child").addEventListener(
  "click",
  (e) => {
    console.log("Child Clicked");
    e.stopPropagation();
  },
  true
);
