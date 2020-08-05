interface Person {
    firstName: string;
    lastName: string;
}

// accept an argument of type `Person
let printPerson = ( person: Person ): void => {
    console.log( `Hello, ${ person.firstName } ${ person.lastName }.` );
};

// legal
let ross = { firstName: 'Ross', lastName: 'Geller', gender: 'Male' };
printPerson( ross );

// illegal
// Object literal may only specify known properties, and 'gender' does not exist in type 'Person'.
printPerson( { firstName: 'Ross', lastName: 'Geller', gender: 'Male' } );

// legal
let monica: Person;
let monana = { firstName: 'Monica', lastName: 'Geller', gender: 'Male' };
monica = monana;

// illegal
// Error: Object literal may only specify known properties, and 'gender' does not exist in type 'Person'.
let p: Person = { firstName: 'Ross', lastName: 'Geller', gender: 'Male' };