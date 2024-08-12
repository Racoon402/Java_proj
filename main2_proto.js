let addButton = document.getElementById("add-button");
let taskArea = document.getElementsByClassName("tasks")[0];
let deleteButton = document.getElementById("delete-button");
let checkButton = document.getElementById("check-button");
addButton.addEventListener("click", add);
deleteButton.addEventListener("click", deleteTask);
checkButton.addEventListener("click", checkTask);

function add(){
    console.log('add');
    let input = document.getElementsByTagName("input")[0];
    inputText = input.value;
    input.value = "";
    let newTask = document.createElement("div");
    newTask.classList.add("task");

    let taskText = document.createElement("div");
    taskText.textContent = inputText;

    let taskButtons = document.createElement("div");

    let checkButton = document.createElement("button");
    checkButton.textContent = "check"

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "delete"
    
    deleteButton.addEventListener("click", deleteTask);
    checkButton.addEventListener("click", checkTask);

    taskButtons.appendChild(checkButton);
    taskButtons.appendChild(deleteButton);

    newTask.appendChild(taskText);
    newTask.appendChild(taskButtons);
    
    taskArea.appendChild(newTask);  
}

function deleteTask(event){
    let task = event.target.closest(".task");
    task.remove();
}

function checkTask(event){
    let task = event.target.closest(".task");
    if (task.style.textDecoration === "line-through"){
        task.style.textDecoration = "none";
    }
    else {
        task.style.textDecoration = "line-through";    
    }
}