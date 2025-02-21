const todoList = [];

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const dateElement = document.querySelector('.js-date-input');
  const taskName = inputElement.value.trim();
  const dueDate = dateElement.value;

  if (taskName && dueDate) {
    todoList.push({ task: taskName, date: dueDate });
    inputElement.value = '';
    dateElement.value = '';
    renderTodoList();
  } else {
    alert('Please enter both a task and a due date.');
  }
}

function deleteTodo(index) {
  todoList.splice(index, 1);
  renderTodoList();
}

function renderTodoList() {
  const todoListHTML = todoList.map((item, i) => `
    <div class="todo-item">
      <div class="task">${item.task}</div>
      <div class="due-date">Due: ${item.date}</div>
      <button onclick="deleteTodo(${i})">Delete</button>
    </div>
  `).join('');

  document.querySelector('.js-show-list').innerHTML = todoListHTML;
}

// Optional: Add event listener for Enter key
document.querySelector('.js-name-input').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    addTodo();
  }
});

document.querySelector('.js-date-input').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    addTodo();
  }
});