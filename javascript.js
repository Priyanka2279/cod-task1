const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

todoForm.addEventListener('submit', addTodo);
todoList.addEventListener('click', deleteTodo);

function addTodo(event) {
  event.preventDefault();
  const todoText = todoInput.value.trim();
  if (todoText !== '') {
    const todoItem = document.createElement('li');
    todoItem.textContent = todoText;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');

    todoItem.appendChild(deleteBtn);
    todoList.appendChild(todoItem);
    todoInput.value = '';
  }
}

function deleteTodo(event) {
  if (event.target.classList.contains('delete-btn')) {
    const todoItem = event.target.parentElement;
    todoList.removeChild(todoItem);
  }
}