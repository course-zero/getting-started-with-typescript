// superclass
class Person {
    private dob: string;

    constructor( dob: string ) {
        this.dob = dob;
    }

    protected getAge(): number {
        const currentYear = new Date().getFullYear();
        const birthYear = new Date( this.dob ).getFullYear();

        return currentYear - birthYear; // approx
    }
}

// subclass
class Student extends Person {
    public name: string;

    constructor( name: string, dob: string ) {
        super( dob );
        this.name = name;
    }

    describe(): string {
        return `${ this.name } is ${ super.getAge() } years old.`;
    }
}

// create `ross` instance of type `Student`
const ross: Student = new Student( 'Ross Geller', '10-14-1992' );

// Error: Property 'dob' is private and only accessible within class 'Person'.
console.log( ross.dob ); // private

// Property 'getAge' is protected and only accessible within class 'Person' and its subclasses.
console.log( ross.getAge() ); // protected

// legal
console.log( ross.describe() ); // public