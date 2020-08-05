// declare `_add` and `_subtract` function variables
let _add: (a: string, b: string) => string;
let _subtract: (a: number, b: number) => number;

// assign function values
_add = ( a: string, b: string ): string => a + b;
_subtract = ( a: number, b: number ): number => a - b;

// declare `getOperation` function
let getOperation = ( operation: string ): (a: number, b: number) => number => {
    if( operation === 'add' ) {
        return _add;
    } else {
        return _subtract;
    }
}

// perform `add` operation
console.log( getOperation( 'add' )( 1, "10" ) );