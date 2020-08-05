// declare a variadic function
let printThings = ( name: string, ...things: any[] ) => {
    return `${ name } likes ${ things.join( ', ' ) }.`;
};

// define `things` array
let things: any[] = [ 'Car', 123, true ];

// works but not idead
console.log( printThings( 'Ross', things[0], things[1] ) );

// ideal approach using `spread` operator
console.log( printThings( 'Ross', ...things ) );