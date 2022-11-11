const imgPort = document.querySelectorAll(".img-port");

for (i = 0; i < imgPort.length; i++) {
  imgPort[i].style.marginTop = "35px";
}

function randomImage() {
  const imageList = document.querySelector("#image-list");

  const imageNames = ["a.jpg", "b.jpg", "c.jpg"];
  const ran = Math.floor(Math.random() * imageNames.length);

  const image = document.createElement("img");
  image.classList.add("img-port");
  image.classList.add("img-fluid");
  image.setAttribute("src", "assets/" + imageNames[ran]);
  image.style.marginTop = "30px";
  imageList.append(image);
  console.log(imageNames[ran]);
}

const gallery = document.querySelector("#gallery-btn");
gallery.addEventListener("click", randomImage);
