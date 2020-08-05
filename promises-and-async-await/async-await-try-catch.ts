// resolve with a random integer between 0 and 9
// const getRandomInt: () => Promise<number>
const getRandomInt = async () => {
    const value = parseInt((Math.random() * 10).toFixed(0));

    // reject if the `value` is `0`
    if( value === 0 ) {
        throw new Error( 'Can\'t work with 0 :/' );
    }

    return value;
};

// resolve with a boolean value
// const isEven: (answer: boolean) => Promise<boolean>
const isEven = async ( answer: boolean ) => {
    try {
        const value = await getRandomInt();
        const isEven = value % 2 === 0;
        return isEven === answer;
    } catch( e ) {
        console.log( 'getRandomInt rejection:', e.message );
        return false; // return `false` deliberately
    }
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