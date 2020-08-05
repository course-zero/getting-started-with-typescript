// union of unit types (keys)
type keys = 'firstName' | 'lastName';

// create an interface from `keys` type
type Person = Record<keys, string>

// print names in uppercase
const sayHello = ( p: Person ): void => {
    // first name uppercase
    console.log(
        'FIRST_NAME:', p.firstName.toUpperCase()
    );

    // last name uppercase
    console.log(
        'LAST_NAME:', p.lastName.toUpperCase()
    );
}

// create an object of type `Person`
const ross: Person = {
    firstName: 'Ross',
    lastName: 'Geller',
};

sayHello( ross );