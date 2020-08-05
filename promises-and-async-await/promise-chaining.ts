// returns a random integer between 0 and 9
const getRandomInt = (): string => {
    return ( Math.random() * 10 ).toFixed( 0 );
};

// resolve with an `even` integer
const findEven = new Promise<number>( ( resolve, reject ) => {
    setTimeout( function(): void {

        // convert `string` to `number`
        const value = parseInt( getRandomInt() );

        if( value % 2 === 0 ) {
            resolve( value );
        } else {
            reject( 'Odd number found!' );
        }
    }, 1000 );
} );

// listen to promise resolution
findEven.then( ( value ) => {
    // (parameter) value: number
    console.log( 'Resolved-1:', value + 1 );
    return `${ value + 1 }`; 
} ).then( ( value ) => {
    // (parameter) value: string
    console.log( 'Resolved-2:', value + 1 );
} ).catch( ( error ) => {Promise.any
    dddPromise.resolve
    // (parameter) error: any
    console.log( 'Rejected:', error );
} ).finally( () => {
    console.log( 'Completed!' );
} );