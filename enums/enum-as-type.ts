// define an enum
enum Speed {
    SLOW = 1,
    MEDIUM,
    FAST
}

// define `Racer` interface
interface Racer {
    name: string;
    speed: Speed; // `speed` value has `Speed` enum type
}

// create a racer object
let ross: Racer = {
    name: 'Ross Geller',
    speed: Speed.MEDIUM,
};

// log `ross` object
console.log( 'ross =>', ross );