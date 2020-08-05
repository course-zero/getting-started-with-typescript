// declare a function (using function expression)
const sum = function( a: number, b: number ): number {
    return a + b;
}

// print sum of `1` and `2
console.log( 'sum( 1, 2 ) =>', sum( 1, 2 ) );

// operate on the return value
console.log( 'sum( 1, 2 ) + 7 =>', sum( 1, 2 ) + 7 );
console.log( 'sum( 1, 2 ).toFixed(2) =>', sum( 1, 2 ).toFixed( 2 ) );