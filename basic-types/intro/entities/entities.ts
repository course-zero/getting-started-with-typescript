// variables & constants
const fullName: string = 'Ross Geller'; // 'const' declarations must be initialized
var age: number;
let email: string;

// function declaration
function canVote( age: number ): boolean {
    return age >= 18; // `true` if `age` is GTE `18`
}

// class declaration
class Person {

    // properties declaration
    firstName: string;
    lastName: string;
    age: number;
    email: string;

    // constructor declaration
    constructor( fn: string, ln: string ) {
        this.firstName = fn;
        this.lastName = ln;
    }

    // method declaration
    canVote( age: number ): boolean {
        return age >= 18; // `true` if `age` is GTE `18`
    }
}

// object declaration
let person: {
    firstName: string;
    lastName: string;
    age: number;
    email: string;
};