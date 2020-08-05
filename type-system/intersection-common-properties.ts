interface Person {
    name: string;
    gender: string;
}

interface Player {
    score: number;
    gender: number;
}

// get student info
let getStudent = (): Person & Player => {
    return {
        name: 'Ross Geller',
        score: 98,
        gender: 'Male' // Type 'string' is not assignable to type 'never'.
    };
};