// Factory Function

function createCircle(radius) {
  return {
    radius, // this line is equal to radius: radius, in ES6 we can remove the noise and make it simple if key and value pair names are the same
    draw: function () {
      console.log("draw");
    },
  };
}
const circle = createCircle(1);

// Another way to create an object using constructor function

// Constructor Function

function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}
const another = new Circle(1); // creates an empty object like this {}
another.draw();

// every object in javascript has a constructor property, references the function that was use to construct or create the object
// go to console in browser and type another.constructor

new String(); // the constructor is new String(), the string literal are '', "", ``
new Boolean(); // the constructor is new Boolean(), the boolean literal are true or false

// Functions are Objects
