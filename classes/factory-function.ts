// `Person` as a type represents instance side of the class
class Person {
    constructor(
        public firstName: string,
        public lastName: string
    ) {}

    getFullName(): string {
        return `${ this.firstName } ${ this.lastName }`;
    }

    // static fields
    static delimiter = ' ';
    static splitName( name: string, separator: string ): string[] {
        return name.split( separator );
    }
}

// this interface represents static side of the `Person` class
interface PersonInterface{
    new ( firstName: string, lastName: string ): Person; // constructor
    delimiter: string; // static property
    splitName( name: string, separator: string ): string[]; // static method
}

// factory function
let createPerson = function( ctor: PersonInterface, name: string ): Person {
    let [ firstName, lastName ] = ctor.splitName( name, ctor.delimiter );
    return new ctor( firstName, lastName );
}

// create an instance of `Person` class
const ross: Person = createPerson( Person, 'Ross Geller' );

// print full-name of `ross`
console.log( ross.getFullName() );