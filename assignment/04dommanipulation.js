const btnGenerateRight = document.querySelector("#btn-generate-right");
const btnGenerateDown = document.querySelector("#btn-generate-down");

const mainDiv = document.querySelector("#main-div");
const rowDiv = document.querySelector("#row-down");
const colDiv = document.querySelector("#col-right");

const btnRight = document.querySelector(".btn-right");
const btnDown = document.querySelectorAll(".btn-down");

btnGenerateRight.addEventListener("click", () => {
  const addCol = document.createElement("button");
  addCol.className = "btn btn-primary btn-right";
  addCol.innerText = "Right";
  mainDiv.firstElementChild.firstElementChild.appendChild(addCol);
});

btnGenerateDown.addEventListener("click", () => {
  const rowDown = document.createElement("div");
  const colRight = document.createElement("div");

  rowDown.className = "row";
  rowDown.id = "row-down";
  colRight.className = "col";
  colRight.id = "col-right";

  mainDiv.appendChild(rowDown);
  rowDown.appendChild(colRight);
  for (let i = 0; i < colDiv.children.length; i++) {
    const addCol = document.createElement("button");
    addCol.className = "btn btn-warning btn-down";
    addCol.innerText = "Down";

    colRight.appendChild(addCol);
    console.log(i);
  }
  //   console.log(colDiv.children.length);
});
