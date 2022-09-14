export const cpp: Subjects.Cpp = new Subjects.Cpp();
export const java: Subjects.Java = new Subjects.Java();
export const react: Subjects.React = new Subjects.React();

export const cTeacher: Subjects.Teacher = {
  firstName: 'Franchesco',
  lastName: 'Totti',
  experienceTeachingC: 10
};

console.log('C++');
cpp.teacher = cTeacher;
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

console.log('C++');
java.teacher = cTeacher;
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

console.log('C++');
react.teacher = cTeacher;
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
