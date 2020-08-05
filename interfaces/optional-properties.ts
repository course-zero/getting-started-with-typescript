// define `Student` interface
interface Student {
    firstName: string;
    lastName: string;
    age?: number;
    getSalary: (base: number) => number;
};

// create `ross` object of type `Student`
let ross: Student = {
    firstName: 'Ross',
    lastName: 'Geller',
    getSalary: ( base: number ) => base * 12
};

// define `monica` object
let monica: Student = {
    firstName: 'Monica',
    lastName: 'Geller',
    age: '21', // Error
    getSalary: ( base: number ) => base * 12
};