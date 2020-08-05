// returns a random integer between 0 and 9
const getRandomInt = (): string => {
    return ( Math.random() * 10 ).toFixed( 0 );
};

// get random integer of type `number`
const value: number = parseInt( getRandomInt() );

// const numPromise: Promise<number>
const numPromise = Promise.resolve( value );

// listen to promise resolution
numPromise.then( ( value ) => {
    // (parameter) value: number
    console.log( 'Resolved:', value + 1 );
} ).catch( ( error ) => {
    // (parameter) error: any
    console.log( 'Rejected:', error );
} );