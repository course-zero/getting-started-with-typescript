// lock decorator for classes
function lock( ctor: Function ) {
    Object.freeze( ctor );
    Object.freeze( ctor.prototype );
}

@lock
class Person {
    static version: string = 'v1.0.0';

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

// add properties to class
Person.version = 'v1.0.1';
// ❌ Error => TypeError: Cannot assign to read only property 'version' of function 'class Person'

// add properties to class prototype
Person.prototype.getFullName = null;
// ❌ Error => TypeError: Cannot assign to read only property 'getFullName' of object '#<Person>'