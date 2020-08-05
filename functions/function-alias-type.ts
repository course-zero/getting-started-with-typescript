// declare `ArithmeticFunc` type-alias
type ArithmeticFunc = (a: number, b: number) => number;

// assign function values
const _add: ArithmeticFunc = ( a: number, b: number ): number => a + b;
const _subtract: ArithmeticFunc = ( a: number, b: number ): number => a - b;

// declare `getOperation` function
let getOperation = ( operation: string ): ArithmeticFunc => {
    if( operation === 'add' ) {
        return _add;
    } else {
        return _subtract;
    }
}

// perform `add` operation
console.log( getOperation( 'add' )( 1, "10" ) );