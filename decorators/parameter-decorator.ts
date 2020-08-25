import 'reflect-metadata';

// save metadata of a parameter with its index
function textCase( target, name, index ) {
    const tcase = index === 0 ? 'upper' : 'lower';
    Reflect.defineMetadata( `case_${index}`, tcase, target, name );
}

// get text case from metadata
function getTextCase( target, name, index ) {
    return Reflect.getMetadata( `case_${index}`, target, name );
}

class Person {
    public fname: string;
    public lname: string;

    constructor(
        @textCase fname: string,
        @textCase lname: string
    ) {
        this.fname = fname;
        this.lname = lname;
    }

    get fullname(): string {
        const fnameCase = getTextCase( Person, undefined, 0 );
        const lnameCase = getTextCase( Person, undefined, 1 );
        
        const fname = 'upper' === fnameCase ? this.fname.toUpperCase() : this.fname.toLowerCase();
        const lname = 'upper' === lnameCase ? this.lname.toUpperCase() : this.lname.toLowerCase();

        return fname + ' ' + lname;
    }
}

var person = new Person( 'Ross', 'Geller' );
console.log( person.fullname );