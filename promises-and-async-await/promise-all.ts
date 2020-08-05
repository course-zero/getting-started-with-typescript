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

// const allPromise: Promise<number[]>
const allPromise = Promise.all<number>( [
    getPromise( 0, 0, false ),    // 0s
    getPromise( 1, 2000, false ), // 2s
    getPromise( 2, 1000, false ), // 1s
] );

// listen to `allPromise` resolution
console.time( 'settled-in' );
allPromise.then( ( value ) => {
    // (parameter) value: number[]
    console.log( 'Resolved:', value );
} ).catch( ( error ) => {
    // (parameter) error: any
    console.log( 'Rejected:', error );
} ).finally( () => {
    console.timeEnd( 'settled-in' );
} );