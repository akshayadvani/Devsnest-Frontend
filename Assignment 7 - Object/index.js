//Question 1

var student = { name: "David Rayy", sclass: "VI", rollno: 12 };

console.log(Object.keys(student));

//Question 2

console.log(student)

delete student.rollno;

console.log(student)

//Question 3

const propOwn = Object.getOwnPropertyNames(student);
console.log(propOwn.length);
