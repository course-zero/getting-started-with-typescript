// return a value
let getStuff = ( type: string ): any => {
    switch( type ) {
        case 'string': return 'Apple';
        case 'number': return 3.1415926;
        case 'boolean': return false;
    }
}

// get some values
let apple = getStuff( 'string' );
let pi = getStuff( 'number' );
let isApplePie = getStuff( 'boolean' );

// let apple: any
console.log( apple.toFixed( 2 ) );
// 🔴 TypeError: apple.toFixed is not a function

// let pi: any
console.log( pi.toUpperCase( 2 ) );
// 🔴 TypeError: pi.toUpperCase is not a function

// let isApplePie: any
console.log( isApplePie + 1 );