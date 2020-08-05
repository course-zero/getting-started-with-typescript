interface Person {
    fn: string; ln: string;
}

interface Student {
    fn: string; ln: string; age: number;
}

interface Teacher {
    name: string; age: number;
}

// a generic function with constraints
function getFullName<T extends Person>( p: T ): string {
    return `${ p.fn } ${ p.ln }`;
}

// create some objects
var ross: Person = { fn: 'Ross', ln: 'Geller' };
var monica: Student = { fn: 'Mon', ln: 'Geller', age: 28 };
var rachel = { fn: 'Rachel', ln: 'Green', marks: 42 };
var joey: Teacher = { name: 'Joey Tribbiani', age: 32 };

console.log( 'Ross =>', getFullName( ross ) );
console.log( 'Monica =>', getFullName( monica ) );
console.log( 'Rachel =>', getFullName( rachel ) );

// Error: Argument of type 'Teacher' is not assignable to parameter of type 'Person'.
// Type 'Teacher' is missing the following properties from type 'Person': firstName, lastName.
console.log( 'Joey =>', getFullName( joey ) );