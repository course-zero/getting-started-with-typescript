// decorator factory
function factory( label: string ) {
    console.log( 'factory():', label );
    return function( ...args: any[] ) {
        console.log( 'decorator():', label );
    }
}

@factory('class')
class Person {
    @factory('property-instance') name: string;
    @factory('property-static') static version: string;
    
    constructor(
        @factory('param-constructor') name: string
    ) { this.name = name }

    @factory('method-instance')
    getName(
        @factory('param-instance') prefix: string
    ) { return prefix + ' ' + this.name; }

    @factory('getter-instance')
    personName() { return this.name;}

    @factory('method-static')
    static getVersion(
        @factory('param-static') prefix: string
    ) { return prefix + '' + this.version; }

    @factory('getter-static')
    static personVersion() { return this.version;}
}