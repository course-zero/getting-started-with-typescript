// imports
import Types, {
    getSchool, School, Teacher, Student
} from '../lib/api';

// get default `School` instance
const school: School = getSchool();

// create people for the school
const monica = new Student( 1, 'Monica', 'Geller', '04-22-1969' );
const rachel = new Student( 2, 'Rachel', 'Green', '05-05-1969' );
const phoebe = new Student( 3, 'Phoebe', 'Buffay', '02-16-1970' );
const ross = new Teacher( 1, 'Ross', 'Geller', 'Paleontology,Music' );
const joey = new Teacher( 2, 'Joey', 'Tribbiani', 'Dance,Acting' );

// add students to school
school.addPerson( ross );
school.addPerson( joey );
school.addPerson( monica );
school.addPerson( rachel );
school.addPerson( phoebe );

// find people in the school
const s = school.findPerson( 1, Types.Student ); 
const t = school.findPerson( 2, Types.Teacher ); 

console.log(
    'Student %s is %d years old.',
    s.getFullName(), (s as Student).getAge()
);

console.log(
    'Can teacher %s teach dance? %s.',
    t.getFullName(), (t as Teacher).canTeach( 'Dance' )
);