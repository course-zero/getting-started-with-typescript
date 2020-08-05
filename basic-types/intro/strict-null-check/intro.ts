// variable declarations
let person: string;
let age: number = null;
let car: string = 'Mercedes';
let canDrive: boolean = false;
console.log( `before => (person:${person}), (age:${age}), (car:${car}), (canDrive:${canDrive})` );

// override values
person = 'Ross Geller';
age = 21;
car = undefined;
canDrive = null;
console.log( `before => (person:${person}), (age:${age}), (car:${car}), (canDrive:${canDrive})` );