var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname + '/views/webpages/'

router.use(function (req, res, next){
	console.log("/" + req.method);
	next();
});

router.get("/",function(req, res){
	res.sendFile(path + "index.html");
});

router.get("/about",function(req, res){
	res.sendFile(path + "about.html");
});

router.get("/login",function(req, res){
	res.sendFile(path + "login.html");
});

router.get("/accountman",function(req, res){
	res.sendFile(path + "accountman.html");
});

router.get("/CreateAccount",function(req, res){
	res.sendFile(path + "CreateAccount.html");
});

router.get("/viewParkingMap",function(req, res){
	res.sendFile(path + "viewParkingMap.html");
});

router.get("/viewParkingSpots",function(req, res){
	res.sendFile(path + "viewParkingSpots.html");
});

app.use("/",router);
app.use("*",function(req,res){
	res.sendFile(path +"404.html")
});
app.listen(3000,function(){
	console.log("Live at Port 3000");
});
