const express = require('express');
const fs = require('fs');

const app = express();
const port = 3001;

app.get('/read-file', (req, res) => {
  // Replace 'path/to/your/file.txt' with the actual path to your file
  const filePath = 'database/taylor_swift.txt';

  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      res.status(500).send('Error reading the file');
    } else {
      res.send(data);
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});