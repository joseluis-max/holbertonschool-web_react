import { seq } from "immutable";

export default function printBestStudents(grades) {
  const filtered = seq(grades)
    .filter((student) => student.score > 70)
    .map((student) => {
      const { firstName, lastName } = student;
      return {
        ...student,
        firstName: firstName.charAt(0).toUpperCase() + firstName.slice(1),
        lastName: lastName.charAt(0).toUpperCase() + lastName.slice(1),
      };
    });
  console.log(filtered.toJS());
}
