var express = require('express');

var app = express.createServer(express.logger());

function readFileSync_encoding(filename)
{
    var content = fs.readFileSync(filename);
    
    var buffer = new buffer(27)
    return buffer.toString('utf8');
}

app.get('/', function(request, response) {
   var buffer = new Buffer(27);
   response.send(readFileSync_encoding("index.html")
    //buffer.write(fs.readFileSync('index.html'), "utf-8");
   //response.send(buffer.toString("utf-8", 0, 27);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
