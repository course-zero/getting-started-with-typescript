// declare a generic class
class Items<U> {
    public items: U[];

    constructor( ...values: U[] ) {
        this.items = values;
    }
}

// generic class extends another generic class
class Collection<T> extends Items<T> {
    getFirstItem(): T {
        return this.items[ 0 ];
    }
}

// a collection of `string` items
var letters = new Collection<string>( 1, 'b', 'c' );

// var item: string
var item = letters.getFirstItem();
console.log( 'item =>', item.toUpperCase() );