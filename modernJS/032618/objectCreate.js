const personPrototypes = {
    greeting: function(){
        return `Hello there ${this.firstName} ${this.lastName}`;
    },
    getsMarried: function(newLastName){
        this.lastName= newLastName;
    }
};

const mary = Object.create(personPrototypes);
mary.firstName = 'Mary';
mary.lastName = 'Williams';
mary.age = 30;


// mary.getsMarried('Smith');
// console.log(mary.greeting());

const brad = Object.create(personPrototypes,{
    firstName : {value: 'Bbrad'},
    lastName : {value: 'Lee'},
    age : {value: 36}
});

const john = {
    firstName : 'John',
    lastName : 'Doe',
    age: 30
}


// brad.prototype.getsMarried();
console.log(john);
console.log(brad);
