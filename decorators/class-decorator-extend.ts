// `Ctor` type presents a constructor function
interface Ctor {
    new (...args: any[] ): any;
}

// return a new class that extends incoming class
function withInfo<T extends Ctor>( ctor: T ): T {
    return class NewCtor extends ctor {
        info(): string {
            return `An instance of a "${ ctor.name }".`;
        }
    };
}

@withInfo
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

const person = new Person( 'Ross', 'Geller' );
console.log( 'version ->', Person.version );
console.log( 'fullname ->', person.getFullName() );
console.log( 'info ->', (person as any).info() );