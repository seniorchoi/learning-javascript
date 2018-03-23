// document.querySelector('.clear-tasks').addEventListener('click',
//     function(e)
//     {
//         console.log('Hello world');
//
//         // e.preventDefault();
//     }
//     );
//
// document.querySelector('.clear-tasks').addEventListener('click',onClick);
//
// function onClick(e){
//     // console.log('Hello world');
//
//     let val;
//
//     val = e.target;
//     val = e.target.className;
//     e.target.innerText = 'suck my intelligence';
//
//     //event type
//     val = e.type;
//
//     //time stamp
//     val = e.timeStamp;
//
//
//     console.log(val);
//
// }
//
// const clearBtn = document.querySelector('.clear-tasks');
// const card = document.querySelector('.card');
// const headding = document.querySelector('h5');
//
// //Event listener
// // clearBtn.addEventListener('click',runEvent);
//
//
// // clearBtn.addEventListener('mouseenter',runEvent);
//
// card.addEventListener('mousemove',runEvent);
//
//
//
// //Event handler
// function runEvent(e){
//     console.log(`EVENT TYPE: ${e.type}`);
//     headding.textContent = `x: ${e.offsetX} y: ${e.offsetY}`;
//
//     document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 0)`;
// }

const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');

//Clear input
taskInput.value = '';

//keydown
// taskInput.addEventListener('keydown', runEvent);

//keyup
taskInput.addEventListener('keyup', runEvent);


// form.addEventListener('submit', runEvent);

function runEvent(e){
    console.log(`EVENT TYPE: ${e.type}`);
    console.log(e.target.value);
    heading.innerText = e.target.value

    //get input value
    // console.log(taskInput)

}






