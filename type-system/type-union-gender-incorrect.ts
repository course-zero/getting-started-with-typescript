// define function to set gender
let setGender = ( gender: string ): void | never => {
    if( gender !== 'male' && gender !== 'female' && gender !== 'other' ) {
        throw new Error( 'Please provide a correct gender.' );
    }

    // set gender
    // ....
};

// call `setGender` function with wrong gender value
setGender( 'true' );