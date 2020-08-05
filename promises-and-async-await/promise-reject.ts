// create a sample error message
const message = 'Oops! Something went wrong.';

// const oopsPromise: Promise<never>
const oopsPromise = Promise.reject( message );

// listen to promise resolution
oopsPromise.then( ( value ) => {
    // (parameter) value: never
    console.log( 'Resolved:', value );
} ).catch( ( error ) => {
    // (parameter) error: any
    console.log( 'Rejected:', error );
} );