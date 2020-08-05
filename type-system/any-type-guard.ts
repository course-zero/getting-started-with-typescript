class Student {
    constructor(
        public name: string, public marks: number
    ){ }

    getGrade(): string {
        return (this.marks / 10).toFixed( 0 );
    }
}

class Player {
    constructor(
        public name: string, public score: number
    ){}

    getRank(): string {
        return (this.score / 10).toFixed( 0 );
    }
}

const getPosition = ( person: any ) => {
    if( person instanceof Student ) {
        // (parameter) person: Student

        console.log(
            `${ person.name } =>`, person.getGrade()
        );
    } else if( person instanceof Player ) {
        // (parameter) person: Player

        console.log(
            `${ person.name } =>`, person.getRank()
        );
    }
};

getPosition( new Student( 'Ross Geller', 82 ) );
getPosition( new Student( 'Monica Geller', 71 ) );