// define an array of `string` elements
let fruits: string[] = [ 'Apple', 'Mango', 'Banana' ];
fruits.push( 123 );

// define an array of `number` elements
let lapTimes: Array<number> = [ 12.05, 13, 11.5 ];
lapTimes.push( 'orange' );

// define any array of `any` elements
let garbage: any[] = [ 'Mango', null, 12.5, undefined, true ];
garbage.push( 123 );
garbage.push( 'orange' );