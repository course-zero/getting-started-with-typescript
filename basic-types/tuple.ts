// define a tuple
let student: [ string, number, boolean ] = [ 'Ross Geller', 27, true ];

// legal: override values
student = [ 'Monica Geller', 25, false ];
student[1] = 28;

// illegal: override values
student = [ true, 'Mike Doe', false ];
student[1] = false;