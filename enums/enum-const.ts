// define a constant enum
const enum Speed {
    SLOW = "slow",
    MEDIUM = "medium",
    FAST = "fast"
}

// define a simple object
let racer = {
    name: 'Ross Geller',
    speed: Speed.MEDIUM
};

// log `racer` object
console.log( 'racer =>', racer );

// Error: 'const' enums can only be used in property or index access expressions or the right hand side of an import declaration or export assignment or type query.
// console.log( "Speed => ", Speed );