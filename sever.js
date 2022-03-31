var http = require('http');
var dt = require('./MyDate')

console.log('server iniciado em http://localhost:8080')
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('HI MY FUCK CREATOR!'+ dt.myDateTime());
}).listen(8080); 