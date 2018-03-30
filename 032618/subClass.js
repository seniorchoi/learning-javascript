class Person{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;

    }
    greeting(){
        return `hello there ${this.firstName} ${this.lastName}`;

    }
}

class Customer extends Person {
    constructor(firstName, lastName, phone, membership){
        super(firstName, lastName);

        this.phone = phone;
        this.memebership = membership;

    }
    static getMembershipCost(){
        return 500;
    }

}

const john = new Customer('John', 'Doe', '555-555-5555', 'VIP');

console.log(Customer.getMembershipCost());