const ross = {
    firstName: 'Ross',
    lastName: 'Geller'
};

// update `firstName` property
ross.firstName = 'Jack';
console.log( ross.firstName ); // Jack

// override `ross` value
// Error: Cannot assign to 'ross' because it is a constant
ross = null;