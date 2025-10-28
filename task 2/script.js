// Select elements
const addBtn = document.getElementById('addBtn');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Add new task
addBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') addTask();
});

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  // Create list item
  const li = document.createElement('li');
  li.textContent = taskText;

  // Mark complete on click
  li.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  // Delete button
  const delBtn = document.createElement('button');
  delBtn.textContent = '✖';
  delBtn.classList.add('delete-btn');
  delBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // prevent toggle
    li.remove();
  });

  li.appendChild(delBtn);
  taskList.appendChild(li);

  // Clear input
  taskInput.value = "";
}
