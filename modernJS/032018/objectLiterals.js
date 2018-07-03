const person = {
    firstName: 'Steve',
    lastName: 'Smith',
    age: 30,
    email: 'steve@aol.com',
    hobbies: ['music', 'sports'],
    address : {
        city: 'Miami',
        state: 'Florida',
    },
    getBirthYear: function(){
        return 2017 - this.age;

    }

}

let val;

val = person;

//get specific value
val = person.firstName;
val = person['firstName'];
val = person.age;
val = person.hobbies[1];
val = person.address.state;
val = person.address['city'];
val = person.getBirthYear();




console.log(val);


const people = [
    {name: 'John', age: 30},
    {name: 'Mike', age: 23},
    {name: 'sam', age: 2}

];

for(let i=0; i<people.length; i++){
    console.log(people[i].name + " " + people[i].age);

}

