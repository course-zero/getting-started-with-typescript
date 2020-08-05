// define a non-constant enum
enum Speed {
    SLOW = "slow",
    MEDIUM = "medium",
    FAST = "fast"
}

// define a simple object
let racer = {
    name: 'Ross Geller',
    speed: Speed.MEDIUM, // enum value
};

// log `racer` object
console.log( 'racer =>', racer );