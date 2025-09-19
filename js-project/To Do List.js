
let inputbox = document.getElementById("input-box");
let listcontainer = document.getElementById("list-container");
let addButton = document.querySelector(".row button"); 


document.addEventListener("DOMContentLoaded", showTasks);


addButton.addEventListener("click", addTask);

function addTask() {
    const taskText = inputbox.value.trim();
    if (taskText === "") {
        alert("You Must write Something!");
        return;
    }

    const task = {
        text: taskText,
        checked: false,
        timestamp: new Date().toLocaleString()
    };

    let tasks = getTasks();
    tasks.push(task);
    saveTasks(tasks);
    renderTasks(tasks);

    inputbox.value = "";
}

listcontainer.addEventListener("click", function(event) {
    const element = event.target;
    const listItem = element.closest("li");
    if (!listItem) return;

    const taskIndex = Array.from(listcontainer.children).indexOf(listItem);

    if (element.tagName === "LI") {
        let tasks = getTasks();
        tasks[taskIndex].checked = !tasks[taskIndex].checked;
        saveTasks(tasks);
        renderTasks(tasks);
    } else if (element.classList.contains("close")) {
        let tasks = getTasks();
        tasks.splice(taskIndex, 1);
        saveTasks(tasks);
        renderTasks(tasks);
    }
});

function getTasks() {
    const tasksString = localStorage.getItem("tasks");
    return tasksString ? JSON.parse(tasksString) : [];
}

function saveTasks(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks(tasks) {
    listcontainer.innerHTML = "";
    tasks.forEach(task => {
        let li = document.createElement("li");
        li.innerHTML = `
            <span>${task.text}</span>
            <small class="timestamp">${task.timestamp}</small>
            <span class="close">\u00d7</span>
        `;
        if (task.checked) {
            li.classList.add("checked");
        }
        listcontainer.appendChild(li);
    });
}

function showTasks() {
    const tasks = getTasks();
    renderTasks(tasks);
}
