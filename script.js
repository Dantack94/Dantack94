let todos= []

function addTodo() {
    const input = document.getElementById('todo-input')
    const todoText = input.value.trim()
    let todos= []

var taskInput = document.getElementById("taskInput");
var addButton = document.getElementById("addButton");
var taskList = document.getElementById("taskList");

// Agregar evento al botón "Agregar"
addButton.addEventListener("click", function() {
  var task = taskInput.value;
  if (task.trim() !== "") {
    var newTask = document.createElement("li");
    newTask.innerText = task;
    newTask.addEventListener("click", toggleTask);
    taskList.appendChild(newTask);
    taskInput.value = "";
  }
});

function toggleTask() 
{
  this.classList.toggle("completed");
}
}
