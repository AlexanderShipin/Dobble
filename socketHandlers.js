var cardMng = require('./cardManager');

module.exports = function (io, playerName) {
	var module = {};
	
	module.connection = function (socket){
		var cards;
		io.emit('newPlayer', playerName);

		console.log('a user connected');

		socket.on('disconnect', function () {
			io.emit('exit user');
			//to implement

			console.log('user disconnected');
		});

		socket.on('selectPict', function () {
			var playerCard = cards.currentPlayerCard;
			
			if(cards.playerHands[0].length > 0)//todo: get player id from socket
				cards.currentPlayerCard = cards.playerHands[0].splice(0, 1)[0];//todo: get player id from socket//todo: empty card when done
				
			io.emit('changeCards', playerCard, cards.currentPlayerCard);//todo: empty card when done
		});

		socket.on('readyToStart', function () {
			var players = 1;
			cards = cardMng.prepareCards(players);
			
			cards.currentPlayerCard = cards.playerHands[0].splice(0, 1)[0];//todo: get player id from socket
			io.emit('changeCards', cards.firstCard, cards.currentPlayerCard);
			console.log('readyToStart');
		});
	};
	
	return module;
};