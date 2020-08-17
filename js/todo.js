let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

let ul = document.querySelector(".list-group"),
  form = document.forms["addTodoItem"],
  inputText = form.elements["todoText"],
  notificationAlert = document.querySelector(".notification-alert");
