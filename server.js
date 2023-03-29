var express = require('express');
var site = require('./App.tsx');
var app = express();

app.get('/', function (request, response) {
  response.send(site);
});

var PORT = 3000;
app.listen(PORT, function () {
  console.log('http://localhost:' + PORT);
});
