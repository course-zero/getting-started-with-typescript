// declare a generic function with constraints
function getValue<T extends string | number | boolean>( arg: T ): T {
    return arg;
};

// function getValue<"hello">(value: "hello"): "hello"
// var value1: "hello"
var value1 = getValue( 'hello' );

// function getValue<string>(value: string): string
// var value2: string
var value2 = getValue( 'hello' as string );

// function getValue<string | number>(value: string | number): string | number
// var value3: string | number
var value3 = getValue( 'hello' as string | number );

// function getValue<any>(value: any): any
// var value4: any
var value4 = getValue( 'hello' as any );

// Error: Argument of type 'symbol' is not assignable to parameter of type 'string | number | boolean'.
var value5 = getValue( Symbol() as symbol );

// Error: Argument of type 'string | number | symbol' is not assignable to parameter of type 'string | number | boolean'.
// Type 'symbol' is not assignable to type 'string | number | boolean'.
var value6 = getValue( 'hello' as string | number | symbol );