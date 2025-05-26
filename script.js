const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// Load tasks from localStorage
window.onload = () => {
  const saved = localStorage.getItem('tasks');
  if (saved) taskList.innerHTML = saved;
};

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  const li = document.createElement('li');
  li.innerHTML = `
    <span onclick="toggleDone(this)">${taskText}</span>
    <button onclick="deleteTask(this)">X</button>
  `;

  taskList.appendChild(li);
  taskInput.value = '';
  saveTasks();
}

function deleteTask(button) {
  button.parentElement.remove();
  saveTasks();
}

function toggleDone(span) {
  span.parentElement.classList.toggle('done');
  saveTasks();
}

function saveTasks() {
  localStorage.setItem('tasks', taskList.innerHTML);
}
