var express = require('express');
var http = require('http');
var socketIo = require('socket.io');
var path = require('path');
var bodyParser = require("body-parser");

var app = express();
var server = http.createServer(app);
var io = socketIo.listen(server);

var viewsFolder = "/views";

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + viewsFolder));

var playerName = "";

var deck = [];//todo: avoid globals
var firstCard;
var currentPlayerCard;
function fillDeck(players){//todo: players
	var n = 55;
	var indexesTmp = [];
	for(var i = 0; i < n; i++){
		indexesTmp[i] = i;
	}
	firstCard = getRandromCard(indexesTmp);
	var cardsForPlayers = indexesTmp.length;
	for(var i = 0; i < cardsForPlayers; i++){
		deck.push(getRandromCard(indexesTmp));
	}
};

function getRandromCard(indexes){
	var randomCard = Math.floor(Math.random() * indexes.length);
	return indexes.splice(randomCard, 1)[0];
}

io.on('connection', function (socket) {
	io.emit('newPlayer', playerName);

	console.log('a user connected');

	socket.on('disconnect', function () {
		io.emit('exit user');
		//to implement

		console.log('user disconnected');
	});

	socket.on('selectPict', function () {
		var playerCard = currentPlayerCard;
		
		if(deck.length > 0)
			currentPlayerCard = deck.splice(0, 1)[0];//todo: empty card when done
			
		io.emit('changeCards', playerCard, "back");//todo: empty card when done
	});

	socket.on('readyToStart', function () {
		deck = [];
		var players = 1;
		fillDeck(players);
		
		currentPlayerCard = deck.splice(0, 1)[0];
		io.emit('changeCards', firstCard, currentPlayerCard);
		console.log('readyToStart');
	});
});

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, viewsFolder, 'index.htm'));
});

app.post('/game', function (req, res) {
	playerName = req.body.playerName;
	res.sendFile(path.join(__dirname, viewsFolder, 'game.htm'));
});

server.listen(9000, function () {
	console.log('Server has started at 9000 port');
});