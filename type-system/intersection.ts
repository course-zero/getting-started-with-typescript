interface Person {
    firstName: string;
    lastName: string;
}

interface Player {
    score: number;
}

interface Student {
    marks: number;
}

/*------*/

// get student info
let getStudent = ( p: Person, s: Student ): Person & Student => {
    return {
        firstName: p.firstName,
        lastName: p.lastName,
        marks: s.marks
    };
};

console.log( 'getStudent() =>', getStudent(
    { firstName:'Monica', lastName:'Geller' }, // Person
    { marks: 100 }, // Student
) );

/*------*/

// create a player info
let playerInfo: Person & Player = {
    firstName: 'Ross',
    lastName: 'Geller',
    score: 98
};

console.log( 'playerInfo =>', playerInfo );