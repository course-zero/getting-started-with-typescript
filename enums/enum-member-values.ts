// define an enum
enum Speed {
    SLOW = 30,
    MEDIUM = SLOW + 30,
    FAST = MEDIUM + 40
}

// log `Speed` enum
console.log( 'Speed =>', Speed );

// define `Racer` interface
interface Racer {
    name: string;
    speed: Speed;
}

// create a racer object
let ross: Racer = {
    name: 'Ross Geller',
    speed: Speed.FAST,
};

// log `ross` object
console.log( 'ross =>', ross );