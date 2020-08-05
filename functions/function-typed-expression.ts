// declare a variable of type function
let sum: ( a: number, b: number ) => number;

// assign a (function) value to `sum`
sum = ( a: number, b: number ): number => a + b; // redundant
sum = ( a, b ) => a + b;

// print sum of `1` and `2
console.log( 'sum( 1, 2 ) =>', sum( 1, 2 ) );

// operate on the return value
console.log( 'sum( 1, 2 ) + 7 =>', sum( 1, 2 ) + 7 );
console.log( 'sum( 1, 2 ).toFixed(2) =>', sum( 1, 2 ).toFixed( 2 ) );