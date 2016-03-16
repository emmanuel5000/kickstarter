var fs = require("fs");
var buf = new Buffer(4096);
var http = require('http');
var inx = "index.html";
var inx1 = "/home/lin/Desktop/cmpe172/starter/index.html";
const PORT = 8080;
var sizeoffile = 4096;  
function req(request, response)
{
response.end(buf.slice(0,sizeoffile).toString());
} 

var server = http.createServer(req);

fs.open(inx1, 'r', function(err, fd) {
   if (err) {
       return console.error(err);
   }
   console.log("successfully opened " + inx);
   console.log("attemping to read " + inx);
   fs.read(fd, buf, 0, buf.length, 0, function(err,sizeoffile){
      if (err){
         console.log("unable to read" + inx);
      }
      console.log("reading content: ");
      
     
      if(sizeoffile > 0){
	  console.log("filesize: " + sizeoffile);
	  server.listen(PORT,function(){
	      console.log("Server listening on: http://localhost:%s", PORT);
	  });
   
 }
   });
});




