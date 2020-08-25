import 'reflect-metadata';

// decorator function that does nothig
function noop(...args: any[]) {}

@noop
class Person {
    constructor(
        public name: string,
        public age: number,
    ) {}

    getAge(): string {
        return this.age.toString();
    }

    @noop
    getNameWithPrefix(prefix: string): string {
        const type = Reflect.getMetadata(
            'design:type', this, 'getNameWithPrefix'
        ); console.log( 'type ->', type );

        const paramtypes = Reflect.getMetadata( 
            'design:paramtypes', this, 'getNameWithPrefix'
        ); console.log( 'paramtypes ->', paramtypes );

        const returntype = Reflect.getMetadata( 
            'design:returntype', this, 'getNameWithPrefix' 
        ); console.log( 'returntype ->', returntype );
        
        return prefix + ' ' + this.name;
    }
}

var person = new Person( 'Ross Geller', 29 );
person.getNameWithPrefix( 'Dr.' );