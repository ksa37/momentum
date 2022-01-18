const todoForm = document.getElementById("todo-form");
const todoList = document.getElementById("todo-list");

let todoObjs = [];
const TODO_KEY = "todos";

function onTodoDelete(event){
  const clickedTodo = event.target.parentElement;
  const idToDelete = clickedTodo.id;
  console.log(todoObjs);
  todoObjs = todoObjs.filter((todo)=> todo.id!==idToDelete);
  saveTodo();
  clickedTodo.remove();
}

function onTodoSubmit(event){
  event.preventDefault();
  const todoInput = todoForm.querySelector("input:first-child");
  const newTodoObj = {text: todoInput.value, id:String(Date.now())};
  todoObjs.push(newTodoObj);
  renderTodo(newTodoObj);
  saveTodo();
  todoInput.value = "";
  
}
function renderTodo(todoObj){
  const newTodo = document.createElement("li");
  newTodo.id = todoObj.id;
  const span = document.createElement("span");
  const button = document.createElement("button");
  button.addEventListener("click", onTodoDelete);
  span.innerText = todoObj.text;
  newTodo.appendChild(span);
  newTodo.appendChild(button);
  todoList.appendChild(newTodo);
}

function saveTodo(){
  localStorage.setItem(TODO_KEY, JSON.stringify(todoObjs));
}

todoForm.addEventListener("submit", onTodoSubmit);

const priorTodos = localStorage.getItem(TODO_KEY)
if(priorTodos){
  todoObjs = JSON.parse(priorTodos);
  todoObjs.map((todoEach)=>renderTodo(todoEach));
}