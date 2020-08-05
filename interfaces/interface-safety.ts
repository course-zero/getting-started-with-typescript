// define `Student` interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    getSalary: (base: number) => number;
};

// define an object of type `Student`
let student: Student = {
    firstName: 'Ross',
    lastName: 'Geller',
    age: 32,
    getSalary: ( base: number ) => base * 12
};

// function that prints student info
let printStudent = ( _student: Student ): void => {
    // property doesn't exist
    console.log( _student.name );

    // arithmetic operation with `string` value
    console.log( 100 - _student.firstName );
};

// print student info
printStudent( student );