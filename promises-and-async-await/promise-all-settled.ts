// a function that return a delayed promise
const getPromise = (
    value: number, delay: number, fail: boolean
): Promise<number> => {
    return new Promise<number>( ( resolve, reject ) => {
        setTimeout(
            () => fail ? reject( value ) : resolve( value ),
            delay
        );
    } );
};

/* const allPromise: Promise[
    PromiseSettledResult<number>,
    PromiseSettledResult<number>,
    PromiseSettledResult<number>
]> */
const allPromise = Promise.allSettled( [
    getPromise( 0, 0, false ),    // 0s
    getPromise( 1, 2000, false ), // 2s
    getPromise( 2, 1000, true ),  // 1s (rejects)
] );

// listen to `allPromise` resolution
console.time( 'settled-in' );
allPromise.then( ( value ) => {
    console.log( 'Resolved:', value );
    
    value.forEach( result => {
        switch( result.status ) {
            case 'fulfilled': {
                // result: PromiseFulfilledResult<number>
                console.log( 'success =>', result.value );
                break;
            }
            case 'rejected': {
                // result: PromiseRejectedResult
                console.log( 'error =>', result.reason );
                break;
            }
        }
    } );
} ).catch( ( error ) => {
    // (parameter) error: any
    console.log( 'Rejected:', error );
} ).finally( () => {
    console.timeEnd( 'settled-in' );
} );