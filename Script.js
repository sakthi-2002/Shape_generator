let button = document.getElementById("button");
var numberInTheShape = 1;
var oldValue = 0;

button.onclick = () => {
  let n = document.getElementById("number").value;
  let a = document.getElementById("color").value;
  const circle = document.getElementById("circle");
  const square = document.getElementById("square");
  const rect = document.getElementById("rectangle");
  const box = document.getElementById("box");
  let j;
  n = Number(oldValue) + Number(n);
  for (let j = numberInTheShape; j <= n; j++) {
    var shape = document.createElement("div");
    shape.innerHTML += numberInTheShape;
    if (square.checked) {
      shape.classList.add("square");
      shape.style.backgroundColor=a;
    } 
    else if (circle.checked) {
      shape.classList.add("circle");
      shape.style.backgroundColor=a;
    } 
    else if (rect.checked) {
      shape.classList.add("rectangle");
      shape.style.backgroundColor=a;
    } 
    else {
      document.write("invalid Input");
    }
    box.appendChild(shape);
    numberInTheShape++;
    oldValue = document.getElementById("box").lastElementChild.innerHTML;
  }
};