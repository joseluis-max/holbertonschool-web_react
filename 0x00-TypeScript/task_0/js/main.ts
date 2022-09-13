interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Joseph',
  lastName: 'Aucoin',
  age: 68,
  location: 'Cuenca',
};

const student2: Student = {
  firstName: 'Pedro',
  lastName: 'Gonzales',
  age: 23,
  location: 'Viena',
};

const studentList = [student1, student2];

const table = document.createElement('table');

studentList.forEach(student => {
  const row = table.insertRow();
  const cellFirstName = row.insertCell();
  const cellLocation = row.insertCell();

  cellFirstName.appendChild(
    document.createTextNode(student.firstName)
  );

  cellLocation.appendChild(
    document.createTextNode(student.location)
  );
});

document.body.appendChild(table);
