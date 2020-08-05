// define a simple object
let ross = {
    firstName: 'Ross',
    lastName: 'Geller'
};

// print initial value
console.log( '[init] ross =>', ross );

// update `ross` object
ross.firstName = 'Judy'; // update property value
console.log( '[before] ross =>', ross );

// freeze `ross` object
Object.freeze( ross );

// update `ross` object
ross.firstName = 'Jack'; // update property value
(ross as any).age = 30; // add new property
console.log( '[after] ross =>', ross );