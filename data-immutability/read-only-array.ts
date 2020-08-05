// create a readonly array
const oddNumbers: readonly number[] = [ 1, 3, 5, 7, 9 ];

// Error: Index signature in type 'readonly number[]' only permits reading.
oddNumbers[ 0 ] = 11;

// Error: Property 'push' does not exist on type 'readonly number[]'.
oddNumbers.push( 11 );

// Error: Property 'pop' does not exist on type 'readonly number[]'.
oddNumbers.pop();

// Error: Cannot assign to 'length' because it is a read-only property.
oddNumbers.length = 6;

// Error: Cannot assign to 'oddNumbers' because it is a constant.
oddNumbers = [ 1, 2, 3 ];

// Error: The type 'readonly number[]' is 'readonly' and cannot be assigned to the mutable type 'number[]'.
let numbers: number[] = oddNumbers;