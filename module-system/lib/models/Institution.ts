// imports
import Roles, {
    Role as Person, Student, Teacher
} from './Role';

export class Institution {
    constructor(
        private students: Student[] = [],
        private teachers: Teacher[] = []
    ) {}

    addPerson( person: Person ): Institution {
        if( person instanceof Student ) {
            this.students.push( person );
        } else if( person instanceof Teacher ) {
            this.teachers.push( person );
        }

        return this; // to make this method chainable
    }

    findPerson( id: number, kind = Roles.Student ): Person {
        if( kind === Roles.Student ) {
            return this.students.find( ( student ) => {
                return student.id === id;
            } );
        } else {
            return this.teachers.find( ( teacher ) => {
                return teacher.id === id;
            } );
        }
    }
}