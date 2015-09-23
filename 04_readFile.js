var express = require('express');
var app = express();
var fs = require('fs');

app.get('/', function (req, res) {
	
	fs.readFile('./public/index.html', 'utf-8', function (err, data) {
		res.send(data);
	});
	
});

app.get('/cay', function (req, res) {
	
	fs.readFile('./public/img/cay.jpg', function (err, data) {
		res.send(data);
	});
	
});

app.get('/package', function (req, res) {
	
	fs.readFile('package.json', 'utf-8', function (err, data) {
		res.send(data);
	});
	
});

app.listen(3000);