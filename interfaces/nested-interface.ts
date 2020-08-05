// define `Person` interface
interface Person {
    firstName: string;
    lastName: string;
}

// define `Student` interface
interface Student {
    info: Person;
    rollNo: number;
}

// define `ross` object of type `Student`
let ross: Student = {
    info: {
        firstName: 'Ross',
        lastName: 'Geller',
    },
    rollNo: 100
};

// log values
console.log( 'ross =>', ross );