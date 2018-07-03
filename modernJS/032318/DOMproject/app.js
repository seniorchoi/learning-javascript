//Define UI vars

const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//load all event listeners
loadEventListeners();

// load all event listeners
function loadEventListeners(){
    //Dom Load Event
    document.addEventListener('DOMContentLoaded', getTasks);

    //Add task event
    form.addEventListener('submit', addTask);
    //remove task
    taskList.addEventListener('click',removeTask);
    //clear tasks
    clearBtn.addEventListener('click',removeAll);
    //filter tasks
    filter.addEventListener('keyup',filterTasks)
    //
}

// Get Tasks from LS
function getTasks(){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];

    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task){
        //create li element
        const li = document.createElement('li');
        //Add class
        li.className = 'collection-item';
        //create textNode
        li.appendChild(document.createTextNode(task));
        //create new link element
        const link = document.createElement('a');
        //add class
        link.className = 'delete-item secondary-content';
        //add icon html
        link.innerHTML = '<i class="fa fa-remove"></i>';
        //append link to li
        li.appendChild(link);
        //append li to ul
        taskList.appendChild(li);

    })

}



//Add task
function addTask(e){
  if(taskInput.value === ''){
    alert('add a task');
  }

    //create li element
    const li = document.createElement('li');
    //Add class
    li.className = 'collection-item';
    //create textNode
    li.appendChild(document.createTextNode(taskInput.value));
    //create new link element
    const link = document.createElement('a');
    //add class
    link.className = 'delete-item secondary-content';
    //add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    //append link to li
    li.appendChild(link);

    //append li to ul
    taskList.appendChild(li);

    //Store in LS
    storeTaskInLocalStorage(taskInput.value);



    //clear input
    taskInput.value = '';


  e.preventDefault();
}

// Store Tasks
function storeTaskInLocalStorage(task){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];

    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }

    tasks.push(task);

    localStorage.setItem('tasks',JSON.stringify(tasks));


}

//LS counter
document.body.addEventListener('mousemove',refreshCount);
function refreshCount(){
    let cunt;
    cunt = localStorage.getItem ('tasks');
    cunt = cunt.split(',').length;
    console.log(cunt);
    document.querySelector('h5').innerText = cunt;

}

//LS display
document.querySelector('.btn').addEventListener('click',refreshNum);
function refreshNum(){
    let puss;
    puss = localStorage.getItem('tasks');
    document.querySelector('h5').innerText = puss;

}


//
// //delete button
// document.body.addEventListener('click',deleteIt);
//
// function deleteIt(e){
//
//   if(e.target.parentElement.classList.contains('delete-item')){
//     e.target.parentElement.parentElement.remove();
//   }
// }

//remove task

function removeTask(e){
  if(e.target.parentElement.classList.contains('delete-item')){
      e.target.parentElement.parentElement.remove();
  }

  // Remove Task from LS
    removeTaskFromLocalStorage(e.target.parentElement.parentElement);

}

// Remove Task from LS function
function removeTaskFromLocalStorage(taskItem){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];

    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }
    tasks.forEach(function(task,index){
        if(taskItem.textContent === task){
            task.splice(index,1);

        }

    });
    localStorage.setItem('tasks', JSON.stringify(tasks))
}



//remove all
function removeAll(){
    if(confirm('Are you sure?')){
      // taskList.innerHTML = '';

      //faster
        while(taskList.firstChild){
          taskList.removeChild(taskList.firstChild);
        }



      console.log('yo');

    }

}


//filter tasks
function filterTasks(e){
    const text = e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach(function(task){
      const item = task.firstChild.textContent;
      if(item.toLowerCase().indexOf(text) != -1){
        task.style.display = 'block';
      } else{
        task.style.display = 'none';
      }

    });
    console.log(text);


}


