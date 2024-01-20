//서버세팅 

var express = require("express"); // 객체생성 new
var app = express(); // 초기설정 해주는 함수

var port = 3100; // 포트번호 1~60000 중에서 아무거나 // 80 ,8080(오라클) , 3306(mysql)
//var server = app.listen(1, 2) // 1.포트번호 2.함수
var server = app.listen(port, function(){
    console.log("서버시작", port);
});
// 서버 끄는법 ctrl + c 
