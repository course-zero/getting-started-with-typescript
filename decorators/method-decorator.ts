// make property readonly
function readonly( target, name, desc ) {
    desc.writable = false;
}

// adds `v` prefix
function prefix( target, name, desc ) {
    return {
        writable: false, enumerable: false,
        configurable: false,
        value: () => `v${ desc.value() }`,
    };
}

class Person {
    constructor(
        public fname: string, public lname: string
    ) {}

    @readonly
    getFullName(): string {
        return this.fname + ' ' + this.lname;
    }

    @prefix
    static getVersion() {
        return '1.0.0';
    }
}

// get version
console.log( 'version ->', Person.getVersion() );
// ✅ v1.0.0

// override `getFullName` method
Person.prototype.getFullName = null;
// ❌ TypeError: Cannot assign to read only property 'getFullName' of object '#<Person>'