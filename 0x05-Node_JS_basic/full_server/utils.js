const { readFile } = require('fs');

function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    readFile(filePath, (err, data) => {
      if (err) {
        reject(err);
      } else {
        try {
          // Split file content into lines and remove empty lines
          const lines = data.trim().split('\n');

          // Extract the header (first line) to know the fields
          const header = lines.shift().split(',');

          // Find the index of the necessary fields
          const firstnameIndex = header.indexOf('firstname');
          const fieldIndex = header.indexOf('field');

          if (firstnameIndex === -1 || fieldIndex === -1) {
            reject(
              new Error(
                "Invalid CSV format: Missing 'firstname' or 'field' columns",
              ),
            );
            return;
          }
          // Object to store the first names categorized by field
          const studentsByField = {};

          // Iterate over each line to process student data
          lines.forEach((line) => {
            const values = line.split(',');
            const firstname = values[firstnameIndex].trim();
            const field = values[fieldIndex].trim();

            if (firstname && field) {
              if (!studentsByField[field]) {
                studentsByField[field] = [];
              }
              studentsByField[field].push(firstname);
            }
          });

          resolve(studentsByField);
        } catch (parseErr) {
          reject(parseErr);
        }
      }
    });
  });
}

module.exports = readDatabase;
