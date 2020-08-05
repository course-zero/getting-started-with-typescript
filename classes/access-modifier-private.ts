class Person {
    private name: string;
    public age: number; // `public` is redundant

    constructor( name: string, age: number ) {
        this.name = name;
        this.age = age;
    }

    getNameParts(): string[] {
        return this.name.split( ' ' );
    }

    private getAge(): number {
        return this.age;
    }
}

// create `ross` instance of type `Person`
const ross: Person = new Person( 'Ross Geller', 30 );

// legal
console.log( ross.age );
console.log( ross.getNameParts() );

// Error: Property 'name' is private and only accessible
// within class 'Person'.
console.log( ross.name );

// Error: Property 'getAge' is private and only accessible
// within class 'Person'.
console.log( ross.getAge() );