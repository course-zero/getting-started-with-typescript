// declare a variable of type `object`
let obj: object = { name: 'John Doe' };

// legal assigment with non-primitives
obj = [ 1, 2, 3 ]; // Array
console.log( 'typeof obj =>', typeof obj ); // object

obj = { age: 21 }; // Object
console.log( 'typeof obj =>', typeof obj ); // object

obj = () => null; // Function
console.log( 'typeof obj =>', typeof obj ); // function

/*-------------------*/

// illegal assigment with primitives
obj = 'John Doe';
obj = 21;
obj = Symbol();
obj = true;
obj = undefined;
obj = null;