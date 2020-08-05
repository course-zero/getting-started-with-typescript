class Person {
    constructor( public name: string ) {}

    getName(): string {
        return this.name;
    }
}

// create `ross` instance of type `Person`
const ross: Person = new Person( 'Ross Geller' );
console.log( 'ross.getName() =>', ross.getName() );

// save `ross.getName` in `getNameFn`
let getNameFn = ross.getName;
console.log( 'ross.name =>', ross.name );
console.log( 'getNameFn() =>', getNameFn() );