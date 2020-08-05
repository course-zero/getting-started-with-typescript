// declare a function
function sum( a: number, b: number ): number {
    return a + b;
}

// print sum of `1` and `2
console.log( 'sum( 1, 2 ) =>', sum( 1, 2 ) );

// operate on the return value
console.log( 'sum( 1, 2 ) + 7 =>', sum( 1, 2 ) + 7 );

// invalid or unsafe operations
console.log( 'sum( 1 ) =>', sum( 1 ) );
console.log( 'sum( "1", 2 ) =>', sum( "1", 2 ) );
console.log( 'sum( "1", 2 ) + 7 =>', sum( "1", 2 ) + 7 );
console.log( 'sum( "1", 2 ).split("") =>', sum( 1, 2 ).split("") );
console.log( 'sum( undefined, 2 ) =>', sum( undefined, 2 ) );
console.log( 'sum() =>', sum() );
console.log( 'sum( 1, 2, 3 ) =>', sum( 1, 2, 3 ) );
console.log( 'sum( 1, 2, 3 ) + 7 =>', sum( 1, 2, 3 ) + 7 );