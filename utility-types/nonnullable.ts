type SimpleValue = string | number | null | undefined;

// type SafeValue = string | number
type SafeValue = NonNullable<SimpleValue>;

// using `Exclude` utility type
// type ExSafeValue = string | number
type ExSafeValue = Exclude<SimpleValue, null | undefined>;