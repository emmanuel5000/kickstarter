var fs = require("fs");
var buf = new Buffer(4096);
var http = require('http');
var inx = "index.html";
//var inx1 = "home/lin/Desktop/cmpe172/starter/.index.html";
const PORT = 8080;
var sizeoffile = 4096;  

function req(request, response)
{
console.log("attemping to read " + inx);

response.writeHead(200, {'Content-Type': 'text/html'});
response.end(fs.readFileSync(inx));

console.log("read finished");
}

var server = http.createServer(req);
    
      if(sizeoffile > 0){
	  console.log("filesize: " + sizeoffile);
	  server.listen(PORT,function(){
	      console.log("Server listening on: http://localhost:%s", PORT);
	  });
	  }





