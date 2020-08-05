// define `Person` interface
interface Person {
    firstName: string;
    lastName: string;
}

// define `Player` interface
interface Player {
    score: number;
}

// `Student` interface inherits `Person` and `Player`
interface Student extends Person, Player {
    rollNo: number;
}

// create `ross` object of type `Student`
let ross: Student = {
    firstName: 'Ross',
    lastName: 'Geller',
    score: 85,
    rollNo: 100,
};

// log values
console.log( 'ross =>', ross );