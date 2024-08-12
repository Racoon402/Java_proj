let taskInput = document.getElementById("task-input");
let addButton = document.getElementById("add-button");
let tabs = document.querySelectorAll(".task-tabs div");
let taskList = [];
let filterList = []
let mode = "all";

addButton.addEventListener("click", addTask);

for(let i=1; i<tabs.length; i++){
    tabs[i].addEventListener("click", function(event){
        filter(event)
    })
}

function addTask(){
    let task = {
        id : randomIDGenerate(),
        taskContent : taskInput.value,
        isComplete : false
    }
    taskList.push(task);
    render();
}

function render(){
    let list = []
    if(mode === "all"){
        list = taskList;
    }
    else{
        list = filterList;
    }

    let resultHTML = '';
    for (let i=0; i<list.length; i++){
        if(list[i].isComplete){
            resultHTML += `<div class="task">
                    <div class="task_done">${list[i].taskContent}</div>
                    <div>
                        <button id="check-button" onclick="toggleComplete('${list[i].id}')">check</button>
                        <button id="delete-button" onclick="deleteTask('${list[i].id}')">delete</button>     
                    </div>
                </div>`;
        }
        else{
            resultHTML += `<div class="task">
                    <div>${list[i].taskContent}</div>
                    <div>
                        <button id="check-button" onclick="toggleComplete('${list[i].id}')">check</button>
                        <button id="delete-button" onclick="deleteTask('${list[i].id}')">delete</button>    
                    </div>
                </div>`;
        }
    }
    
    document.getElementById("task-board").innerHTML = resultHTML;
}

function toggleComplete(id){
    for(let i=0; i<taskList.length; i++){
        if(taskList[i].id == id){
            taskList[i].isComplete = !taskList[i].isComplete;
            break;
        }
    }
    render();
}

function deleteTask(id){
    for(let i=0; i<taskList.length; i++){
        if(taskList[i].id == id){
            taskList.splice(i,1);
            break;
        }
    }
    render();
}

function filter(event){
    filterList = [];
    mode = event.target.id
    if(mode === "all"){
        render();
    }
    else if(mode === "ongoing"){
        for(let i=0; i<taskList.length; i++){
            if(!taskList[i].isComplete){
                filterList.push(taskList[i]);
            }
        }
        render();
    }
    else if(mode === "done"){
        for(let i=0; i<taskList.length; i++){
            if(taskList[i].isComplete){
                filterList.push(taskList[i]);
            }
        }
        console.log(filterList);
        render();
    }
}

function randomIDGenerate(){
    return '_' + Math.random().toString(36).substring(2, 9);
}