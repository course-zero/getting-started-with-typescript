// resolve with a random integer between 0 and 9
const getRandomInt: () => Promise<number> = async () => {
    return parseInt( (Math.random() * 10).toFixed( 0 ) );
};

// returns a promise of type `Promise<boolean>`
// const isEven: (answer: boolean) => Promise<boolean>
const isEven = async ( answer: boolean ) => {
    // const value: number
    const value = await getRandomInt();

    // const isEven: boolean
    const isEven = value % 2 === 0;
    
    // return value is `boolean`
    return isEven === answer;
};

// listen to promise resolution
isEven( true ).then( ( value ) => {
    // (parameter) value: boolean
    console.log(
        value === true ? 'lucky :)' : 'unlucky :('
    );
} ).catch( ( error ) => {
    // (parameter) error: any
    console.log( 'Rejected:', error );
} ).finally( () => {
    console.log( 'Completed!' );
} );