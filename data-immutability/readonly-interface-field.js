// create `ross` object of type `Person`
var ross = {
    firstName: 'Ross',
    lastName: 'Geller'
};
// update `lastName` property
ross.lastName = 'Tribbiani';
// update `firstName` property
// Error: Cannot assign to 'firstName' because it is a read-only property.
ross.firstName = 'Joey';
