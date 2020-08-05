// define a `Person` class
class Person {
    firstName: string;
    lastName: string;
    age: number;

    constructor( firstName: string, lastName: string, age: number ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    getFullName(): string {
        return `${ this.firstName } ${ this.lastName }`;
    }
}

// create an instance of `Person` class
const ross: Person = new Person( 'Ross', 'Geller', 30 );

// print full-name of `ross`
console.log( 'ross.getFullName() =>', ross.getFullName() );