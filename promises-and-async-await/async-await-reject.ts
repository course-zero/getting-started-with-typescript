// resolve with a random integer between 0 and 9
const getRandomInt: () => Promise<number> = async () => {
    return parseInt( (Math.random() * 10).toFixed( 0 ) );
};

// resolve with a boolean value
const isEven = async ( answer: boolean ) => {
    // const value: number
    const value = await getRandomInt();
    
    // reject if the `value` is `0`
    if( value === 0 ) {
        throw new Error( 'Can\'t work with 0 :/' );
    }

    // returned value is `boolean`
    const isEven = value % 2 === 0;
    return isEven === answer;
};

// listen to promise resolution
isEven( true ).then( ( value ) => {
    // (parameter) value: boolean
    console.log(
        value === true ? 'lucky :)' : 'unlucky :('
    );
} ).catch( ( error: Error ) => {
    console.log( 'Rejected:', error.message );
} ).finally( () => {
    console.log( 'Completed!' );
} );