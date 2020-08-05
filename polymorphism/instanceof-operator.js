class Person {
    constructor( firstName, lastName ){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() {
        return `${ this.firstName } ${ this.lastName }`;
    }
}

// class `Student` inherits `Person`
class Student extends Person {
    constructor( firstName, lastName, marks ){
        super( firstName, lastName );
        this.marks = marks;
    }
}

// get full-name of a `Person` object
const printName = ( person ) => {
    return person instanceof Person ? 
           person.getFullName(): 'Oops! Not a Person!';
};

// objects of the shape of `Person`
let ross = new Person( 'Ross', 'Geller' );
let monica = new Student( 'Monica', 'Geller', 86 );
let jack = {
    firstName: 'Jack',
    lastName: 'Geller',
    getFullName: () => null,
};

// get full-names of the objects
console.log( printName( ross ) );
console.log( printName( monica ) );
console.log( printName( jack ) );