var fs = require("fs");
var buf = new Buffer(4096);
var http = require('http');
var inx = "./index.html";
const PORT = 8080;
var sizeoffile = 4096;  

function req(request, response)
{
console.log("attemping to read " + inx);
response.writeHead(200, {'Content-Type':'text/html'});

fs.readFile(inx, 'utf8', function (err,buf){
if(err){
console.error(err);
}
console.log("reading: " + inx);



response.write(buf);

response.end();
});
console.log("read finished");
}

var server = http.createServer(req);
    
      if(sizeoffile > 0){
	  console.log("filesize: " + sizeoffile);
	  server.listen(PORT,function(){
	      console.log("Server listening on: http://localhost:%s", PORT);
	  });
	  }





