// define an enum
enum Speed {
    SLOW = 30,
    MEDIUM = 60,
    FAST = 100
}

// my speed value
let mySpeed = Speed.MEDIUM; // 60

// log speed names
console.log( 'Speed[mySpeed] =>', Speed[ mySpeed ] );
console.log( 'Speed[100] =>', Speed[ 100 ] );