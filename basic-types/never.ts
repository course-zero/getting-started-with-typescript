// this functions throws an error, hence never returns
function oops(): never {
    throw new Error();
}

// this function runs endless `while` loop, hence never returns
function blackHole(): never {
    while( true ) {}
}