// declare a function of the type `GetFullName`
const getPersonName: GetFullName = ( p: Person ) => {
    return `${ p.firstName } ${ p.lastName }`;
}

// create an object of the type `Person`
const ross: Person = {
    firstName: 'Ross',
    lastName: 'Geller',
    age: 29,
}

// get name of the `Person`
console.log( getPersonName( ross ) ); // Ross Geller