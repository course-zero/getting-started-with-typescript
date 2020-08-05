class Person {
    constructor(
        public firstName: string,
        public lastName: string
    ){}

    getFullName(): string {
        return `${ this.firstName } ${ this.lastName }`;
    }
}

// `Student` class implements the `Person` class
class Student implements Person {
    constructor(
        public firstName: string,
        public lastName: string,
        public marks: number
    ){}
    
    getFullName(): string {
        return `${ this.firstName } ${ this.lastName }`;
    }
    
    getGrade(): string {
        return (this.marks / 10).toFixed( 0 );
    }
}

// create `ross` instance of type `Person`
const ross: Person = new Person( 'Ross', 'Geller' );

// create `monica` instance of type `Student`
const monica: Student = new Student( 'Monica', 'Geller', 84 );
console.log( monica.getFullName() ); // Monica Geller
console.log( monica.getGrade() ); // 8