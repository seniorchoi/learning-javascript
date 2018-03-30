//Object.prototype
//Person.prototype

//Person Constructor
function Person(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);

}



// Calculate age
Person.prototype.calculateAge = function(){
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1979);

};

// Get full name
Person.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`
};

// Gets married
Person.prototype.getsMarried = function(newLastName){
    this.lastName = newLastName;

};



const john = new Person('John', 'Doe', '5-3-90');
const mary = new Person('Mary', 'Jane', '3-5-09');


console.log(mary);
mary.getsMarried('Smith');

