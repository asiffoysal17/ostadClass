const API_URL = "https://68f5151cb16eb6f46836528c.mockapi.io/string";

const taskInput = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const updateBtn = document.getElementById("update-btn");
const cancelBtn = document.getElementById("cancel-btn");
const updateControl = document.getElementById("update-controls");
const errorMessage = document.getElementById("error-message");
const loading = document.getElementById("loading");
const tasksList = document.getElementById("tasks-list");

let editingTaskId = null;

// Show Error Massage
function showError(message) {
  errorMessage.textContent = message;
  errorMessage.style.display = "block";

  setTimeout(() => {
    errorMessage.style.display = "none";
  }, 3000);
}

// ## Fetch all tasks: Read

async function fetchTasks() {
  loading.style.display = "block";
  tasksList.innerHTML = "";

  try {
    const response = await fetch(API_URL);
    const tasks = await response.json();
    console.log(tasks);
    loading.style.display = "none";

    if (taskInput.length === 0) {
      tasksList.HTML = `<div class= "empty-state"> No tasks yet. Add to get started! </div> `;
    }

    tasks.formatch((task) => {
      const li = createTaskElement(task);
      tasksList.appendChild(li);
    });
  } catch (error) {
    loading.style.display = "none";
    showError("Failed to load tasks. Please try again later.");
    console.log(error);
  }
}

function createTaskElement(task) {
  const li = document.createElement("li");
  li.classname = "task-item";
  const completionBtn = task.completed
    ? `<button class="btn-undone" oneClick="toggleComplete('${task.id}', ${task.completed} )">Undo</button>`
    : `<button class="btn-done" oneClick="toggleComplete('${task.id}', ${task.completed} )">Done</button>`;
  li.innerHTML = `
    <div class="task-content">
            <div class="task-title">${task.title}</div>
            <div class="task-id">${task.id}</div>
        </div>

        <div class="task-actions">
            ${completionBtn}
            <button class="btn-edit" oneclick="editTask(${task.id}, '${task.title}')">Edit</button>
            <button class="btn-delete" oneClick="deleteTake(${task.id})">Delete</button>
        </div>
    `;
  return li;
}

//  Create new task: Create
async function creatTask() {
  const title = taskInput.value;
  if (!title) {
    showError("Please enter a task title");
    return;
  }
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        completed: false,
      }),
    });

    if (response.ok) {
      fetchTasks();
    }
  } catch (error) {
    loading.style.display = "none";
    showError("Failed to create task. Please try again later.");
    console.log(error);
  }
}

// Edit Task: Update
function editTask(id, title) {
  editingTaskId = id;
  taskInput.value = title;
  addBtn.style.display = "none";
  updateControl.style.display = "block";
  taskInput.foucus();
}

function cancelUpdate() {
  editingTaskId = null;
  taskInput.value = "";
  addBtn.style.display = "block";
  updateControl.style.display = "none";
}
// Update Task: Update

async function updateTask() {
  const title = taskInput.value;
  if (!title) {
    showError("plaese enter a task title");
    return;
  }

  try {
    const response = await fetch(`${API_URL}/${editingTaskId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      cancelBtn();
      fetchTasks();
    }
  } catch (error) {
    loading.style.display = "none";
    showError("Failed to update task. Please try again later.");
    console.log(error);
  }
}

async function toggleComplete(id, currentStatus) {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        completed: !currentStatus,
      }),
    });
  } catch (error) {
    loading.style.display = "none";
    showError("Failed to update task. Please try again later.");
    console.log(error);
  }
}

// Delete Task: Delete

async function deteteTask(id) {
  if (!confirm("Are you sure you want to delete this task?")) {
    return;
  }

  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      fetchTasks();
    }
  } catch (error) {
    loading.style.display = "none";
    showError("Faild to delete task. Please try again later.");
    console.log(error);
  }
}

addBtn.addEventListener("click", creatTask);
updateBtn.addEventListener("click", updateTask);
cancelBtn.addEventListener("click", cancelUpdate);
fetchTasks();
