function concatenate( a: number, b: number ): number;
function concatenate( a: string, b: string ): string;
function concatenate( a: string, b: number ): null;
function concatenate( a: number, b: string ): null;
function concatenate( a: any, b: any ): any {
    if( typeof a === 'string' && typeof b === 'string' ) {
        return `${ a }-${ b }`;
    } else if ( typeof a === 'number' && typeof b === 'number' ) {
        return a + b;
    } else {
        return null;
    }
}

// when all arguments are `string`
console.log( concatenate( 'John', 'Doe' ).toUpperCase() );

// when all arguments are `number`
console.log( concatenate( 1.5, 2.12 ).toFixed( 1 ) );

// check for mixed arguments types
console.log( concatenate( 1.5, '2.12' ).toFixed( 1 ) );