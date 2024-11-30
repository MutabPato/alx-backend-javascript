const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  const { url } = req;
  res.setHeader('Content-Type', 'text/plain');

  if (url === '/') {
    res.statusCode = 200;
    res.end('Hello Holberton School!');
  } else if (url === '/students') {
    res.statusCode = 200;
    res.write('This is the list of our students');
    const database = process.argv[2];

    countStudents(database)
      .then((output) => {
        res.end(output);
    })
      .catch((error) => {
        res.statusCode = 500;
        res.end(error.message);
      });
  } else {
        res.statusCode = 404;
        res.end('Resource not found');
  }
});

const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});

module.exports = app;
