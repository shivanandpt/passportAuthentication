const express = require('express');
const cookieParser = require('cookie-parser');
const uuid = require('uuid/v4');

var app = express();

var port = 3000;

app.get("/", function(req, res) {
	const uniqueId = uuid();
	res.send("Hitting the landing page. Generated uniqueId as " + uniqueId + "\n");
});

app.listen(port, err => {
	if (err)
		throw err 
	console.log("Sever started on port " + port);
});
