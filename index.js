let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

let ul = document.querySelector('.list-group'),
    form = document.forms['addTodoItem'],
    inputText = form.elements['todoText'],
    notificationAlert = document.querySelector('.notification-alert');

function generateId() {
    let id = '';
    let words = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';

    for (let i = 0; i < 15; i++) {
        let position = Math.floor(Math.random() * words.length);
        id += words[position];
    }

    return id;
}

function generateList(tasksArray) {
    clearList();

    for (let i = 0; i < tasksArray.length; i++) {
        let li = listTemplate(tasksArray[i]);
        ul.appendChild(li);
    }
}

function listTemplate(task) {
    // create list item
    let li = document.createElement('li');
    li.className = 'list-group-item d-flex align-items-center';
    li.setAttribute('data-id', task.id);
    let span = document.createElement('span');
    span.textContent = task.text;
    // create tag i fa-trash-alt
    let iDelete = document.createElement('i');
    iDelete.className = 'fas fa-trash-alt delete-item ml-4';
    // create tag i fa-edit-alt
    let iEdit = document.createElement('i');
    iEdit.className = 'fas fa-edit-alt edit-item ml-auto';
    // append delete and edit icon to list item
    li.appendChild(span);
    li.appendChild(iEdit);
    li.appendChild(iDelete);

    return li;
}

function clearList() {
    ul.innerHTML = '';
}

function addList(list) {
    let newTask = {
        id: generateId(),
        text: list
    };
    tasks.unshift(newTask);
    ul.insertAdjacentElement('afterbegin', listTemplate(newTask));
    // add to LocalStorage
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function deleteListItem(id) {
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id === id) {
            tasks.splice(i, 1);
            break;
        }
    }
    // update to LocalStorage
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function editListItem(id, newValue) {
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id === id) {
            tasks.text = newValue;
            break;
        }
    }
    // update to LocalStorage
    localStorage.setItem('tasks', JSON.stringify(tasks));
}