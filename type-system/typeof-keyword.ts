// create an object
// let ross: { firstName: string; lastName: string; }
let ross = { firstName: 'Ross', lastName: 'Geller' };

// `monica` must have a shape of `ross`
let monica: typeof ross = {
    firstName: 'Monica',
    lastName: 'Geller'
};

// create a type alias for reuse
type Person = typeof ross;

// create `rachel` of type `Person`
let rachel: Person = {
    firstName: 'Rachel',
    lastName: 'Green'
};