// function that returns a tuple
function getTuple<T>( a: T, b: T ): [ T, T ] {
    return [ a, b ];
}

// var stringArray: [string, string]
var stringArray = getTuple<string>( 'hello', 'world' );

// var numberArray: [number, number]
var numberArray = getTuple<number>( 1.25, 2.56 );

// var ucStrings: string[]
var ucStrings = stringArray.map( s => s.toUpperCase() );

// var numInts: string[]
var numInts = numberArray.map( n => n.toFixed() );

// var mixedArray: [number, number]
// Error: Argument of type '"world"' is not assignable to parameter of type 'number'.
var mixedArray = getTuple( 1.25, 'world' );