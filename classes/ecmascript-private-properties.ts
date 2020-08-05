class Person {
    // TypeScript private
    private name: string;
    
    // TypeScript and JavaScript private
    #dob: Date;

    constructor( name: string, dob: Date ){
        this.name = name;
        this.#dob = dob;
    }

    getBirthYear(): number {
        return this.#dob.getFullYear();
    }
}

// create `ross` instance of type `Person`
const ross: Person = new Person(
    'Ross Geller', new Date( '10-14-1992' )
);

// Error: Property '#dob' is not accessible outside class 'Person' because it has a private identifier.
console.log( ross.#dob );