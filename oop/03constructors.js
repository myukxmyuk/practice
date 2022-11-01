// factory is also called constructor

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
circle.draw();
