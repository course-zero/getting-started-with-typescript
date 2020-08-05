// define a generic interface
interface TupleObject<T, U> {
    a: T;
    b: U;
    getTuple(): [ T, U ];
}

// var tupleObj1: TupleObject<number, number>
var tupleObj1: TupleObject<number, number> = {
    a: 1,
    b: 2,
    getTuple: function() {
        return [ this.a, this.b ];
    }
};

// var tuple1: [string, number]
var tuple1 = tupleObj1.getTuple();
console.log( 'tuple1 =>', tuple1 );

// var tupleObj2: TupleObject<string, number>
var tupleObj2: TupleObject<string, number> = {
    a: '1',
    b: 2,
    getTuple: function() {
        return [ this.a, this.b ];
    }
};

// var tuple2: [number, number]
var tuple2 = tupleObj1.getTuple();
console.log( 'tuple2 =>', tuple2 );