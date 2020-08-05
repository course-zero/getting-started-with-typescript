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

// const fastestPromise: Promise<number>
const fastestPromise = Promise.race<number>( [
    getPromise( 0, 500, false ), // 0.5s
    getPromise( 1, 2000, false ), // 2s
    getPromise( 2, 1000, true ),  // 1s (rejects)
] );

// listen to `allPromise` resolution
console.time( 'settled-in' );
fastestPromise.then( ( value ) => {
    // (parameter) value: number
    console.log( 'Resolved:', value );
} ).catch( ( error ) => {
    // (parameter) error: any
    console.log( 'Rejected:', error );
} ).finally( () => {
    console.timeEnd( 'settled-in' );
} );