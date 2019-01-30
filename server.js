const express = require('express');
const app = express();

app.get('/', function (req, res) {
	res.setHeader('Content-Type', 'text/html; charset=utf-8');
	res.send('strona główna');
})

app.use('/store', function (req, res, next) {
	console.log('pośrednik żądania store');
    next();
})

app.get('/store', function (req, res) {
	res.setHeader('content-Type', 'text/html; charset=utf-8');
	res.send('sklep');
})

app.listen(3000);