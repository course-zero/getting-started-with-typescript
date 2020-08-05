// declare a function type
interface IsSumOdd {
    ( a: number, b: number ): boolean;
}

// create a function of type `IsSumOdd`
let isSumOdd: IsSumOdd = ( x: number, y: number ): boolean => {
    if( (x + y) % 2 === 0 ) {
        return false;
    }

    return true;
};

// make some `isSumOdd()` calls
console.log( 'isSumOdd(1, 2) =>', isSumOdd(1, 2) );
console.log( 'isSumOdd(2, 2) =>', isSumOdd(2, 2) );
