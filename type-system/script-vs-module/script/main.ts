interface Person {
    firstName: string;
    lastName: string;
}

var ross: Person = {
    firstName: 'Ross',
    lastName: 'Geller'
};
var fullname: string = sayHello( ross );

export {}