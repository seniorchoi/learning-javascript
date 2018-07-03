var ojb = {};
ojb.foo = function() {
    alert(this.firstName);
};
ojb.firstName = "Fred";
ojb.foo();
ojb.lastName = ojb.firstName;
console.log(ojb.lastName);
