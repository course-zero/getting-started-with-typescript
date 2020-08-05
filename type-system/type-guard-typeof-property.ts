interface Student {
    name: string;
    marks: number | string;
}

// this function prints info
let printInfo = ( person: Student ): void => {
    if( typeof person.marks === 'string' ) {
        // (property) Student.marks: string

        const name = person.name;
        const value = person.marks.toUpperCase();
        console.log( `${ name } -> ${ value } grade.` );
    } else {
        // (property) Student.marks: number

        const name = person.name;
        const value = person.marks.toFixed( 0 );
        console.log( `${ name } -> ${ value }/10.` );
    }
};

// print info
printInfo( { name: 'Ross Geller', marks: 'b' } );
printInfo( { name: 'Monica Geller', marks: 8.621 } );