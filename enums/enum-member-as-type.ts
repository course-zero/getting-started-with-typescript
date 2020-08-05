// define an enum
enum Speed {
    SLOW = 1,
    MEDIUM,
    FAST
}

// define `Racer` interface
interface Racer {
    name: string;
    speed: Speed.MEDIUM; // can only be `Speed.MEDIUM`
}

// create a racer object
let ross: Racer = {
    name: 'Ross Geller',
    speed: Speed.MEDIUM,
};

// Error: Type 'Speed.FAST' is not assignable to type 'Speed.MEDIUM'.
ross.speed = Speed.FAST;