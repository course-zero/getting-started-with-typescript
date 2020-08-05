// define an enum
enum Permission {
    EXECUTE = 0o1, // octal: 1
    WRITE = 0o2, // octal: 2
    WRITE_EXECUTE = EXECUTE | WRITE, // octal: 3
    READ = 0o4, // octal: 4
    READ_EXECUTE = READ | EXECUTE, // octal: 5
    READ_WRITE = READ | WRITE, // octal: 6
    READ_WRITE_EXECUTE = READ | WRITE | EXECUTE, // octal: 7
}

// log `Permission` enum
console.log( Permission );