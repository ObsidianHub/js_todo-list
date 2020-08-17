let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

let ul = document.querySelector(".list-group"),
  form = document.forms["addTodoItem"],
  inputText = form.elements["todoText"],
  notificationAlert = document.querySelector(".notification-alert");

function generateId() {
  let id = "";
  let words = "0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";

  for (let i = 0; i < 15; i++) {
    let position = Math.floor(Math.random() * words.length);
    id += words[position];
  }

  return id;
}
