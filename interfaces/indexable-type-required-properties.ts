// declare indexable interface type
interface LapTimes {
    name: string;
    age?: number;
    [key: number]: number;
}

// valid
let ross: LapTimes = {
    name: 'Ross Geller',
    0: 10.3,
    1: 11.2
};

// Error: Type 'string' is not assignable to type 'number | undefined'.
let monica: LapTimes = {
    name: 'Monica Geller',
    age: '28',
    0: 10.3, 1: 11.2
};

// Error: Object literal may only specify known properties, and 'gender' does not exist in type 'LapTimes'.
let joey: LapTimes = {
    name: 'Monica Geller',
    gender: 'Male',
    0: 10.3,
    1: 11.2
};

// Error: Property 'name' is missing in type '{ 0: number; 1: number; }' but required in type 'LapTimes'.
let rachel: LapTimes = {
    0: 10.3,
    1: 11.2
};