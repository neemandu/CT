// Import the Express module
var express = require('express');

// Import the 'path' module (packaged with Node.js)
var path = require('path');

// Create a new instance of Express
var app = express();

//Import the game file.
var ct = require('./ct');

//Create a Node.js based http server on port 8080
var server = require('http').createServer(app).listen(4000);

var io = require('socket.io').listen(server);


//Create a simple Express application
app.configure(function() {
    // Turn down the logging activity
    //app.use(express.logger('dev'));

    // Serve static html, js, css, and image files from the 'public' directory
    app.use(express.static(path.join(__dirname,'public')));
  });

//Listen for Socket.IO Connections. Once connected, start the game logic.
io.sockets.on('connection', function (socket) {
    //console.log('client connected');
	console.log("enter");
	ct.initGame(io, socket);
});
