class Student {
    constructor(
        public name: string, private marks: number
    ) {}

    getMarks() { return this.marks; }
}

class Player {
    constructor(
        public name: string, private score: number
    ) {}

    getScore(){ return this.score; }
}

// this function prints info
let printInfo = ( person: Student | Player ): void => {
    if( person instanceof Student ) {
        // (parameter) person: Student

        console.log(
            `${ person.name }: ${ person.getMarks() }`
        );
    } else {
        // (parameter) person: Player

        console.log(
            `${ person.name }: ${ person.getScore() }`
        );
    }
};

printInfo( new Student( 'Ross Geller', 98 ) );
printInfo( new Player( 'Monica Geller', 100 ) );