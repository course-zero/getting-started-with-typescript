import { Person } from './main';

declare global {
  var prefix: string;
}

var prefix: string = 'Hello, ';
window.prefix = prefix;

export function sayHello( person: Person ): string {
  var result = prefix + person.firstName;
  return result;
}