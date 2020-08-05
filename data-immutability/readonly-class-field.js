var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return Person;
}());
// create `ross` object of type `Person`
var ross = new Person('Ross', 'Geller');
// update `firstName` property
// Error: Cannot assign to 'firstName' because it is a read-only property.
ross.firstName = 'Jack';
