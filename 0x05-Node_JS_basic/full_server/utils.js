const { readFile } = require('fs');

function readDatabase(file_path) {
  return new Promise((resolve, reject) => {
    readFile(file_path, (err, data) => {
      if (err) {
        reject(err);
      } else {
        try {
	const lines = data.trim().split('\n');
        const header = lines.shift(
      }
    });
  });
}
