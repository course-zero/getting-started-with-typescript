// declare a generic interface with a genetic method
interface TupleObject<T, U> {
    a: T;
    b: U;
    getTuple<V>( c: V ): [ T, U, V ];
}

// var tupleObj: TupleObject<string, number>
var tupleObj: TupleObject<string, number> = {
    a: '1',
    b: 2,
    getTuple( c ) {
        return [ this.a, this.b, c ];
    }
};

// var tuple: [string, number, boolean]
var tuple = tupleObj.getTuple<boolean>( true );
console.log( 'tuple =>', tuple );