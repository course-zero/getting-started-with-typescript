// union of `string` and `number`
type NS = string | number;

// function that returns a tuple
function getTuple( a: NS, b: NS ): [ NS, NS ] {
    return [ a, b ];
}

// let stringArray: [NS, NS]
var stringArray = getTuple( 'hello', 'world' );

// let numberArray: [NS, NS]
var numberArray = getTuple( 1.25, 2.56 );

// let mixedArray: [NS, NS]
var mixedArray = getTuple( 1.25, 'world' );

// Property 'toUpperCase' does not exist on type 'NS'.
console.log( stringArray.map( s => s.toUpperCase() ) );

// Error: Property 'toFixed' does not exist on type 'NS'.
console.log( numberArray.map( n => n.toFixed() ) );