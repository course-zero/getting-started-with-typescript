// define `Student` interface
interface Student {
    firstName: string;
    lastName: string;
    age?: number;
    readonly getSalary: (base: number) => number;
};

// define `ross` object
let ross: Student = {
    firstName: 'Ross',
    lastName: 'Geller',
    getSalary: ( base: number ) => base * 12
};

