let getStuff = ( type: string ): any => {
    switch( type ) {
        case 'fruit': return 'Apple';
        case 'year': return 2012;
        case 'truth': return false;
    }
}

let stuff = getStuff( 'fruit' );
console.log( stuff.toUpperCase() );