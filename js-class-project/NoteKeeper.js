
(function() {
    let tasks = [];
    try {
        tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    } catch (e) {
        console.error("Error parsing JSON from localStorage:", e);
        tasks = [];
    }

    //cache key DOM elements //
    const dom = {
        addNotesButton: document.querySelector("#add-notes-button"),
        popup: document.querySelector(".add-notes-pop-up"),
        closeButton: document.querySelector('#close-pop-up'),
        taskForm: document.querySelector("#task-form"),
        tasksContainer: document.querySelector('.tasks-container'),
    };

    const saveTasks = () => localStorage.setItem('tasks', JSON.stringify(tasks));

    const displayTasks = () => {
        dom.tasksContainer.innerHTML = tasks.map(task =>
            `<div class="task border p-4"><h4 class="title">${task.title}</h4><p class="description">${task.description}</p><span class="timeStamp">${task.timeStamp}</span></div>`
        ).join('');
    };

    // click event for add notes button//
    const handleAddNotesClick = () => {
        dom.popup.classList.add("active");
    };
//click event for close button//
    const handleCloseClick = () => {
        dom.popup.classList.remove("active");
    };

    //event for submit form//
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const { title, description } = e.target;
        if (!title.value.trim() || !description.value.trim()) {
            console.error("Please add task data before submitting.");
            return;
        }
        tasks.push({
            title: title.value.trim(),
            description: description.value.trim(),
            timeStamp: `T: ${new Date().toLocaleTimeString()} D: ${new Date().toLocaleDateString()}`
        });
        saveTasks();
        displayTasks();
        e.target.reset();
        dom.closeButton.click();
    };

   //add event listener//
    dom.addNotesButton.addEventListener('click', handleAddNotesClick);
    dom.closeButton.addEventListener('click', handleCloseClick);
    dom.taskForm.addEventListener('submit', handleFormSubmit);

    document.addEventListener('DOMContentLoaded', displayTasks);
})();