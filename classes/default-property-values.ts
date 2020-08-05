class Person {
    firstName: string;
    lastName: string;
    age: number = 28;
    type = 'person';

    constructor( firstName: string, lastName: string, age?: number ) {
        this.firstName = firstName;
        this.lastName = lastName;
        
        // override `age` value if provided by the user
        if( age !== undefined ) {
            this.age = age;
        }
    }
}

// create an instance of `Person` class
const ross: Person = new Person( 'Ross', 'Geller' );
console.log( 'ross =>', ross );