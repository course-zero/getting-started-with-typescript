// declare a variable of type `undefined`
let secret: undefined;
console.log( "secret =>", secret );

// reassign with the `null` value (when `strictNullChecks` is false)
secret = null;
console.log( "secret =>", secret );

// reassign using `literal` notation
secret = undefined;
console.log( "secret =>", secret );

// print runtime type
console.log( "typeof `secret` at runtime =>", typeof secret );