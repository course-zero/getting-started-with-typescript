import Roles, { Role as Person, Student, Teacher } from './Role';
export declare class Institution {
    private students;
    private teachers;
    constructor(students?: Student[], teachers?: Teacher[]);
    addPerson(person: Person): Institution;
    findPerson(id: number, kind?: Roles): Person;
}
