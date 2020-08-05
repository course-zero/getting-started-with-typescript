class Person {
    private _dob: Date;

    constructor( public name: string, dobRaw: string ) {
        this._dob = new Date( dobRaw );
    }

    // `dob` property getter
    get dob(): string {
        const date = this._dob.getDate();
        const month = this._dob.getMonth() + 1;
        const year = this._dob.getFullYear();

        return `${ month }-${ date }-${ year }`; // mm-dd-yyyy
    }

    // `dob` property setter
    set dob( dobRaw ) {
        this._dob = new Date( dobRaw );
    }
}

// create `ross` instance of type `Person`
const ross: Person = new Person( 'Ross Geller', '10-14-1992' );
console.log( 'BEFORE / ross =>', ross );
console.log( 'BEFORE / ross.dob =>', ross.dob );

// update date
ross.dob = '10-15-1992';
console.log( 'AFTER / ross =>', ross );
console.log( 'AFTER / ross.dob =>', ross.dob );