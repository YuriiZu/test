const input = document.querySelector("input[type='text']")

const list = document.getElementsByClassName("list")[0]
const task = list.getElementsByTagName("a")[0]
const addBTN = document.getElementsByClassName("addBTN")[0]

const addNewTask = () => {
const newTask = document.createElement("a")
newTask.href = "#"
newTask.className = "list-group-item list-group-item-action list-group-item-primary"
list.append(newTask)
newTask.append(input.value)
input.value = null
}
addBTN.addEventListener("click", addNewTask)
