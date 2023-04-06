//button
let TheInputButton = document.querySelector(".add-task input");
let ThePlusButton = document.querySelector(".add-task .plus");
let TheContianer = document.querySelector(".task-content");
let TheDeleteButtonOne = document.querySelector(".task-content .task-box .delete");
let TheCompleted = document.querySelector(".task-status .completed-task span");
let TheCount =document.querySelector(".task-status .task-count span")


//focus on input file
window.onload = function(){
TheInputButton.focus()
};

/// add task

ThePlusButton.onclick =function(){ 
if(TheInputButton.value ===''){
console.log(" no task input")
}else{

let TheOnTask = document.querySelector(".task-content .no-task-massge");
if(document.body.contains(TheOnTask)){
TheOnTask.remove();
}

let mspan = document.createElement("span");
let deleteElement = document.createElement("span");
let text = document.createTextNode(TheInputButton.value);
let deletetext = document.createTextNode("delete");

mspan.appendChild(text);
mspan.className = 'task-box';

deleteElement.appendChild(deletetext);
deleteElement.className = 'delete';

mspan.appendChild(deleteElement);

TheContianer.appendChild(mspan);
 TheInputButton.value ='';
 TheInputButton.focus()
//caculate
CalculateTask();
} 
};
//  delete task
document.addEventListener('click',function(e){

    if(e.target.className =='delete'){
        e.target.parentNode.remove();
         if(TheContianer.childElementCount == 0){
            createnotasks();
        }
    }
    if(e.target.classList.contains('task-box')){
        e.target.classList.toggle("finshed");

       
    }
     CalculateTask();
});



function createnotasks(){
    let MassgeTask = document.createElement("span");
    let TextMassge = document.createTextNode("No task here");
    MassgeTask.appendChild(TextMassge);
    MassgeTask.className = 'no-task-massge';
    TheContianer.appendChild(MassgeTask);
};


//function to calculate task
function CalculateTask(){
    
     TheCount.innerHTML = document.querySelectorAll('.task-content .task-box').length;

    TheCompleted.innerHTML = document.querySelectorAll('.task-content .finshed').length;
}
