function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}
const circle = new Circle(10);

for (let key in circle) {
  console.log(key, circle[key]); // enumerating all properties and methods

  if (typeof circle[key] !== "function") console.log(key, circle[key]); // enumerating keys excluding methods
}
