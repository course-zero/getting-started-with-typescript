var car = { name: 'Audi', model: 'R8' };
var fruit = { type: 'Mango', color: 'Red', weight: 6 };

// accept `key`, if it's a property inside `obj`
const getValue = function<V, K extends keyof V>( obj: V, key: K ): any {
    return obj[ key ];
};

// keyof (typeof car) => 'name' | 'model'
getValue( car, 'name' );
getValue( car, 'model' );

// keyof (typeof fruit) => 'type' | 'color' | 'weight'
getValue( fruit, 'color' );
getValue( fruit, 'weight' );

// Error: Argument of type 'string' is not assignable to parameter of type '"color" | "type" | "weight"'.
getValue( fruit, 'color' as string );

// Error: Argument of type '"name"' is not assignable to parameter of type '"color" | "type" | "weight"'.
getValue( fruit, 'name' );