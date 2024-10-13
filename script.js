document.addEventListener('DOMContentLoaded', function(){
    const addButton=document.getElementById('add-task-btn');
    const taskInput=document.getElementById('task-input');
    const taskList=document.getElementById('task-list');

    function addTask(){
        taskText = taskInput.value.trim();
        if (taskText == ""){
            alert("Enter a task")
        }
        else{
            const listtext = document.createElement("li")
            listtext.textContent=taskText;

            const removeButton= document.createElement('button')
            removeButton.textContent="Remove"
            removeButton.classList.add("remove-btn")

            removeButton.addEventListener('click', function(){
                taskList.removeChild(listtext)
            })

            listtext.appendChild(removeButton)
            taskList.appendChild(listtext)

        }
    }

    addButton.addEventListener('click', addTask)

    taskInput.addEventListener('keypress',function(event){
        if(event.key == 'Enter'){
            addTask();
        }
    })

    document.addEventListener('DOMContentLoaded', addTask);
})