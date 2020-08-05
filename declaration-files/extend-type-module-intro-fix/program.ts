declare global {
    // append global `Person` interface
    interface Person {
        email: string;
    }
}

declare global {
    // append global `Number` interface
    interface Number {
        isEven(): boolean;
    }

    // declare global `version`
    var version: string;
}

// create an object of type `Person`
const ross: Person = {
    firstName: 'Ross',
    lastName: 'Geller',
    age: 29,
    email: 'ross@geller.com'
}

// (method) Number.isEven(): boolean
const isAgeEven = ross.age.isEven();

// const isAgeEven: boolean
console.log( 'isAgeEven', isAgeEven );

// (make a module)
export {}