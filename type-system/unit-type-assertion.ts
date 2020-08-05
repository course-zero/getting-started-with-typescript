// function that accepts unit type argument
let sayHello = ( prefix: 'Hello', name: string ): void => {
    console.log( `${ prefix }, ${ name }.` );
};

// legal: since literal value ('Hello') provided
sayHello( 'Hello', 'Ross Geller' );

/*-----------*/

// let monicaPrefix: 'Hello'
let monicaPrefix: 'Hello' = 'Hello';
let monica = 'Monica Geller';

// legal: since `monicaPrefix` has type of 'Hello'
sayHello( monicaPrefix, monica );

/*-----------*/

// let rachelPrefix: string
let rachelPrefix = 'Hello';
let rachel = 'Rachel Green';

// Error: Argument of type 'string' is not assignable to parameter of type ''Hello''.
sayHello( rachelPrefix, rachel );

// workaround: legal but misleading
sayHello( (rachelPrefix as 'Hello'), rachel );