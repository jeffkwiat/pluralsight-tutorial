var fs = require('fs');
var http = require('http');

http.createServer(function(request, response) {
  response.writeHead('200', {'Content-Type': 'text/plain'});
  if (request.url === '/file.txt') {
    fs.createReadStream(__dirname + '/file.txt').pipe(response);
  } else {
    response.end("Hello World");
  }
}).listen(process.env.PORT, process.env.IP);
console.log('Server is running!');