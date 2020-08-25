// convert accessor to uppercase
function uppercase( target, name, desc ) {
    return {
        enumerable: false,
        configurable: false,
        get: function () {
            return desc.get.call( this ).toUpperCase();
        },
        set: function ( name ) {
            desc.set.call( this, name.split(' ') );
        }
    };
}

class Person {
    constructor(
        public fname: string, public lname: string,
    ) {}

    @uppercase
    get fullname(): string {
        return this.fname + ' ' + this.lname;
    }

    set fullname( [ fname, lname ] ) {
        this.fname = fname;
        this.lname = lname;
    }
}

var person = new Person( 'Ross', 'Geller' );
console.log( 'fullname ->', person.fullname );
console.log( 'person ->', person );

person.fullname = 'Chandler Bing';
console.log( 'fullname* ->', person.fullname );
console.log( 'person* ->', person );