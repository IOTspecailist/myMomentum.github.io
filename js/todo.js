const toDoForm = document.getElementById("todoForm");
const toDoInput = document.querySelector("#todoForm input");
const toDoList = document.getElementById("todoList");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function editToDo(event) {
  const li = event.target.parentElement;
  const span = li.querySelector("span");
  const updatedText = prompt("Edit your task:", span.innerText);
  if (updatedText) {
    span.innerText = updatedText;
    const updatedToDoIndex = toDos.findIndex((toDo) => toDo.id === parseInt(li.id));
    toDos[updatedToDoIndex].text = updatedText;
    saveToDos();
  }
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "❌";
  deleteButton.addEventListener("click", deleteToDo);
  const editButton = document.createElement("button");
  editButton.innerText = "✏️";
  editButton.addEventListener("click", editToDo);
  li.appendChild(span);
  li.appendChild(deleteButton);
  li.appendChild(editButton);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}

