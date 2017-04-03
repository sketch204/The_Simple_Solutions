let express = require('express');
let pug = require('pug');

let app = express();

var port = process.env.PORT || 8080;

app.get('*', function(req, res) {
    console.log("Requrested Path: " + __dirname + req.path);
    res.sendFile(__dirname + req.path);
});

app.listen(port, function() {
    console.log("Server started on port 80");
});
