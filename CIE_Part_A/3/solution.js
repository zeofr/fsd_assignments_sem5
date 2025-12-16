/*
Write a JavaScript program using closures to manage student academic data. 
Accept USN, Subject Code, Subject Name, CIE Marks, and SEE Marks. 
Use closures to keep CIE and SEE marks private. 
Write a method to compute and return the total marks. 
Display student details with total.
*/

function createStudent(usn, subCode, subName, cie, see) {
    let cieMarks = cie;
    let seeMarks = see;
    
    return {
        getDetails() {
            return {
                usn: usn,
                subjectCode: subCode,
                subjectName: subName,
                totalMarks: cieMarks + seeMarks
            };
        }
    };
}

// Test - Demonstrating closure
const student = createStudent('1RV21CS001', 'CS101', 'Full Stack Development', 40, 85);
const details = student.getDetails();

console.log('=== Student Academic Data ===');
console.log('USN:', details.usn);
console.log('Subject Code:', details.subjectCode);
console.log('Subject Name:', details.subjectName);
console.log('Total Marks:', details.totalMarks);

// Demonstrating that marks are private
console.log('\n=== Closure Privacy ===');
console.log('Accessing student.cieMarks:', student.cieMarks); // undefined - private!
console.log('Accessing student.seeMarks:', student.seeMarks); // undefined - private!
console.log('Accessing through getDetails():', details.totalMarks); // Works!
