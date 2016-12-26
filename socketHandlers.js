var cardMng = require('./cardManager');

module.exports = function (io) {
	var module = {};
	module.rooms = [];
	
	function getUniqueRoomName(adminSocketId) {
		//possible collision
		var lowerCaseSocketId = adminSocketId.toLowerCase();
		return lowerCaseSocketId.substring(0, 5);
	}
	
	function getRoom(roomName) {
		return module.rooms.find(r => r.name == roomName);
	}
	
	module.connection = function (socket){
		socket.on('newPlayer', function (playerName, roomName){
			var currentPlayer = {
				id: socket.id,
				name: playerName
			}
			var room = module.rooms.find(r => r.name == roomName);
			if(roomName === '' || !room) {
				roomName = getUniqueRoomName(socket.id);
				var room = {name: roomName, players: []};
				module.rooms.push(room);
			}			
			socket.roomName = roomName;
			socket.join(roomName);
			
			getRoom(socket.roomName).players.push(currentPlayer);
			io.to(socket.roomName).emit('roomPlayers', JSON.stringify(getRoom(socket.roomName).players), socket.roomName);
			console.log('user ' + socket.id + ' connected');
		});

		socket.on('disconnect', function () {
			io.emit('playerDisconnected', socket.id);
			if(!socket.roomName)
				return;
			var players = getRoom(socket.roomName).players;
			var disconnectedPlayerIndex = players.findIndex(function(p){ return p.id == socket.id});
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
			var room = getRoom(socket.roomName);
			var cards = room.cards;
			if(!cards)
				return;
				
			var commonCardConfig = cardMng.getCardConfigById(cards.commonCard);
			if(!commonCardConfig.cardPics[selectedPicName])
				return;
				
			var newCommonCard;
			if(cards.playerHands[socket.id].length > 0)
				newCommonCard = cards.playerHands[socket.id].splice(0, 1)[0];
			else
				newCommonCard = -1;
			cards.commonCard = newCommonCard;
			
			var newCurrentPlayerCardId = cards.playerHands[socket.id][0];
			
			io.to(socket.roomName).emit('changeCommonCard', cardMng.getCommonCardMarkup(newCommonCard));
			socket.emit('changePlayerCard', cardMng.getPlayerCardMarkup(newCurrentPlayerCardId));
			
			if(cards.playerHands[socket.id].length == 0) {
				var finishedPlayer = room.players.find(p => p.id == socket.id);
				var time = process.hrtime(room.startTime);
				room.finishedPlayers.push({id: socket.id, name: finishedPlayer.name, time: time[0] + Math.round(time[1]/1000000000 * 100) / 100 + "s" });
				room.finishedPlayers.forEach(fp => io.to(fp.id).emit('playerFinished', room.finishedPlayers));
			}		
		});

		socket.on('start', function () {
			var room = getRoom(socket.roomName);
			var players = room.players;	
			room.cards = cardMng.prepareCards(players);
			
			for(var i = 0; i < players.length; i++) {
				var currentPlayerCardId = room.cards.playerHands[players[i].id][0];
				io.to(players[i].id).emit('changePlayerCard', cardMng.getPlayerCardMarkup(currentPlayerCardId));
			}
			io.to(socket.roomName).emit('start');
			io.to(socket.roomName).emit('changeCommonCard', cardMng.getCommonCardMarkup(room.cards.commonCard));
			room.finishedPlayers = [];
			room.startTime = process.hrtime();
			console.log('start');
		});
	};
	
	return module;
};