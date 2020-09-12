import { Person } from './lib/classes';

// create a `Person` instance
const person: Person = new Person( 'John', 'Doe' );
console.log( person.getFullName() );