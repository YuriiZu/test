const mainListInput = document.getElementsByTagName("input")[0];
const list = document.getElementsByClassName("list")[0];
const addBTN = document.getElementsByClassName("addBTN")[0];
const clearBTN = document.getElementsByClassName("clearBTN")[0];
const deleteBTN = document.getElementsByClassName("deleteBTN")[0];
const saveBTN = document.getElementsByClassName("saveBTN")[0];
const submitBTN = document.getElementsByClassName("submitBTN")[0];
const buttons = document.getElementsByClassName("buttons")[0]
const listContainer = document.getElementsByClassName("listContainer")[0]

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

const addNewList = () => {
    const div = document.createElement("div")
    list.append(div)
    const listname = document.createElement("h3")
    listname.style.color = "white"
    listname.append(mainListInput.value)
    div.append(listname)
    const deleteListBTN = document.createElement("button")
    deleteListBTN.className = "deleteList btn btn-warning"
    deleteListBTN.innerHTML = "Delete list"
    div.append(deleteListBTN)
    deleteListBTN.addEventListener("click", () => {
      div.remove()
    })
    const inputDiv = document.createElement("div")
    inputDiv.className = "taskinput form-floating mb-3 w-50"
    div.append(inputDiv)
    const input = document.createElement("input")
    input.className = "form-control";
    input.id = "floatingInput"
    input.type = "text"
    input.placeholder = "new task"
    div.append(input)
    mainListInput.value = null;

    const addNewTask = () => {
      if (input.value.length > 0) {
        const newTask = document.createElement("a");
        newTask.href = "#";
        newTask.style.backgroundColor = "lightblue";
        newTask.className =
          "list-group-item list-group-item-action list-group-item-primary";
        newTask.append(input.value);
        div.append(newTask);
        input.value = null;
      }
    };
    addBTN.addEventListener("click", addNewTask);


  }
  
submitBTN.addEventListener("click", addNewList);


saveBTN.addEventListener("click", () => {
  localStorage.setItem("tasks", list.innerHTML);
});

const loadTasks = () => {
  if (localStorage.getItem("tasks")) {

    list.innerHTML = localStorage.getItem("tasks");
  }
};

loadTasks();