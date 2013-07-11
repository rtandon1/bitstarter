var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
   var buffer = new Buffer(50);
  //response.send('Hello World 2!');
   buffer.write(fs.readFileSync(index.html, function(err, data)), "utf-8");
   response.send(buffer.toString("utf-8", 0, 30);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
