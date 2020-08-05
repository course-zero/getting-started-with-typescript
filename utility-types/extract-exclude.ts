// union type
type ColorSet = 'green' | 'red' | 'blue' | 4 | (() => string);

// type GreenSet = "green" 
type GreenSet = Extract<ColorSet, 'green'>;

// type SafeSet = "green" | "blue"
type SafeSet = Extract<ColorSet, 'green' | 'blue'>;

// type stringSet = "green" | "red" | "blue"
// type ExstringSet = "green" | "red" | "blue"
type stringSet = Extract<ColorSet, string>;
type ExstringSet = Exclude<ColorSet, number | Function>;

// type FuncSet = () => string
type FuncSet = Extract<ColorSet, Function>;

// type literalSet = "green" | "red" | "blue" | 4
type LiteralSet = Exclude<ColorSet, object>;