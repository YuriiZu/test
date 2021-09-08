const input = document.querySelector("input[type='text']");
const list = document.getElementsByClassName("list")[0];
const tasks = list.children;
const arr = [...tasks];
const addBTN = document.getElementsByClassName("addBTN")[0];
const clearBTN = document.getElementsByClassName("clearBTN")[0];

const addNewTask = () => {
  if (input.value.length > 0) {
    const newTask = document.createElement("a");
    newTask.href = "#";
    newTask.style.backgroundColor = "lightblue"
    newTask.className =
      "list-group-item list-group-item-action list-group-item-primary";
    list.append(newTask);
    newTask.append(input.value);
    arr.push(newTask);
    input.value = null;
  } else alert("The field is empty");
};
addBTN.addEventListener("click", addNewTask);
input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
      addNewTask();
    }
  });

const clearAll = () => (list.innerHTML = null);
clearBTN.addEventListener("click", clearAll);

const deleteTask = () => {
  for (const elem of arr) {
    elem.addEventListener("dblclick", function () {
      elem.remove();
    });
  }
};
list.addEventListener("mouseover", deleteTask);


const finishTask = () => {
    const links = document.getElementsByTagName("a")
    const arr = [...links]
    for (const elem of arr) {
      elem.addEventListener("mousedown", function () {
          if (elem.style.backgroundColor === "lightblue") {
       return elem.style.backgroundColor = "lightgreen"}
      if  (elem.style.backgroundColor === "lightgreen") {
    elem.style.backgroundColor = "lightblue" }
          })
        }
    }
  list.addEventListener("mouseover", finishTask);
  list.addEventListener("mouseout", finishTask);


