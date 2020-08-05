// declare a generic interface
interface Secret<T> {
    secret: T;
}

// implement a generic interfacd
class Student implements Secret<number> {

    // Error: Type 'string' is not assignable to type 'number'.
    public secret: string;

    constructor( value: string ){
        this.secret = value;
    }
}