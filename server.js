var app = require('express')();
var http = require('http').Server(app);
//var server = http.createServer();
var fs = require('fs');
var data = "";
var port = 3000;
var host = 'http://localhost'; 
function handel(req, res){ 
res.writeHead(200,{'Content-Type':'text-plain'});
res.write('Hello world');
res.end();
}
app.get('/',function(req, res){
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
	}});
	
});

//server.on('request', readfile);
http.listen(port);
console.log('connect to server');
