const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const userNameText = document.querySelector("#user-name");

function onLoginFormSubmit(event) {
  event.preventDefault();
  const userName = loginInput.value;
  localStorage.setItem("username",userName); 
  loginForm.classList.add("hidden");
  printGreeting(userName);
}

function printGreeting(userName) {
  userNameText.classList.remove("hidden");
  userNameText.innerText = `Hello, ${userName}.`;
}
const userName = localStorage.getItem("username");
if(userName){
  printGreeting(userName);
}else{
  loginForm.classList.remove("hidden");
  loginForm.addEventListener("submit", onLoginFormSubmit);
}


