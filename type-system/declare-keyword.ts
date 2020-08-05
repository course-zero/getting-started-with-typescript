// declare Lodash interface
interface Lodash {
    tail( values: any[] ): any[]
}

// declare `_` constant of type `Lodash`
declare const _: Lodash;

// works in runtime
const result = _.tail( [ 1, 2, 3 ] );