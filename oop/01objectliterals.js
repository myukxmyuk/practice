// {} = object literal
// an object is contain with key value pair which is called 'member'
// all members are property whether function or not, technically in OOP functions properties and methods are different because the latter doesn't hold values
// if a member is a function we refer it as a method

const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  draw: function () {
    console.log("draw");
  },
};

circle.draw();
