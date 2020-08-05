// declare a variable of type `null`
let value: null;
console.log( "value =>", value );

// reassign with the `undefined` value (when `strictNullChecks` is false)
value = undefined;
console.log( "value =>", value );

// reassign using `literal` notation
value = null;
console.log( "value =>", value );

// print runtime type
console.log( "typeof `value` at runtime =>", typeof value );