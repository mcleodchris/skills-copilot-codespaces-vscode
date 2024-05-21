// create webserver
// var express = require('express');

// var app = express();
// var port = 3000;

// app.get('/', function(req, res) {
//     res.send('Hello World');
// });

// app.listen(port, function() {
//     console.log('Server started on http://localhost:' + port);
// });

// Path: comments.js
// create webserver
var express = require('express');

var app = express();
var port = 3000;

app.get('/', function(req, res) {
    res.send('Hello World');
});

app.get('/comments', function(req, res) {
    res.send('This is the comments page');
});

app.listen(port, function() {
    console.log('Server started on http://localhost:' + port);
});

// Path: comments.js
// create webserver
var express = require('express');

var app = express();
var port = 3000;

app.get('/', function(req, res) {
    res.send('Hello World');
});

app.get('/comments', function(req, res) {
    res.send('This is the comments page');
});

app.get('/comments/:id', function(req, res) {
    res.send('This is the comments page for id ' + req.params.id);
});

app.listen(port, function() {
    console.log('Server started on http://localhost:' + port);
});

// Path: comments.js
// create webserver
var express = require('express');

var app = express();
var port = 3000;

app.get('/', function(req, res) {
    res.send('Hello World');
});

app.get('/comments', function(req, res) {
    res.send('This is the comments page');
});

app.get('/comments/:id', function(req, res) {
    res.send('This is the comments page for id ' + req.params.id);
});

app.post('/comments', function(req, res) {
    res.send('This is the comments page');
});

app.listen(port, function() {
    console.log('Server started on http://localhost:' + port);
});

// Path: comments.js
// create webserver
var express = require('express');

var app = express();
var port = 3000;

app.get('/', function(req, res) {
    res.send('Hello World');
});

app.get('/comments', function(req, res) {
    res.send('This is the comments page');
});