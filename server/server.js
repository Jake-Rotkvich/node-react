const express = require('express');
const fs = require('fs');

fs.readFile('test/apple/testing.txt', 'utf8', (err, data) => {
	if (err) throw err;
	console.log(data);
  });

const app = express();
app.use(express.static('public'));

app.get('/', (request, response) => {
	response.sendFile('index.html');
});

app.listen(3000, () => console.log(`Listening on port 3000...`));