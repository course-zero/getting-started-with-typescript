// define a class
class Animal {
    sound: string

    constructor( sound: string ) {
        this.sound = sound;
    }

    getSound(): string {
        return `${ this.sound }! ${ this.sound }!`;
    }
}

// define an interface to represent a constructor function
interface AnimalInterface {
    new ( sound: string ): Animal;
}

// create `Animal` factory function
let createAnimal = ( ctor: AnimalInterface, type: string ): Animal => {
    return type === 'dog' ? new ctor( 'Woof' ) : new ctor( 'Meow' );
}

// create `Animal` instance
let dog: Animal = createAnimal( Animal, 'dog' );
console.log( 'dog.getSound() =>', dog.getSound() );