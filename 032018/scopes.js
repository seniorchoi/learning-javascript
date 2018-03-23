//Global scope

var a = 1;
let b = 2;
const c = 3;

// function test(){
//
//     var a = 4;
//     let b = 5;
//     const c = 6;
//
//     console.log('function scope: ', a, b, c);
//
// }
// test();
//
// if(true){
//     //block scope
//
//     var a = 4;
//     let b = 5;
//     const c = 6;
//
//
//     console.log('if scope: ', a, b, c);
// }
//There can only be 1 var cuz it updates

for(let a = 0; a<10 ; a++){
    console.log(a)

}


console.log('Global scope: ', a, b, c);
