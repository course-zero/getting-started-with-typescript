interface Person {
    name: string;
    getName(): string;
}

interface Student extends Person {
    marks: number;
}

// print name of a `Person` object
const printName = ( person: Person ) => person.getName();

// instance of `Person`
let ross: Person = {
    name: 'Ross Geller',
    getName() { return this.name; }
};

// instance of `Student`
let monica: Student = {
    name: 'Monica Geller',
    marks: 84,
    getName() { return this.name; }
};

// plain JavaScript object
let jack = {
    name: 'Jack Geller',
    age: 60,
    getName() { return this.name; }
};

// print full-names of the objects
console.log( printName( ross ) );
console.log( printName( monica ) );
console.log( printName( jack ) );