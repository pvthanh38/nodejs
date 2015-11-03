var http = require('http');
var server = http.createServer();
var fs = require('express');

var port = 3000;
var host = 'http://localhost'; 
function handel(req, res){ 
res.writeHead(200,{'Content-Type':'text-plain'});
res.write('Hello world');
res.end();
}
server.on('request', handel);
server.listen(port);
console.log('connect to server');
