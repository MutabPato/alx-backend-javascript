interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

let student1: Student = {
	firstName: "Jane";
        lastName: "Doe";
        age: 21;
        location: "Nigeria";
};

let student2: Student = {
        firstName: "John";
        lastName: "Doe";
        age: 22;
        location: "Morocco";
};

const studentsList: Student[] = [student1, student2];

// Render table
document.addEventListner("DOMContentLoaded", () => {
	const table = document.createElement("table");
	const tableHeader = table.createTHead();
	const headerRow = tableHeader.insertRow();

	const headerCell1 = document.createElement("th");
	headerCell1.textContent = "First Name";
	headerRow.appendChild(headerCell1);

	const headerCell2 = document.createElement("th");
	headerCell2.textContent = "Location";
	headerRow.appendChild(headerCell2);

	const tableBody = table.createTBody();
	studentsList.forEach((student) => {
		const row = tableBody.insertRow();

		const cell1 = row.insertCell();
		cell1.textContent = student.firstName;

		const cell2 = row.insertCell();
                cell2.textContent = student.location;
	});
	
	document.body.appendChild(table);
});
