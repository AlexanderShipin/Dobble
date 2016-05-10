var cardMng = require('./cardManager');

module.exports = function (io) {
	var module = {};
	module.players = [];
	
	function getCssValidSocketId(socketId){
		return socketId.substring(2);
	}
	
	module.connection = function (socket){
		var cards;
		
		socket.on('newPlayer', function (playerName) {
			var currentPlayer = {
				id: getCssValidSocketId(socket.id),
				name: playerName//
			}
			module.players.push(currentPlayer);
			io.emit('playerConnected', currentPlayer);
			console.log('user ' + socket.id + ' connected');
		});

		socket.on('disconnect', function () {
			io.emit('playerDisconnected', getCssValidSocketId(socket.id));
			//
			var disconnectedPlayerIndex = module.players.findIndex(function(p){ return p.id == getCssValidSocketId(socket.id)});
			if(disconnectedPlayerIndex > 0)
				module.players.splice(disconnectedPlayerIndex, 1);
			console.log('user ' + socket.id + ' disconnected');
		});

		socket.on('selectPict', function () {
			var playerCard = cards.currentPlayerCard;
			
			if(cards.playerHands[getCssValidSocketId(socket.id)].length > 0)
				cards.currentPlayerCard = cards.playerHands[getCssValidSocketId(socket.id)].splice(0, 1)[0];//todo: empty card when done
				
			io.emit('changeCards', playerCard, cards.currentPlayerCard);//todo: empty card when done
		});

		socket.on('readyToStart', function () {
			cards = cardMng.prepareCards(module.players);
			
			cards.currentPlayerCard = cards.playerHands[getCssValidSocketId(socket.id)].splice(0, 1)[0];
			io.emit('changeCards', cards.firstCard, cards.currentPlayerCard);
			console.log('readyToStart');
		});
	};
	
	return module;
};