// Factory Function

function createCircle(radius) {
  return {
    radius, // this is equal to radius: radius, in ES6 we can remove the noise and make it simple if key and value name is the same
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
