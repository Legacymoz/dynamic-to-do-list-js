document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Load tasks from Local Storage
    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.forEach(task => {
            addTaskToDOM(task);
        });
    }

    function saveTasks(tasks) {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Add task to DOM
    function addTaskToDOM(taskText) {
        const listItem = document.createElement("li");
        listItem.textContent = taskText;
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.classList.add("remove-btn");
        removeButton.addEventListener('click', function() {
            taskList.removeChild(listItem);
            removeTask(taskText);
        });
        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);
    }

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === "") {
            alert("Enter a task");
        } else {
            addTaskToDOM(taskText);

            const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
            tasks.push(taskText);
            saveTasks(tasks);
            
            taskInput.value = '';  // Clear input field
        }
    }

    function removeTask(taskText) {
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks = tasks.filter(task => task !== taskText);
        saveTasks(tasks);
    }

    addButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    loadTasks(); // Load tasks when the page loads
});
