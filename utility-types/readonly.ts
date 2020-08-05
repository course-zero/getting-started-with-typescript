interface Person {
    firstName: string;
    lastName: string;
}

// changes `firstName` and `lastName`
const changeName = (
    person: Readonly<Person>,
    firstName: string,
    lastName: string,
): Person => {
    // Error: Cannot assign to 'firstName' because it is a read-only property.
    person.firstName = firstName;

    // Error: Cannot assign to 'lastName' because it is a read-only property.
    person.lastName = lastName;

    return person;
}

// create a `Person` object
const phoebe: Person = {
    firstName: 'Phoebe',
    lastName: 'Buffay'
};

// change `phoebe` property values
changeName( phoebe, 'Regina', 'Phalange' );