// class with parameter properties
class Person {
    constructor( public name: string, private age: number ) {}
}

// create `ross` instance of type `Person`
const ross: Person = new Person( 'Ross Geller', 30 );
console.log( 'ross =>', ross );