// define an interface
interface PersonInterface {
    firstName: string;
    lastName: string;
    dob: Date;
    readonly name: string;
    getBirthYear(): number;
}

// class implements the interface
class Person implements PersonInterface{
    constructor(
        public firstName: string,
        public lastName: string,
        public dob: Date
    ){}

    get name(): string {
        return `${ this.firstName } ${ this.lastName }`;
    }

    getBirthYear(): number {
        return this.dob.getFullYear();
    }
}

// create `ross` instance of type `Person`
const ross: Person = new Person(
    'Ross',
    'Geller',
    new Date( '10-14-1992' )
);

console.log( 'ross =>', ross );