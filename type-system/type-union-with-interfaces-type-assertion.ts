// `Student` interface
interface Student {
    name: string;
    marks: number;
}

// `Player` interface
interface Player {
    name: string;
    score: number;
}

// this function prints info
let printInfo = ( person: Student | Player ): void => {
    console.log(
        `${ person.name } received ${ (person as Student).marks } marks.`
    );
};

// print info of a `Student`
const ross: Student = { name: 'Ross Geller', marks: 98 };
printInfo( ross );