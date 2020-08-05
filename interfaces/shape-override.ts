// define ross object
let ross = {
    firstName: 'Ross',
    lastName: 'Geller',
    age: 32,
    getSalary: ( base: number ) => base * 12
};

// override `getSalary` property value
ross.getSalary = 1200;

/// add `email` property with a default value
ross.email = 'ross@geller.com';