const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

app.use(cookieParser());

let user = {
	name: "Tiger",
	age: 35,
	sex: "male"
};

app.get("/", function (req, res) {
	return res.send("server started\n");
});

app.get("/setUser", function(req, res){
	res.cookie("userData", user, {maxAge: 10000});
	return res.send("cookie set");

});

app.get("/getUser", function (req, res) {
	return res.send(req.cookies);
});

app.listen(3000, (err) => {
	if(err)
	throw err
	console.log("server started on port 3000");
});
