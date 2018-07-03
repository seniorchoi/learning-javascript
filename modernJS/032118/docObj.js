// let val;
//
// val = document;
//
// val = document.all.length;
// val = document.body;
//
// val = document.domain;
//
// console.log(val);


// //document.getElementById()
//
// console.log(document.getElementById('task-title'));
//
//
// console.log(document.getElementById('task-title').id);
//
// // change styling
//
// document.getElementById('task-title').style.background = '#333';
// document.getElementById('task-title').style.color = '#fff';
// document.getElementById('task-title').style.padding = '5px';
//
//
// // change content
//
// document.getElementById('task-title').textContent = 'Task-list';
// const lol = document.getElementById('task-title');
//     console.log(lol);
//     lol.innerText = 'swag';
// document.getElementById('task-title').innerHTML = '<span style="color:red "> Task </span> ';
//
//
// const taskTitle = document.getElementById('task-title');
//
//
// taskTitle.innerText = 'swag';
// taskTitle.innerHTML = '<span style="color:white "> Task </span> ';
//

// document.querySelector()
//
// console.log(document.querySelector('#task-title'));
//
// console.log(document.querySelector('.card-title'));
//
//
// document.querySelector('li:last-child').style.color = 'red';
//
// document.querySelector('li:nth-child(3)').style.color = 'yellow';
//
// document.querySelector('li').style.color = 'blue';


// document.getElementByClassName

// const items = document.getElementsByClassName('collection-item');
//
//
// console.log(items);

// console.log(items[0]);
//
// items[1].style.color = 'red';
//
// items[3].innerText = 'blue';
//
// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
//
// console.log(listItems);


//document.getElementByTagName

// let lis = document.getElementsByTagName('li');
//
// lis = Array.from(lis);
//
//
// lis[0].style.color = 'blue';
//
//
// lis.forEach(function(li,index){
//     li.style.color = 'red';
//     console.log(li)
//
// });

// console.log(lis);


//document.querySelector.All

// const items = document.querySelectorAll('.collection-item');

const items = document.getElementsByClassName('collection-item');

const itemsOdd = document.querySelectorAll('.collection-item:nth-child(odd)');


const itemsEven = document.querySelectorAll('.collection-item:nth-child(even)');


console.log(items);





// itemsOdd.forEach(function(li){
//     li.style.color = 'red';
//
// });

for(let i=0; i<itemsEven.length ; i++){
    itemsEven[i].style.color = "white";


}

