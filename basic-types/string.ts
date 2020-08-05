// declare a variable of type `string`
let fruit: string = 'Mango';
console.log( "fruit =>", fruit );

// reassign using `literal` notation (template string)
fruit = `${ fruit } or Apple`;
console.log( "fruit =>", fruit );

// reassign using `constructor` notation
fruit = String( 100 );
console.log( "fruit =>", fruit );

// print runtime type
console.log( "typeof `fruit` at runtime =>", typeof fruit );