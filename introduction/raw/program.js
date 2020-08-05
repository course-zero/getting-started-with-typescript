var x = 1;
var y;
console.log( typeof x, typeof y ); // number undefined

x = 'hello';
y = 'world';
console.log( typeof x, typeof y ); // string string

x = true;
y = x;
console.log( typeof x, typeof y ); // boolean boolean