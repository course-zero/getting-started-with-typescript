// declare a variable of type `number`
let size: number = 50;
console.log( "size =>", size );

// reassign using `literal` notation
size = 60.5;
console.log( "size =>", size );

// reassign using `constructor` notation
size = Number( '100' );
console.log( "size =>", size );

// print runtime type
console.log( "typeof `size` at runtime =>", typeof size );