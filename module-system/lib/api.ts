// re-export classes
export { Institution as School } from './models/Institution';
export { default, Teacher, Student } from './models/Role';

// imports
import { Institution as School } from './models/Institution';

// single instance of `School` class
let school: School = undefined;

// get singleton instance
export const getSchool = (): School => {
    if( school === undefined ) {
        school = new School();
    }

    return school;
};