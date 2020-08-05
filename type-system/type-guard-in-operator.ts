// some interfaces
interface Student { name: string; marks: number; }
interface Player { name: string; score: number; }
interface Racer { name: string; points: number; }

// this function prints info
let printInfo = ( person: Student | Player | Racer ): void => {
    if( 'marks' in person ) {
        // (parameter) person: Student
        console.log(
            `${ person.name } received ${ person.marks } marks.`
        );
    } else if( 'score' in person ) {
        // (parameter) person: Player
        console.log(
            `${ person.name } scored ${ person.score }.`
        );
    } else {
        // (parameter) person: Racer
        console.log(
            `${ person.name } gained ${ person.points } points.`
        );
    }
};

printInfo( { name: 'Ross Geller', marks: 98 } );
printInfo( { name: 'Monica Geller', score: 100 } );
printInfo( { name: 'Rachel Green', points: 100 } );