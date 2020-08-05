interface Student {
    firstName: string;
    lastName: string;
    marks: number;
}

// create a `Person` interface by picking properties
// type Person = { firstName: string; lastName: string; }
type Person = Pick<Student, 'firstName' | 'lastName'>;
let ross: Person = {
    firstName: 'Ross',
    lastName: 'Geller',
};

// create a `Human` interface by omitting a property
// type Human = { firstName: string; lastName: string; }
type Human = Omit<Student, 'marks'>;
let monica: Human = {
    firstName: 'Monica',
    lastName: 'Geller'
};