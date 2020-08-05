// define `Person` interface
interface Person {
    firstName: string;
    lastName: string;
    age: number;
    getSalary: (base: number) => number;
};

// define an object of type `Person`
let ross: Person = {
    firstName: 'Ross',
    lastName: 'Geller',
    age: 32,
    getSalary: ( base: number ) => base * 12
};

// function that returns info of a `Person` object
let getPersonInfo = ( person: Person ): string => {
    return `Hello, ${ person.firstName } ${ person.lastName }.`;
};

// get person information
console.log( getPersonInfo( ross ) );