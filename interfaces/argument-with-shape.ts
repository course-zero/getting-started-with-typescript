// define a plain object
let ross = {
    firstName: 'Ross',
    lastName: 'Geller',
    age: 32,
    getSalary: ( base: number ) => base * 12
};

// function that accepts object as an argument
let getPersonInfo = ( arg: {
    firstName: string;
    lastName: string;
    age: number;
    getSalary: (base: number) => number;
} ): string => {
    return `Hello, ${ arg.firstName } ${ arg.lastName }.`;
};

// get person information
console.log( getPersonInfo( ross ) );