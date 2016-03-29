var express = require('express');
var http = require('http');
var socketIo = require('socket.io');
var path = require('path');

var app = express();
var server = http.createServer(app);
var io = socketIo.listen(server);

var viewsFolder = "/views";

app.use(express.static(__dirname + viewsFolder));

var playerName = "";

io.on('connection', function (socket) {
	io.emit('new player', playerName);

	console.log('a user connected');

	socket.on('disconnect', function () {
		io.emit('exit user');
		//to implement

		console.log('user disconnected');
	});

	socket.on('start', function () {
		console.log('start');
		//do stuff
	});
});

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, viewsFolder, 'index.htm'));
});

app.post('/game', function (req, res) {
	res.sendFile(path.join(__dirname, viewsFolder, 'game.htm'));
});

server.listen(9000, function () {
	console.log('Server has started at 9000 port');
});