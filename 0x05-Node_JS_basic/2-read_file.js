const fs = require('fs')

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');
    const rows = data.split('\n').filter((row) => row.trim() !== '');    
    
    if (rows.length <= 1) {
	    console.log('The database is empty.');
	    return;
    }
    const header = rows[0].split(',')
    const dataRows = rows.slice(1);

    console.log(`Number of students: ${dataRows.length}`);

    const studentsByField = {};
  
    dataRows.forEach((row) => {
	    const [name, field] = row.split(',');
	    if (field && name) {
		    if (!studentsByField[field]) {
			    studentsByField[field] = [];
		    }
			    studentsByField[field].push(name);
	    }
    });
	  Object.entries(studentsByField).foreach(([field, names]) => {
		  console.log(
		  `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`
		  );
	  });
  } catch (err) {
	  throw new Error('Cannot load the database');
}

module.exports = countStudents;
