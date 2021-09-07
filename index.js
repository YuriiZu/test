const input = document.querySelector("input[type='text']")
const list = document.getElementsByClassName("list")[0]
const addBTN = document.getElementsByClassName("addBTN")[0]
const clearBTN = document.getElementsByClassName("clearBTN")[0]

const addNewTask = () => {
if (input.value.length > 0) {
const newTask = document.createElement("a")
newTask.href = "#"
newTask.className = "list-group-item list-group-item-action list-group-item-primary"
list.append(newTask)
newTask.append(input.value)
input.value = null
}
else alert ("The field is empty")
}
addBTN.addEventListener("click", addNewTask)


const clearAll = () => list.innerHTML = null

clearBTN.addEventListener("click", clearAll)

const deleteTask = () => {
const task = list.getElementsByTagName("a")
console.log([...task])
}

function onClickTodo(event) {
    if (event.target.tagName === "a") {
        event.target.classList.toggle("click");
    }
}

// ...
list.addEventListener("click", onClickTodo);
// ...