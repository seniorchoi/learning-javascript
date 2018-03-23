//Define UI

const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//load all event listeners
loadEventListeners();

// load all event listeners
function loadEventListeners(){
  //Add task event
    form.addEventListener('submit', addTask);

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

    //clear input
    taskInput.value = '';


  e.preventDefault();
}




//delete button
document.body.addEventListener('click',deleteIt);

function deleteIt(e){

  if(e.target.parentElement.classList.contains('delete-item')){
    e.target.parentElement.parentElement.remove();
  }
}







