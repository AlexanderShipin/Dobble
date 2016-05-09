function getRandromCard(indexes){
	var randomCard = Math.floor(Math.random() * indexes.length);
	return indexes.splice(randomCard, 1)[0];
};

function prepareCards(players){
	var n = 55;
	var indexesTmp = [];
	for(var i = 0; i < n; i++){
		indexesTmp[i] = i;
	}
	
	var result = {};
	result.firstCard = getRandromCard(indexesTmp);
	result.playerHands = {};
	
	var cardsForPlayers = indexesTmp.length;
	var cardsPerPlayer = cardsForPlayers / players.length;
	for(var i = 0; i < players.length; i++){
		var deck = [];
		for(var j = 0; j < cardsPerPlayer; j++){
			deck.push(getRandromCard(indexesTmp));
		}
		result.playerHands[players[i].id] = deck;
	}
	return result;
};

exports.prepareCards = prepareCards;