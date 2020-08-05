// define a class
class Person {
    constructor(
        public firstName: string,
        public lastName: string
    ){}

    getFullName(): string {
        return `${ this.firstName } ${ this.lastName }`;
    }
}

// declare an interface that extends a class
interface Student extends Person {
    marks: number;
}

// create `ross` object of type `Student`
const ross: Student = {
    firstName: 'Ross',
    lastName: 'Geller',
    marks: 98
};