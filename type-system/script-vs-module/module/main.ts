import { sayHello } from './vendor';

export interface Person {
    firstName: string;
    lastName: string;
}

var ross: Person = { 
    firstName: 'Ross',
    lastName: 'Geller'
};

var fullname: string = sayHello( ross );
console.log( window.prefix );