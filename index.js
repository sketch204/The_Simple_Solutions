let express = require('express');
let pug = require('pug');

let app = express();

app.get('*', function(req, res) {
    console.log("Requrested Path: " + __dirname + req.path);
    res.sendFile(__dirname + req.path);
});

app.listen(3000, function() {
    console.log("Server started on port 3000");
});
