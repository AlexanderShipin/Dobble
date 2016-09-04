var cardMng = require('./cardManager');

module.exports = function (io) {
	var module = {};
	module.players = [];
	module.cards = {};
	
	function getCssValidSocketId(socketId){
		return socketId.substring(2);
	}
	
	module.connection = function (socket){
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
			if(!module.cards)
				return;
				
			var commonCardConfig = cardMng.getCardConfigById(module.cards.commonCard);
			if(!commonCardConfig.cardPics[selectedPicName])
				return;
				
			var newCommonCard;
			if(module.cards.playerHands[getCssValidSocketId(socket.id)].length > 0)
				newCommonCard = module.cards.playerHands[getCssValidSocketId(socket.id)].splice(0, 1)[0];
			else
				newCommonCard = -1;				
			
			var newCurrentPlayerCardId = module.cards.playerHands[getCssValidSocketId(socket.id)][0];
			module.cards.commonCard = newCommonCard;
			
			io.emit('changeCommonCard', cardMng.getCommonCardMarkup(newCommonCard));
			socket.emit('changePlayerCard', cardMng.getPlayerCardMarkup(newCurrentPlayerCardId));
		});

		socket.on('readyToStart', function () {
			module.cards = cardMng.prepareCards(module.players);
			
			for(var i = 0; i < module.players.length; i++){
				var currentPlayerCardId = module.cards.playerHands[module.players[i].id][0];
				io.to("/#" + module.players[i].id).emit('changePlayerCard', cardMng.getPlayerCardMarkup(currentPlayerCardId));
			}
			io.emit('changeCommonCard', cardMng.getCommonCardMarkup(module.cards.commonCard));
			console.log('readyToStart');
		});
	};
	
	return module;
};