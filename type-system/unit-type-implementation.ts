// Type: let executeSafe: (task: string) => 0
let executeSafe = ( task: string ): 0 => {
    console.log( `executing: ${ task }` );
    return 0;
};

// Error: This condition will always return 'false' since the types '1' and '0' have no overlap.
console.log( 1 == executeSafe( 'MY_TASK' ) );