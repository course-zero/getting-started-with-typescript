import version, { Person, getFullName, Student } from 'person';

// var version: string
console.log( version ); // 'v1.0.0'

// const ross: Person
const ross: Person = new Person( 'Ross', 'Geller', 1.85 );

// const className: string
const className = Person.className;

// const height: number
const height = ross.getHeightInCm(); // 185

// const rossName: string
const rossName = getFullName( ross ); // Ross Geller

// const monica: Student
const monica: Student = { firstName: 'Monica', lastName: 'Geller', marks: 68 };

// const monicaName: string
const monicaName = getFullName( monica ); // Monica Geller