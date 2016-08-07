var fs = require('fs');
var cardsConfig = JSON.parse(fs.readFileSync('cardsConfig.json', 'utf8'));

function getCardConfigById(cardId){
	return cardsConfig.find(function(c){ return c.cardId == cardId});	
}

function getRandromCard(indexes){
	var randomCard = Math.floor(Math.random() * indexes.length);
	return indexes.splice(randomCard, 1)[0];
};

function prepareCards(players){
	var n = 2;
	var indexesTmp = [];
	for(var i = 0; i < n; i++){
		indexesTmp[i] = i;
	}
	
	var result = {};
	result.commonCard = getRandromCard(indexesTmp);
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

function getCommonCardMarkup(cardId){
	if(cardId < 0)
		return '<img src="img/back.jpg">';
	return '<img src="img/' + cardId + '.jpg">';
}

function getPlayerCardMarkup(cardId){
	var card = cardsConfig.find(function(c){ return c.cardId == cardId});
	
	if(!card)
		return '<img src="img/back.jpg"/>';
	
	var cardMarkup = '<svg version="1.1" xmlns:svg="http://www.w3.org/2000/svg" viewBox="0 0 742 1061" preserveAspectRatio="xMinYMin meet">' +
				'<image width="742" height="1061" xlink:href="img/' + card.cardId + '.jpg" role="image" title="pic"></image>' +
				'<g id="pics">';
		   
	for (var pic in card.cardPics) {	
		cardMarkup += '<polygon name="' + pic + '" opacity="0" points="' + card.cardPics[pic] + '"  onclick="" />';
	}
	cardMarkup += '</g>' +
		'</svg>';
	return cardMarkup;
}

exports.getCardConfigById = getCardConfigById;
exports.prepareCards = prepareCards;
exports.getCommonCardMarkup = getCommonCardMarkup;
exports.getPlayerCardMarkup = getPlayerCardMarkup;