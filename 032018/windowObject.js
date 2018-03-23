// // window methods/ objects/ properties
//
// console.log(123);
//
// //alert
// //alert('hello world');
//
//
// //prompt
// const input = prompt();
// alert(input);
//
//
// //confirm
// if(confirm('Are you sure')){
//
//     console.log('yes');
//
// } else {
//     console.log('no');
//
// }

let val;

//outer height and width
val = window.outerHeight;

val = window.outerWidth;


//inner height and width
val = window.innerHeight;

val = window.innerWidth;


// html = `
//     height is ${val}
// `;
// document.body.innerHTML = html;



//scroll
val = window.scrollY;



//location Object
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search;


//redirect
// window.location.href = 'http://google.com';

//reload
// window.location.reload();


//history of object
// window.history.go(-1);

val= window.navigator;
val= window.navigator.appName;

val= window.navigator.appVersion;

console.log(val);
