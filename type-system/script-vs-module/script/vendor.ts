var prefix: string = 'Hello, ';

function sayHello( person: Person ): string {
  var result = prefix + person.firstName;
  return result;
}

export {}