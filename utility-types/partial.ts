interface Person {
    firstName: string;
    lastName: string;
}

// `p` argument is an interface with optional `firstName` or `lastName` properties
const sayHello = ( p: Partial<Person> ): void => {
    if( ! p.firstName ) {
        console.log(
            `Hello, Dear ${ p.lastName }.`
        );
    } else if( ! p.lastName ) {
        console.log(
            `Hello, Mr./Ms. ${ p.firstName }.`
        );
    } else {
        console.log(
            `Hello, ${ p.firstName } ${ p.lastName }.`
        );
    }
}

sayHello( { firstName: 'Ross', lastName: 'Geller' } );
sayHello( { firstName: 'Monica' } );
sayHello( { lastName: 'Tribbiani' } );