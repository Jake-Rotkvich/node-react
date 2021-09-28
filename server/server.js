const express = require('express');
const one = require('./routes/module');
console.log(one);

const app = express();
app.use(express.static('public'));

app.get('/', (request, response) => {
	response.sendFile('index.html');
});

app.listen(3000, () => console.log(`Listening on port 3000...`));