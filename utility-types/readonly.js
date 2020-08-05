// changes `firstName` and `lastName`
var changeName = function (person, firstName, lastName) {
    // Error: Cannot assign to 'firstName' because it is a read-only property.
    person.firstName = firstName;
    // Error: Cannot assign to 'lastName' because it is a read-only property.
    person.lastName = lastName;
    return person;
};
// create a `Person` object
var phoebe = {
    firstName: 'Phoebe',
    lastName: 'Buffay'
};
// change `phoebe` property values
changeName(phoebe, 'Regina', 'Phalange');
