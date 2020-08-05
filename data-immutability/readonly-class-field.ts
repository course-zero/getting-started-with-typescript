class Person {
    readonly firstName: string;
    public lastName: string;

    constructor( firstName: string, lastName: string ) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

// create `ross` object of type `Person`
let ross: Person = new Person( 'Ross', 'Geller' );

// update `firstName` property
// Error: Cannot assign to 'firstName' because it is a read-only property.
ross.firstName = 'Jack';