// declare `_add` and `_subtract` function variables
let _add: (a: number, b: number) => number;
let _subtract: (a: number, b: number) => number;

// assign function values
_add = ( a: number, b: number ): number => a + b;
_subtract = ( a: number, b: number ): number => a - b;

// declare `getOperation` function
let getOperation = ( operation: string ): Function => {
    if( operation === 'add' ) {
        return _add;
    } else {
        return _subtract;
    }
}

// perform `add` operation
console.log( getOperation( 'add' )( 1, "10" ) );

// is a function instance of `Function`
console.log( getOperation( 'add' ) instanceof Function );