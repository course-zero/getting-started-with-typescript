import { RoleInterface } from './types';
declare enum Roles {
    Student = 0,
    Teacher = 1
}
declare class Role implements RoleInterface {
    id: number;
    firstName: string;
    lastName: string;
    constructor(id: number, firstName: string, lastName: string);
    getFullName(): string;
}
declare class Student extends Role {
    private dob;
    constructor(id: number, firstName: string, lastName: string, _dob: string);
    getAge(): number;
}
declare class Teacher extends Role {
    private subjects;
    constructor(id: number, firstName: string, lastName: string, subjects: string);
    canTeach(subject: string): boolean;
}
export { Roles as default, Role, Student, Teacher };
