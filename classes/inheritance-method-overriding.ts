// superclass
class Person {
    name: string;

    constructor( name: string ) {
        this.name = name;
    }

    getNameParts(): string[] {
        return this.name.split( ' ' );
    }
}

// subclass
class Student extends Person {
    marks: number;

    constructor( name: string, marks: number ) {
        super( name ); // `Person` constructor call
        this.marks = marks;
    }

    getNameParts(): string[] {
        // parent method call
        const nameParts = super.getNameParts();

        return nameParts.map( part => part.toUpperCase() );
    }
}

// create an instance of `Student` class
const ross: Student = new Student( 'Ross Geller', 86 );

console.log( 'ross =>', ross );
console.log( 'ross.getNameParts() =>', ross.getNameParts() );