var cardMng = require('./cardManager');

module.exports = function (io) {
	var module = {};
	module.rooms = [];
	
	function getCssValidSocketId(socketId) {
		return socketId.substring(2);
	}
	
	function getUniqueRoomName(adminSocketId) {
		//possible collision
		var lowerCaseSocketId = adminSocketId.toLowerCase();
		return lowerCaseSocketId.substring(0, 5);
	}
	
	function getRoomPlayers(roomName) {
		return module.rooms.filter(r => r.name == roomName)[0].players;
	}
	
	function getRoomCards(roomName) {
		return module.rooms.filter(r => r.name == roomName)[0].cards;
	}
	
	module.connection = function (socket){
		socket.on('newPlayer', function (playerName, roomName){
			var currentPlayer = {
				id: getCssValidSocketId(socket.id),
				name: playerName
			}
			var room = module.rooms.filter(r => r.name == roomName);
			if(roomName === '' || room.length == 0) {
				roomName = getUniqueRoomName(getCssValidSocketId(socket.id));
				var room = {name: roomName, players: []};
				module.rooms.push(room);
			}			
			socket.roomName = roomName;
			socket.join(roomName);
			
			getRoomPlayers(socket.roomName).push(currentPlayer);
			io.to(socket.roomName).emit('roomPlayers', JSON.stringify(getRoomPlayers(socket.roomName)), socket.roomName);
			console.log('user ' + socket.id + ' connected');
		});

		socket.on('disconnect', function () {
			io.emit('playerDisconnected', getCssValidSocketId(socket.id));
			if(!socket.roomName)
				return;
			var players = getRoomPlayers(socket.roomName);
			var disconnectedPlayerIndex = players.findIndex(function(p){ return p.id == getCssValidSocketId(socket.id)});
			if(disconnectedPlayerIndex >= 0) {
				players.splice(disconnectedPlayerIndex, 1);
				socket.leave(socket.roomName);
				if(players.length == 0) {
					var roomToDeleteIndex = module.rooms.findIndex(function(r){ return r.name == socket.roomName});
					module.rooms.splice(roomToDeleteIndex, 1);
				}
			}
			console.log('user ' + socket.id + ' disconnected');
		});

		socket.on('selectPict', function (selectedPicName) {
			var cards = getRoomCards(socket.roomName);
			if(!cards)
				return;
				
			var commonCardConfig = cardMng.getCardConfigById(cards.commonCard);
			if(!commonCardConfig.cardPics[selectedPicName])
				return;
				
			var newCommonCard;
			if(cards.playerHands[getCssValidSocketId(socket.id)].length > 0)
				newCommonCard = cards.playerHands[getCssValidSocketId(socket.id)].splice(0, 1)[0];
			else
				newCommonCard = -1;
			cards.commonCard = newCommonCard;
			
			var newCurrentPlayerCardId = cards.playerHands[getCssValidSocketId(socket.id)][0];
			
			io.to(socket.roomName).emit('changeCommonCard', cardMng.getCommonCardMarkup(newCommonCard));
			socket.emit('changePlayerCard', cardMng.getPlayerCardMarkup(newCurrentPlayerCardId));
		});

		socket.on('start', function () {
			var players = getRoomPlayers(socket.roomName);
			var room = module.rooms.filter(r => r.name == socket.roomName)[0];
			room.cards = cardMng.prepareCards(players);
			
			for(var i = 0; i < players.length; i++) {
				var currentPlayerCardId = room.cards.playerHands[players[i].id][0];
				io.to("/#" + players[i].id).emit('changePlayerCard', cardMng.getPlayerCardMarkup(currentPlayerCardId));
			}
			io.to(socket.roomName).emit('changeCommonCard', cardMng.getCommonCardMarkup(room.cards.commonCard));
			console.log('start');
		});
	};
	
	return module;
};