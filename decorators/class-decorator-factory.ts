// decorator factory
function version( version: string ) {
    return function( target: any ) {
        target.version = version;
    }
}

@version('v1.0.1')
class Person {
    fname: string;
    lname: string;

    constructor( fname: string, lname: string ) {
        this.fname = fname;
        this.lname = lname;
    }

    getFullName(): string {
        return this.fname + ' ' + this.lname;
    }
}

// log class version
console.log( 'version ->', (Person as any).version );