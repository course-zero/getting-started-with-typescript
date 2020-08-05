// `Student` interface
interface Student {
    name: string;
    marks: number;
}

// `Student` interface
interface Player {
    name: string;
    score: number;
}

// this function prints info
let printInfo = ( person: Student | Player ): void => {
    // Error: Property 'marks' does not exist on type 'Student | Player'.
    // Error:  Property 'marks' does not exist on type 'Player'.
    console.log( `${ person.name } received ${ person.marks } marks.` );
};