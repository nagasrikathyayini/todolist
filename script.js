function addTask(){
    var taskInput =document.getElementById("taskInput");
    var taskText = taskInput.value.trim();
    if (taskText === ""){
            alert("Enter the task");
            return;
    }
    var taskList =document.getElementById("taskList");
    var li = document.createElement("li");
    li.innerText = taskText;
    li.className  = "change"
    li.addEventListener("click",function(){
        this.classList.toggle("Completed");
    });
    li.addEventListener("dblclick",function(){
           this.remove();
    });
    taskList.appendChild(li);
    taskInput.value = "";
}

