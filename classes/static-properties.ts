class Person {
    // statc property
    static type: string = 'person';

    // instance properties
    firstName: string;
    lastName: string;

    // constructor
    constructor( firstName: string, lastName: string ) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    // static method
    static describe(): string {
        return `A class of type ${ this.type }.`;
    }

    // instance method
    getFullName(): string {
        return `${ this.firstName } ${ this.lastName }`;
    }
}

// create an instance of `Person` class
const ross: Person = new Person( 'Ross', 'Geller' );

console.log( 'Person.type =>', Person.type );
console.log( 'ross.type =>', (ross as any).type );
console.log( 'Person.firstName =>', (Person as any).firstName );
console.log( 'Person.describe() =>', Person.describe() );