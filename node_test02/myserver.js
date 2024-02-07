var express = require("express");
var app = express();
var port = 3102;
var server = app.listen(port, function(){
    console.log("서버시작"+ port);
});

// ejs 세팅

var ejs = require("ejs");
app.set("views", __dirname);
app.set("view engine", "ejs");
app.engine("ejs", ejs.renderFile);

app.get("/", function(req, res){
    res.render("main.ejs");
});
app.get("/test1", function(req, res){
    res.render("test1.ejs");
});
app.get("/test2", function(req, res){
    res.render("test2.ejs");
});