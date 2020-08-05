// declare type alias
type ArithmeticFunction = ( a: number, b: number ) => number;

// declare `add` function
let add: ArithmeticFunction = ( a: number, b: number ): number => {
    return a + b;
}

// declare `subtract` function
let subtract: ArithmeticFunction = ( a: number, b: number ): number => {
    return a - b;
}

// declare `calculate` function
let getOperation = ( operation: string ): ArithmeticFunction => {
    return ( operation == 'add' ) ? add : subtract;
}

// get operation function
let addOperation: ArithmeticFunction = getOperation( 'add' );

// call operation function
console.log( addOperation( 1, 2 ) );