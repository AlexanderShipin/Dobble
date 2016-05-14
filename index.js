var config = {
	viewsFolder: '/views'
};

var express = require('express');
var http = require('http');
var socketIo = require('socket.io');

var app = express();
var server = http.createServer(app);
var router = express.Router();
var io = socketIo.listen(server);

var requestHandlers = require('./requestHandlers')(io, config);

app.use(express.static(__dirname + config.viewsFolder));

router.get('/', requestHandlers.index);
router.get('/players', requestHandlers.players);
app.use('', router);

server.listen(9000, function () {
	console.log('Server has started at 9000 port');
});