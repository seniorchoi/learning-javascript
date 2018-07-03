// //event bubbling
//
// document.querySelector('.card-title').addEventListener('click',
//     function () {
//         console.log('card title');
//     }
//     );
//
// document.querySelector('.card').addEventListener('click',
//     function () {
//         console.log('card');
//     }
// );

// Event delegation :useful when you add something to list that was not there

// const delItem = document.querySelector('.delete-item');
//
// delItem.addEventListener('click',deleteItem);

document.body.addEventListener('click', deleteItem);

function deleteItem(e){
//     if(e.target.parentElement.className === 'delete-item secondary-content'){
//
//         console.log('delete-item');
//     }
// }

    //works even if className is not perfect match
    if(e.target.parentElement.classList.contains('delete-item')){
        console.log('delete-item');
        e.target.parentElement.parentElement.remove();

    }
}







