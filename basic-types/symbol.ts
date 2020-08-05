// declare variables of type `symbol`
var symbol1: symbol = Symbol();
var symbol2 = Symbol(); // infers the type `symbol`

console.log( 'symbol1 =>', symbol1 );
console.log( 'typeof symbol1 =>', typeof symbol1 );
console.log( 'symbol1 === symbol2 =>', symbol1 === symbol2 );

/*-----------*/

// each `Symbol()` expression generate a unique `symbol` value
var symbol3 = Symbol('name');
var symbol4 = Symbol('name');

console.log( 'symbol3 =>', symbol3 );
console.log( 'symbol3 === symbol4 =>', symbol3 === symbol4 );

/*-----------*/

// symbol value can also be used as an object key
var colorKey: symbol = Symbol('color');
var myCar = { model: 'Audi Q5', [ colorKey ]: 'Red' };

console.log( 'myCar =>', myCar );
// @ts-ignore
console.log( 'myCar[colorKey] =>', myCar[ colorKey ] );
console.log( 'Object.keys(myCar) =>', Object.keys( myCar ) );