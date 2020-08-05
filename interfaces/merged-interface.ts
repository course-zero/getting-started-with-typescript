interface Person {
    firstName: string;
}

interface Person {
    lastName: string;
}

interface Person {
    firstName: string;
    rollNo: number;
}

// create an object of type `Person`
const ross: Person = {
    firstName: 'Ross',
    lastName: 'Geller',
    rollNo: 100
};

// log values
console.log( 'ross =>', ross );