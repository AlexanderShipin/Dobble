var fs = require('fs');
var cardsConfig = JSON.parse(fs.readFileSync('cardsConfig.json', 'utf8'));

function getRandromCard(indexes){
	var randomCard = Math.floor(Math.random() * indexes.length);
	return indexes.splice(randomCard, 1)[0];
};

function prepareCards(players){
	var n = 3;
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

function getCardMarkup(cardId){
	var cardMarkupConfig = cardsConfig;
	var card = cardMarkupConfig.find(function(c){ return c.cardId == cardId});
	if(!card)
		return '<img src="img/back.jpg"/>';
	
	var cardMarkup = '<img src="img/' + card.cardId + '.jpg" usemap="#card-map">' +
		'<map name="card-map">';
		   
	for (var pic in card.cardPics) {
	  cardMarkup += '<area shape="poly" coords="' + card.cardPics[pic] + '" href="">';
	}
	
	cardMarkup += '</map>';
	return cardMarkup;
}

exports.prepareCards = prepareCards;
exports.getCardMarkup = getCardMarkup;