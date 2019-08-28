const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const uuid = require('uuid/v4');

var app = express();

var port = 3000;

app.use(session({
	genid: (req) => {
		console.log("Indside the session");
		console.log(req.sessionID);
		return uuid();
	},
	secret: "test",
	resave: false,
	saveUninitialized: true
}));

app.get("/", function(req, res) {
	console.log("Inside req callback and sessionID is ",req.sessionID);
	res.send("Hitting the landing page.\n");
});

app.listen(port, err => {
	if (err)
		throw err 
	console.log("Sever started on port " + port);
});
