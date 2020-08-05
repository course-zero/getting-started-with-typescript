// declare a function type with properties
interface IsSumOdd {
    ( a: number, b: number ): boolean;
    type: string;
    calculate( a: number, b: number): number;
}

// create a function of type `IsSumOdd`
let isSumOdd: IsSumOdd = Object.assign(
    function( x: number, y: number ): boolean {
        return (x + y) % 2 !== 0;
    },

    // assign properties
    {
        type: 'oddChecker',
        calculate: function( x: number, y: number ): number {
            return x + y;
        }
    }
);

// log some values
console.log( 'isSumOdd(1, 2) =>', isSumOdd(1, 2) );
console.log( 'isSumOdd.type =>', isSumOdd.type );
console.log( 'isSumOdd.calculate(1, 2) =>', isSumOdd.calculate(1, 2) );