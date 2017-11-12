var express = require("express");
// spawn_python.js
var util = require("util");

var cors = require('cors')
const fileUpload = require('express-fileupload');
var app = express()
app.use(cors());
app.use(fileUpload());

app.post("/login", function (req, res) {
	console.log(res);
	res.setHeader('Content-Type', 'application/json');
	let resp={horizontal:7,vertical:13};
	res.send(JSON.stringify(resp));
});


/* serves all the static files */
app.get(/^(.+)$/, function (req, res) {
	console.log('static file request : ' + req.params);
	res.sendfile(__dirname + req.params[0]);
});

var port = process.env.PORT || 5000;
app.listen(port, function () {
	console.log("Listening on " + port);
});