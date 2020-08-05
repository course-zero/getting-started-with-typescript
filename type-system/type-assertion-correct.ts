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
let isApplePie = getStuff( 'boolean' ) as boolean;


// Compilation Error: Property 'toFixed' does not exist on type 'string'.
console.log( ( apple as string ).toFixed() );

// Compilation Error: Property 'toUpperCase' does not exist on type 'number'.
console.log( ( <number>pi ).toUpperCase( 2 ) );

// Compilation Error: Operator '+' cannot be applied to types 'boolean' and 'number'.
console.log( isApplePie + 1 );