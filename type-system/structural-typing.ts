class Person {
    constructor(
        public firstName: string,
        public lastName: string
    ) {}
}

class Student {
    constructor(
        public firstName: string,
        public lastName: string,
        public marks: number
    ) {}
}

// print fullname of a `Person` object
function getFullName( p: Person ): string {
    return `${ p.firstName } ${ p.lastName }`;
}

var ross = new Person( 'Ross', 'Geller' );
var monica = new Student( 'Monica', 'Geller', 84 );

console.log( 'Ross =>', getFullName( ross ) );
console.log( 'Monica =>', getFullName( monica ) );