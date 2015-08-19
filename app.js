var express = require('express'); // get the module so you can work with it
var app = express(); // create the Express app

// set up a route
app.get('/', function (req, res) {
  res.send('Hello Nodejs');
});

// set up which port the server should run on
app.listen(3000);