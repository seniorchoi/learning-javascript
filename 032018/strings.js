const firstName = 'Jonnathan';
const lastName = 'Snow';
const age = '23';
const str = 'hello there my name is 승호';

let val;

val = firstName+lastName;

//concatenation
val = firstName+' '+lastName;


//append
val = '최';
val += '승호';

val = 'Hello my name is '+firstName + ' ' + lastName + ' and I am ' + age + ' and it is bere nice to meet yall';


//escaping

val = "That's awesome, I can't wait";
val = 'that\'s awesome, I can\'t wait';
// the \' takes the power of ' away


//length
val = firstName.length;

//concat()
val = firstName.concat(' ', lastName);


// change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[2];


//indexOf()
val = firstName.indexOf('o');

//substring()
val = firstName.substring(0,4);


//slice()
val = firstName.slice(0,4);
val = firstName.slice(-4);
//takes from the back

//split()
val = str.split(' ');
//seperates and makes arrays based on something


//replace()
val = str.replace('name', 'glorious name');


//includes()
val = str.includes('hello');
//checks whether included or not

console.log(val);



