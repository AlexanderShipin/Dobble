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
				name: playerName
			}
			module.players.push(currentPlayer);
			io.emit('playerConnected', currentPlayer);
			console.log('user ' + socket.id + ' connected');
		});

		socket.on('disconnect', function () {
			io.emit('playerDisconnected', getCssValidSocketId(socket.id));
			var disconnectedPlayerIndex = module.players.findIndex(function(p){ return p.id == getCssValidSocketId(socket.id)});
			if(disconnectedPlayerIndex >= 0)
				module.players.splice(disconnectedPlayerIndex, 1);
			console.log('user ' + socket.id + ' disconnected');
		});

		socket.on('selectPict', function (selectedPicName) {
			if(!cards)//temporary fix for last card suit click  || cards.currentPlayerCardId == -1
				return;
				
			var commonCardConfig = cardMng.getCardConfigById(cards.commonCard);
			if(!commonCardConfig.cardPics[selectedPicName])
				return;
			
			if(cards.playerHands[getCssValidSocketId(socket.id)].length > 0)
				cards.currentPlayerCardId = cards.playerHands[getCssValidSocketId(socket.id)].splice(0, 1)[0];//todo: empty card when done
			else
				cards.currentPlayerCardId = -1;				
				
			var playerCard = cards.currentPlayerCardId;
			io.emit('changeCards', cardMng.getCommonCardMarkup(playerCard), cardMng.getPlayerCardMarkup(cards.currentPlayerCardId));//todo: empty card when done
		});

		socket.on('readyToStart', function () {
			cards = cardMng.prepareCards(module.players);
			
			cards.currentPlayerCardId = cards.playerHands[getCssValidSocketId(socket.id)].splice(0, 1)[0];
			io.emit('changeCards', cardMng.getCommonCardMarkup(cards.commonCard), cardMng.getPlayerCardMarkup(cards.currentPlayerCardId));
			console.log('readyToStart');
		});
	};
	
	return module;
};