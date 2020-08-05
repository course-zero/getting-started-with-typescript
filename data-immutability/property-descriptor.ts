// define a simple object
let ross = {
    firstName: 'Ross',
    lastName: 'Geller'
};

console.log( '[init] firstName =>', ross.firstName );

// simple function to return property descriptor
const getDescriptor = ( obj: object, key: string ) => {
    return Object.getOwnPropertyDescriptor( obj, key );
};

// get property descriptor of the `firstName`
const pd = getDescriptor( ross, 'firstName' );
console.log( 'pd.writable =>', pd.writable );

// update `firstName` property
ross.firstName = 'Judy';
console.log( '[before] firstName =>', ross.firstName );

// make `firstName` property readonly
Object.defineProperty( ross, 'firstName', {
    writable: false
} );
const pdAfter = getDescriptor( ross, 'firstName' );
console.log( 'pd.writable =>', pdAfter.writable );

// update `firstName` property value again
ross.firstName = 'Jack';
console.log( '[after] firstName =>', ross.firstName );