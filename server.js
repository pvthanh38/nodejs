var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var fs = require('fs');
var data = "";
var port = 3000;
var host = 'http://192.168.1.106'; 

app.get('/',function(req, res){
	res.sendFile('index.html');
	/*
	fs.appendFile('readme.txt','Here me', function(error){
		if(error) throw error;
		console.log("The file was save!");
	});
	fs.readFile('readme.txt',function(error, data){
		if(error){
			res.writeHead(400, {'Content-Type':'text/plain'});
			res.end('error not found file');
		}else{
			res.writeHead(200,{'Content-type':'text/html'});
			res.end(data);
	}});*/
	
});
io.on('connection',function(socket){
	socket.on('adduser', function(username){
		socket.username = username;
		console.log(socket.username);
		
	});
	socket.on('send_mgs', function(user, msg){
		io.emit('send_mgs',socket.username,user, msg);
		console.log(user);
	});
	
});


//server.on('request', readfile);
http.listen(port);
console.log('connect to server');
