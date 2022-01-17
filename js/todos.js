const todoForm = document.getElementById("todo-form");
const todoList = document.getElementById("todo-list");

let todoObjs = [];

function onTodoDelete(event){
  const clickedTodo = event.target.parentElement;
  const idToDelete = clickedTodo.id;
  todoObjs = todoObjs.filter((todo)=>todo.id!==idToDelete);
  console.log(todoObjs);
  localStorage.setItem("todos", JSON.stringify(todoObjs));
  clickedTodo.remove();
}

function onTodoSubmit(event){
  event.preventDefault();
  const todoInput = todoForm.querySelector("input:first-child");
  const newTodo = document.createElement("li");
  newTodo.id = Date.now();
  const span = document.createElement("span");
  const button = document.createElement("button");
  button.addEventListener("click", onTodoDelete);
  span.innerText = todoInput.value;
  newTodo.appendChild(span);
  newTodo.appendChild(button);
  todoList.appendChild(newTodo);
  todoInput.value = "";

  const newTodoObj = {text: newTodo.innerText, id:newTodo.id};
  todoObjs.push(newTodoObj);
  localStorage.setItem("todos", JSON.stringify(todoObjs));
}

todoForm.addEventListener("submit", onTodoSubmit);

const priorTodos = localStorage.getItem("todos")
if(priorTodos){
  todoObjs = JSON.parse(priorTodos);
}