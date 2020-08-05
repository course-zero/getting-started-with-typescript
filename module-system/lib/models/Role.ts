// imports
import getAge from '../utils/getAge';
import { RoleInterface } from './types';

enum Roles {
    Student,
    Teacher,
}

class Role implements RoleInterface{
    constructor(
        public id: number,
        public firstName: string,
        public lastName: string
    ){}

    getFullName(): string {
        return `${ this.firstName } ${ this.lastName }`;
    }
}

class Student extends Role {
    private dob: Date;

    constructor( id: number, firstName: string, lastName: string, _dob: string ){
        super( id, firstName, lastName );
        this.dob = new Date( _dob );
    }

    getAge(): number {
        return getAge( this.dob );
    }
}

class Teacher extends Role {
    private subjects: string[];

    constructor( id: number, firstName: string, lastName: string, subjects: string ){
        super( id, firstName, lastName );
        this.subjects = subjects.split( ',' );
    }

    canTeach( subject: string ): boolean {
        return this.subjects.includes( subject );
    }
}

export { Roles as default, Role, Student, Teacher };