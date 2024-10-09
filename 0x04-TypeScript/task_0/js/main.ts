interface Student {
firstName: string;
lastName: string;
age: number;
location: string
}

let student1: Student = {
firstName: 'Bob',
lastName: 'Lee',
age: 23,
location: 'Lagos'
};

let student2: Student = {
firstName: 'Lynn',
lastName: 'Nana',
age: 22,
location: 'Nairobi'
};

const studentsList: Student[] = [student1, student2];

const table =  document.createElement('table');
const tableBody =  document.createElement('tbody');

studentsList.forEach((student) => {
const row = document.createElement('tr');

const firstNameCell = document.createElement('td');
firstNameCell.textContent = student.firstName;
row.appendChild(firstNameCell);

const locationCell = document.createElement('td');
locationCell.textContent = student.location;
row.appendChild(locationCell);

tableBody.appendChild(row);
});

table.appendChild(tableBody);
document.body.appendChild(table);
