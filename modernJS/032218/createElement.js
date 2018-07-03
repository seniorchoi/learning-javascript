// //create element
//
// const li = document.createElement('li');
//
// //add class
// li.className = 'collection-item';
//
// //add id
// li.id = 'new-item';
//
// //add attribute
// li.setAttribute('title', 'New Item');
//
// //create text node and append
// li.appendChild(document.createTextNode('Hello world'));
//
// // creat new link element
// const link = document.createElement('a');
// //Add classes
// link.className = 'delete-item secondary-content';
// //add icon html
// link.innerHTML = '<i class="fa fa-remove"></i>';
// //append link to li
// li.appendChild(link);
//
//
//
// //append li as child ul
// document.querySelector('ul.collection').appendChild(li);
//
//
//
// console.log(li);


//--------------------------------------------
//
//
// //Replace element
//
// //create element
// const newHeading = document.createElement('h2');
// //add id
// newHeading.id = 'task-title';
// //New text node
// newHeading.appendChild(document.createTextNode('Task List'));
//
// //Get old heading
// const oldHeading = document.getElementById('task-title');
//
// //parent
// const cardAction = document.querySelector('.card-action');
//
// //replace
// cardAction.replaceChild(newHeading, oldHeading);
//
//
// //Remove element
// const lis = document.querySelectorAll('li');
// const list = document.querySelector('ul');
//
//
// //Remove list item
// lis[0].remove();


//Classes and ATTR
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];


let val;


//classes
val = link.className;
val = link.classList;
val = link.classList[0];
link.classList.add('test');
link.classList.remove('test');
val= link;


//Attributes
val = link.getAttribute('href');
val = link.setAttribute('href', 'http://google.com');
val = link.setAttribute('href', 'http://google.com');


console.log(val);






