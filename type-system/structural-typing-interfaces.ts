interface Person {
    firstName: string;
    lastName: string;
}

interface Student {
    firstName: string;
    lastName: string;
    marks: number;
}

// print fullname of a `Person` object
function getFullName( p: Person ): string {
    return `${ p.firstName } ${ p.lastName }`;
}

var ross: Person = {
    firstName: 'Ross',
    lastName: 'Geller'
};

var monica: Student = {
    firstName: 'Monica',
    lastName: 'Geller',
    marks: 84,
};

console.log( 'Ross =>', getFullName( ross ) );
console.log( 'Monica =>', getFullName( monica ) );