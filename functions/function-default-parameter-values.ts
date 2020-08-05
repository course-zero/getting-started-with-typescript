// declare a function
let printPerson = ( name: string, age: number, canDrive: boolean = true ) => {
    if( canDrive ) {
        return `${ name } of age ${ age } can drive.`;
    } else {
        return `${ name } of age ${ age } can not drive.`;
    }
};

console.log( printPerson( "Ross Geller", 28 ) ); // no errors
console.log( printPerson( "Monica Geller", 26, false ) );