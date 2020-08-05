// define an enum
enum Speed {
    SLOW = 1, // constant member
    MEDIUM, // constant member
    FAST = parseInt( "3" ), // computed member
}

// log `Speed` enum
console.log( 'Speed =>', Speed );

// define `Racer` interface
interface Racer {
    name: string;
    speed: Speed; // enum type
}

// create a racer object
let ross: Racer = {
    name: 'Ross Geller',
    speed: Speed.FAST, // computed enum value
};

// log `ross` object
console.log( 'ross =>', ross );