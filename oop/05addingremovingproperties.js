function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}
const circle = new Circle(10);

// Adding property

circle.location = { x: 1 }; // property name location is added
console.log(circle); // display all properties

// Or we add a dynamic name of property like this

const propertyName = "center";
circle[propertyName] = { x: 1 };
console.log(circle); // display all properties

// Deleting Property

delete circle.location;
console.log(circle); // display all properties
