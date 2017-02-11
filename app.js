/*jslint node:true */
'use strict';
var express = require('express');
var app = express();

app.use(express.static('public'));
app.use(express.static('src/views'));

app.get('/', function (req, res) {
    res.send('hello world from server');
});

app.get('/name', function (req, res) {
    res.send('my name is server bot');
});

app.listen(8080, function (error) {
    console.log('server running on port 8080');
});