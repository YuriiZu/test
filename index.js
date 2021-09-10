const input = document.getElementsByTagName("input")[1];
const mainListInput = document.getElementsByTagName("input")[0];
const list = document.getElementsByClassName("list")[0];
const listMenu = document.getElementsByClassName("listMenu")[0];
const lists = listMenu.options;
const addBTN = document.getElementsByClassName("addBTN")[0];
const clearBTN = document.getElementsByClassName("clearBTN")[0];
const deleteBTN = document.getElementsByClassName("deleteBTN")[0];
const saveBTN = document.getElementsByClassName("saveBTN")[0];
const submitBTN = document.getElementsByClassName("submitBTN")[0];

// document.body.style.backgroundColor = "#161721"
// const container = document.getElementsByClassName("container")[0];
// container.style.background = "black"
// const listContainer = document.getElementsByClassName("listContainer")[0];
// listContainer.style.display = "flex"
// listContainer.justifycontent

const addNewTask = () => {
  if (input.value.length > 0) {
    const list1 = document.createElement("div");
    const list2 = document.createElement("div");
    const list3 = document.createElement("div");
    const newTask = document.createElement("a");
    newTask.href = "#";
    newTask.style.backgroundColor = "lightblue";
    newTask.className =
      "list-group-item list-group-item-action list-group-item-primary";
    list.append(newTask);
    newTask.append(input.value);
    input.value = null;
  } else alert("The field is empty");
};
addBTN.addEventListener("click", addNewTask);
input.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    addNewTask();
  }
});

const clearAll = () => {
  list.innerHTML = null;
  localStorage.removeItem("todoList");
};
clearBTN.addEventListener("click", clearAll);

const deleteTask = () => {
  const links = document.getElementsByTagName("a");
  const arr = [...links];
  for (const elem of arr) {
    if (elem.style.backgroundColor === "lightgreen") elem.remove();
  }
};
deleteBTN.addEventListener("click", deleteTask);

const finishTask = () => {
  const links = document.getElementsByTagName("a");
  const arr = [...links];
  for (const elem of arr) {
    elem.addEventListener("mousedown", () => {
      if (elem.style.backgroundColor === "lightblue") {
        return (elem.style.backgroundColor = "lightgreen");
      }
      if (elem.style.backgroundColor === "lightgreen") {
        elem.style.backgroundColor = "lightblue";
      }
    });
  }
};
list.addEventListener("mouseover", finishTask);
list.addEventListener("mouseout", finishTask);

saveBTN.addEventListener("click", () => {
  localStorage.setItem("tasks", list.innerHTML);
});

const loadTasks = () => {
  if (localStorage.getItem("tasks")) {
    list.innerHTML = localStorage.getItem("tasks");
  }
};
loadTasks();

const addNewList = () => {
  if (mainListInput.value.length > 0)
  {
    const newList = document.createElement("option");
    listMenu.append(newList);
    newList.append(mainListInput.value);
    newList.value = mainListInput.value;
    mainListInput.value = null;
  } else alert("The field is empty");
};

submitBTN.addEventListener("click", addNewList);
mainListInput.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    addNewList();
  }
});

// const changeLists = () => {

// }