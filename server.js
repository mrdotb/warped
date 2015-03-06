//my little server
var express = require('express');
var app     = express();
var path = require('path');

app.use(express.static(__dirname + '/public'));

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.listen(1337);
console.log('Magic happen on port 1337');