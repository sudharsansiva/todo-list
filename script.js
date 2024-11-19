// Select elements
const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");

// Add Task
addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  // Create task item
  const taskItem = document.createElement("li");
  taskItem.classList.add("task-item");

  const taskSpan = document.createElement("span");
  taskSpan.textContent = taskText;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";

  // Delete Task
  deleteBtn.addEventListener("click", () => {
    taskList.removeChild(taskItem);
  });

  taskItem.appendChild(taskSpan);
  taskItem.appendChild(deleteBtn);

  // Add task to the list
  taskList.appendChild(taskItem);

  // Clear input
  taskInput.value = "";
});


