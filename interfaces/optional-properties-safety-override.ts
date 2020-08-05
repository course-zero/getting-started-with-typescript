// define `Student` interface
interface Student {
    firstName: string;
    lastName: string;
    age?: number;
};

// define `ross` object
let ross: Student = {
    firstName: 'Ross',
    lastName: 'Geller',
    age: 32
};

// get age of a student after 10 years
let getAge = ( _student: Student ): number => {
    return ( _student.age as number ) + 10;
};

console.log( getAge( ross ) );