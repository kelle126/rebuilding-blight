var express = require('express');
var net    = require('net');

var port = process.env.PORT || 5000;
var apikey = process.env.HOSTEDGRAPHITE_APIKEY;

var app = express();

var socket = net.createConnection(2003, "carbon.hostedgraphite.com", function() {
   socket.write(apikey + ".request.time "+ new Date() +"\n");
   socket.end();
});
 
app.get('/', function(request, response) {
    response.sendfile(__dirname + '/public/index.html');
}).configure(function() {
    app.use('/', express.static(__dirname + '/public/'));
}).listen(port);
