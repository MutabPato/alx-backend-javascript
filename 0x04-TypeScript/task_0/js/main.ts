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


