const form = document.querySelector(".form");
const taskInput = document.querySelector(".task_input");
const tasksList = document.querySelector(".list");
const emptyList = document.querySelector(".no_tasks");

form.addEventListener("submit", addTask)

function addTask(event) {

    event.preventDefault();

    const taskValue = taskInput.value;

    const taskToHTML = `<li class="task">
    <span class="task_name">${taskValue}</span>
    <div class="task_btn">
        <button type="button" data-action="complete" class="task_action btn over">выполнено</button>
        <button type="button" data-action="delete" class="task_action btn delete">удалить</button>
    </div>
    </li>`

    if (taskValue != "") {
        tasksList.insertAdjacentHTML("beforeend", taskToHTML);
    }    

    taskInput.value = "";

    if (tasksList.children.length > 1) {
        emptyList.classList.add('none');
    }
}

tasksList.addEventListener("click", deleteTask);

function deleteTask(event) {
    event.preventDefault();
    if (event.target.dataset.action == "delete") {
        const del= event.target.closest("li");
        del.remove()
    }
    if (tasksList.children.length > 1) {
        emptyList.classList.add('none');
    } else {
        emptyList.classList.remove('none')
    }
}

tasksList.addEventListener("click", completeTask);

function completeTask(event) {
    if (event.target.dataset.action == "complete") {
        const com = event.target.closest("li");
        com.classList.add("done")
    }    
}