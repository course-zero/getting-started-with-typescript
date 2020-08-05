abstract class Person {
    constructor( public firstName: string, public lastName: string ){}

    getFullName(): string {
        return `${ this.firstName } ${ this.lastName }`;
    }
}

class Student extends Person {
    constructor( firstName: string, lastName: string, public marks: number ){
        super( firstName, lastName );
    }

    getGrade(): string {
        return (this.marks / 10).toFixed( 0 );
    }
}

// Error: Cannot create an instance of an abstract class.ts
// const ross: Person = new Person( 'Ross', 'Geller' );

// create `monica` instance of type `Student`
const monica: Student = new Student( 'Monica', 'Geller', 84 );
console.log( monica.getFullName() ); // Monica Geller
console.log( monica.getGrade() ); // 8