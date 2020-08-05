// `Student` interface
interface Student {
    type: 'student'; // discriminant
    name: string;
    marks: number;
}

// `Player` interface
interface Player {
    type: 'player'; // discriminant
    name: string;
    score: number;
}

// this function prints info
let printInfo = ( person: Student | Player ): void => {
    switch( person.type ) {
        case 'student': {
            // (parameter) person: Student
            return console.log(
                `${ person.name } received ${ person.marks } marks.`
            );
        }
        case 'player': {
            // (parameter) person: Player
            return console.log(
                `${ person.name } scored ${ person.score }.`
            );
        }
    }
};

// log info of the `Student` and `Player` objects
printInfo( { type: 'student', name: 'Ross Geller', marks: 98 } );
printInfo( { type: 'player', name: 'Monica Geller', score: 100 } );