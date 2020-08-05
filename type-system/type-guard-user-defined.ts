// type predicate function
let predicateString = (
    arg: number | string
): arg is string => {
    return typeof arg === 'string';
} 

// this function prints marks
let printMarks = ( marks: number | string ): void => {
    if( predicateString( marks ) ) {
        // (parameter) marks: string

        const value = marks.toUpperCase(); // legal
        console.log( `MARKS: ${ value } grade` );
    } else {
        // (parameter) marks: number

        const value = marks.toFixed( 0 ); // legal
        console.log( `MARKS: ${ value } out of 10.` );
    }
};

// print marks
printMarks( 'b' );
printMarks( 8.621 );