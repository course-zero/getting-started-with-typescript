// declare indexable interface type
interface LapTimes {
    [key: number]: number;
}

// declare some valuesof type `LapTimes`
let ross: LapTimes = [ 10.5, 11.6, 10.9 ];
let monica: LapTimes = { 0: 10.5, 1: 11.6, 2: 10.9 };
let joey: LapTimes = { '0': 10.5, '1': 11.6, '2': 10.9 };
let rachel: LapTimes = { 'one': 10.5, 'two': 11.6, 'three': 10.9 };