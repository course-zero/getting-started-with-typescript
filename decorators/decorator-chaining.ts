// decorator factory
function decoratorFactory( label: string ) {
    console.log( 'factory():', label );
    return function( ...args: any[] ) {
        console.log( 'decorator():', label );
    }
}

// decorator
function decorator( ...args: any[] ) {
    console.log( 'decorator():', 'param-B' );
}

@decoratorFactory('class-A')
@decoratorFactory('class-B')
@decoratorFactory('class-C')
class Person {
    constructor(
        @decoratorFactory('param-A') @decorator @decoratorFactory('param-C') public name: string
    ) {}
}