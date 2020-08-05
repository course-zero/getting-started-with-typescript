// declare a variable of type `boolean`
let isActive: boolean = false;
console.log( "isActive =>", isActive );

// reassign using `literal` notation
isActive = true;
console.log( "isActive =>", isActive );

// reassign using `constructor` notation
isActive = Boolean( 0 );
console.log( "isActive =>", isActive );

// print runtime type
console.log( "typeof `isActive` at runtime =>", typeof isActive );