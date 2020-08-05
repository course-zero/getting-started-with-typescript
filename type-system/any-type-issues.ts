// execute the `func` function
let calculate = (
    a: number, b: number, func: any
): number => {
    return func( a, b );
};

// calculate addition of two numbers
console.log(
    "valid =>",
    calculate(
        1,
        2,
        ( a: number, b: number ) => a + b
    )
);

// calculate subtrations of two numbers
console.log(
    "invalid =>",
    calculate( 1, 2, undefined )
);