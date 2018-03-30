// Person
function Person(leFirstName, leLastName){
    this.firstName = leFirstName;
    this.lastName = leLastName;

}



// Greeting

Person.prototype.greeting = function(){
    return `Hello there ${this.firstName} ${this.lastName}`;

};
Person.prototype.fucking = function(){
    return `${this.firstName} fucks`
}

const person1 = new Person('John', 'Doe');


// console.log(person1);

// Customer constructor
function Customer(firstName, lastName, phone, membership){
    Person.call(this, firstName,lastName);
    this.phone = phone;
    this.memebership = membership;

}

// Inherit the Person prototype methods
Customer.prototype = Object.create(Person.prototype);

// // Make customer.prototype return Customer()
Customer.prototype.constructor = Customer;


// Create customer
const customer1 = new Customer('Tom', 'Smith', '555-555-5555', 'Standard');


// // Customer greeting
Customer.prototype.greeting = function(){
    return `Hello there ${this.firstName} ${this.lastName} welcome to our company`
};


console.log(customer1);
console.log(person1);

console.log(customer1.greeting());

console.log(customer1.fucking());
// //
// console.log(person1.greeting());