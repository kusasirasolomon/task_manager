// Load tasks from local storage or create empty array
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Display tasks when page loads
window.onload = function () {
    displayTasks();
};

// Function to add a new task
function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();

    // Prevent empty tasks
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // Add task to array
    tasks.push(taskText);

    // Save to local storage
    localStorage.setItem("tasks", JSON.stringify(tasks));

    // Clear input
    input.value = "";

    // Update UI
    displayTasks();
}

// Function to display tasks
function displayTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");

        li.innerHTML = `
            ${task}
            <button class="delete-btn" onclick="deleteTask(${index})">X</button>
        `;

        taskList.appendChild(li);
    });
}

// Function to delete a task
function deleteTask(index) {
    tasks.splice(index, 1);

    // Update local storage
    localStorage.setItem("tasks", JSON.stringify(tasks));

    // Refresh list
    displayTasks();
}