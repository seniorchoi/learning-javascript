// String

const name1 = 'Jeff';
const name2 = new String('Jeff');
//new String() is an object

// Number
const num1 = 5;
const num2 = new Number(5);

// Function
const getSum = function(x,y){
    return x+y;

};

const getSum2 = new Function('x','y', 'return x+y');

// Object
const john = {name: 'John'};
const john2 = new Object({name: "John"});

// Arrays
const arr1 = [1,2,3,4];
const arr2 = new Array(1,2,3,4);

// Regular Expressions
const reg1 = /\w+/;
const reg2 = new RegExp('\\w+');

console.log(arr2);

