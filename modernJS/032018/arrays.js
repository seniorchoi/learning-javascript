//create some arrays

const numbers = [1,2,3,4,5,6];
const numbers2 = new Array(22,412,41,32,14);
const fruit = ['apple', 'banana', 'kiwi'];
const mixed = [22, 'hello', true, undefined, null, {a:1 , b:2}, new Date()];

let val;


//Get array length
val = numbers.length;

//check if array
val = Array.isArray(numbers);

//get single value
val = numbers[3];

//insert into array
numbers[3] = 100;


//find Index of value
val= numbers.indexOf(23);


//mutating arrays
numbers.push(300);
//add on end

//add on front
numbers.unshift(100);

//take off from end
numbers.pop();

//splice values
numbers.splice(1,1);

numbers.reverse();


val = numbers.concat(numbers2);


//sorting arrays
val = fruit.sort();

//sorting numbers
val = numbers.sort
(function (x,y)
    {return x-y
    }
);

//find
function under50(num){
    return num<50;
}

val = numbers.find(under50);
console.log(numbers);
console.log(val);