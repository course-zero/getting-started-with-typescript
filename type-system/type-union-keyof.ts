// `Person` interface
interface Person {
    name: string;
    age: number;
}

// keyof Person => "firstName" | "lastName" | "age"
let printPersonValue = ( p: Person, key: keyof Person ): void => {
    // (parameter) p: Person
    // (parameter) key: "name" | "age"

    console.log( p[ key ] );
};

// legal
printPersonValue( { name: 'Ross Geller', age: 30 }, 'name' );

// illegal / Error: Argument of type '"profession"' is not assignable to parameter of type '"name" | "age"'
printPersonValue( { name: 'Monica Geller', age: 30 }, 'profession' );