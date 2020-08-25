import 'reflect-metadata';

// get text case from metadata
function getTextCase( target, name ) {
    return Reflect.getMetadata( 'case', target, name );
}

class Person {
    @Reflect.metadata( 'case', 'upper' )
    public fname: string;

    @Reflect.metadata( 'case', 'lower' )
    public lname: string;

    constructor( fname: string, lname: string ) {
        this.fname = fname;
        this.lname = lname;
    }

    get fullname(): string {
        const fnameCase = getTextCase( this, 'fname' );
        const lnameCase = getTextCase( this, 'lname' );
        
        const fname = 'upper' === fnameCase ? this.fname.toUpperCase() : this.fname.toLowerCase();
        const lname = 'upper' === lnameCase ? this.lname.toUpperCase() : this.lname.toLowerCase();

        return fname + ' ' + lname;
    }
}

var person = new Person( 'Ross', 'Geller' );
console.log( person.fullname );