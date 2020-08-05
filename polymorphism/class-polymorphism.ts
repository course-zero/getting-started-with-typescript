class Person {
    constructor(
        public firstName: string,
        public lastName: string
    ){}

    getFullName(): string {
        return `${ this.firstName } ${ this.lastName }`;
    }
}

class Student extends Person {
    constructor(
        firstName: string,
        lastName: string,
        public marks: number
    ){ super( firstName, lastName ); }
}

// print name of a `Person` object
const printName = ( person: Person ) => {
    return person.getFullName();
};

// objects of the shape of `Person`
let ross = new Person( 'Ross', 'Geller' );
let monica = new Student( 'Monica', 'Geller', 86 );
let judy = { firstName: 'Judy', lastName: 'Geller' };
let jack = {
    firstName: 'Jack',
    lastName: 'Geller',
    getFullName(): string {
        return `${ this.firstName } ${ this.lastName }`;
    }
};

// print full-names of the objects
console.log( printName( ross ) );
console.log( printName( monica ) );
console.log( printName( jack ) ); // legal

// Error: Argument of type '{ firstName: string; lastName: string; }' is not assignable to parameter of type 'Person'.
console.log( printName( judy ) );