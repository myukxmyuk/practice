const gridElement = document.querySelector("#btn-grid");
generateRight = () => {
  const rightRow = document.querySelector("#right");
  const rightBtn = document.createElement("button");
  const downRowInstances = document.getElementsByClassName("down-row");
  for (let i = 0; i < downRowInstances.length; i++) {
    const downBtn = document.createElement("button");
    downBtn.classList.add("btn");
    downBtn.classList.add("btn-warning");
    downBtn.innerHTML = "Down";
    downRowInstances[i].children[0].appendChild(downBtn);
  }
  rightBtn.classList.add("btn");
  rightBtn.classList.add("btn-primary");
  rightBtn.innerHTML = "Right";
  rightRow.appendChild(rightBtn);
};
function generateDown() {
  const downRow = document.createElement("div");
  const colContainer = document.createElement("div");
  const rightRow = document.querySelector("#right");
  for (let i = 0; i < rightRow.children.length; i++) {
    const downBtn = document.createElement("button");
    downBtn.classList.add("btn");
    downBtn.classList.add("btn-warning");
    downBtn.innerHTML = "Down";
    colContainer.appendChild(downBtn);
  }
  downRow.classList.add("row");
  downRow.classList.add("down-row");
  colContainer.classList.add("col");
  downRow.appendChild(colContainer);
  gridElement.appendChild(downRow);
}
