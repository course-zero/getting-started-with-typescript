// create constructor function type alias
type Ctor<U> = new ( ...args: any[] ) => U;

// factory function
function simpleFactory<T>(
    ctor: Ctor<T>,
    ...args: any[]
): T {
    return new ctor( ...args );
}

class Person {
    constructor(
        public firstName: string,
        public lastName: string
    ){}
}

class Teacher {
    constructor(
        public firstName: string,
        public lastName: string,
        public age: number
    ){}
}

// var ross: Person
var ross = simpleFactory( Person, 'Ross', 'Geller' );
console.log( 'ross =>', ross );

// var monica: Teacher
var monica = simpleFactory( Teacher, 'Mon', 'Geller', 31 );
console.log( 'monica =>', monica );