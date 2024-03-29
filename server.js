"use strict"
var express = require('express');
var app = express();
var path = require('path');

app.use(express.static('public'))

app.get('/', function(req, res) {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

app.listen(3000, function(err) {
    console.log("app is listening");
})