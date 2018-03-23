//var, let, const

var name = 'Jon Snow';
console.log(name);
var name = 'kalisi';
console.log(name);

//init var
var greeting;
console.log(greeting);
greeting = 'sup';
console.log(greeting);

//var include letter, number, _, $
//cannot start with number

//multiwords
/*
var firstName = 'Jon'; //Camelcase
var first_name = 'Sarah'; //underscore = php
var FirstName = 'Obama'; //pascal case
*/

//Let

let letname;
letname = 'Jon Snow';
console.log(letname);

//CONST
const cname = 'Jon Snow';
console.log(cname);
//name = 'kalisi';
//const cannot be reassigned
const cgreeting = 'yo';
console.log(cgreeting);


const person = {
    name: 'Jon',
    age: 13
};
person.name = 'kingOfDaNorf';

//console.log(person);

const numbers = [1,2,3,4,5];
numbers.push = (6);

console.log(numbers);

