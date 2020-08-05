// define `Person` interface
interface Person {
    firstName: string;
    lastName: string;
}

// `Student` interface inherits `Person`
interface Student extends Person {
    rollNo: number;
}

// define `monica` of type `Person`
let monica: Person = {
    firstName: 'Monica',
    lastName: 'Geller'
};

// define `ross` object of type `Student`
let ross: Student = {
    firstName: 'Ross',
    lastName: 'Geller',
    rollNo: 100
};

// log values
console.log( 'monica =>', monica );
console.log( 'Ross =>', ross );