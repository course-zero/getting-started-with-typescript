// declare variables of type `any` and `unknown`
let valueA: any = null;
let valueB: unknown = null;

// reassign with a `string` value
valueA = 'Hello World';
valueB = 'Hello World';

// declare a variable of type `number` with
// an initial value of `valueA`
let boolA: number = valueA;

// declare a variable of type `number` with
// an initial value of `valueB`
let boolB: number = valueB;

// access properties/methods of `valueA` and `valueB`
valueA.toUpperCase();
valueB.toUpperCase();

// call `valueA` and `valueB`
valueA();
valueB();