// declare indexable interface type
interface SimpleObject {
    [key: string]: any;
}

// declare few objects of type `SimpleObject`
let ross: SimpleObject = { name: 'Ross Geller', age: 32 };
let monica: SimpleObject = { name: 'Monica Geller', 1: 28 };

// print values
console.log( 'ross =>', ross );
console.log( 'monica =>', monica );