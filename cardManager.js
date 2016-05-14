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
	var cardMarkupConfig = getCardsConfig();
	var card = cardMarkupConfig.find(function(c){ return c.cardId == cardId});
	if(!card)
		return '<img src="img/back.jpg"/>';
	
	var cardMarkup = '<img src="img/' + card.cardId + '.jpg" usemap="#card-map">' +
		'<map name="card-map">';
		   
	for (var pic in card.cardPics) {
	  cardMarkup += '<area shape="rect" coords="' + card.cardPics[pic].topLeft.x + ',' + 
		card.cardPics[pic].topLeft.y + ',' + 
		card.cardPics[pic].bottomRight.x + ',' + 
		card.cardPics[pic].bottomRight.y + '" href="">';
	}
	
	cardMarkup += '</map>';
	return cardMarkup;
}

function getCardsConfig(){
	return [{
		cardId: 0,
		cardPics: {
			igloo: {topLeft: {x: 1, y: 1}, bottomRight: {x: 100, y: 100}},
			anchor: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			drop: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			yinyang: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			question: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			pencil: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			cat: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			eye: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}}
		}
	},
	{
		cardId: 1,
		cardPics: {
			igloo: {topLeft: {x: 91, y: 46}, bottomRight: {x: 360, y: 261}},
			anchor: {topLeft: {x: 493, y: 103}, bottomRight: {x: 661, y: 284}},
			drop: {topLeft: {x: 70, y: 305}, bottomRight: {x: 378, y: 561}},
			yinyang: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			question: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			pencil: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			cat: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			eye: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}}
		}
	},
	{
		cardId: 2,
		cardPics: {
			igloo: {topLeft: {x: 1, y: 1}, bottomRight: {x: 100, y: 100}},
			anchor: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			drop: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			yinyang: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			question: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			pencil: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			cat: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			eye: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}}
		}
	},
	{
		cardId: 3,
		cardPics: {
			igloo: {topLeft: {x: 1, y: 1}, bottomRight: {x: 100, y: 100}},
			anchor: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			drop: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			yinyang: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			question: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			pencil: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			cat: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			eye: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}}
		}
	},
	{
		cardId: 4,
		cardPics: {
			igloo: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			anchor: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			drop: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			yinyang: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			question: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			pencil: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			cat: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			eye: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}}
		}
	},
	{
		cardId: 5,
		cardPics: {
			igloo: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			anchor: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			drop: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			yinyang: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			question: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			pencil: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			cat: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			eye: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}}
		}
	},
	{
		cardId: 6,
		cardPics: {
			igloo: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			anchor: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			drop: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			yinyang: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			question: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			pencil: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			cat: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			eye: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}}
		}
	},
	{
		cardId: 7,
		cardPics: {
			igloo: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			anchor: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			drop: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			yinyang: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			question: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			pencil: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			cat: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			eye: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}}
		}
	},
	{
		cardId: 8,
		cardPics: {
			igloo: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			anchor: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			drop: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			yinyang: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			question: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			pencil: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			cat: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			eye: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}}
		}
	},
	{
		cardId: 9,
		cardPics: {
			igloo: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			anchor: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			drop: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			yinyang: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			question: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			pencil: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			cat: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			eye: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}}
		}
	},
	{
		cardId: 10,
		cardPics: {
			igloo: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			anchor: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			drop: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			yinyang: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			question: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			pencil: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			cat: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			eye: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}}
		}
	},
	{
		cardId: 11,
		cardPics: {
			igloo: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			anchor: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			drop: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			yinyang: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			question: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			pencil: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			cat: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			eye: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}}
		}
	},
	{
		cardId: 12,
		cardPics: {
			igloo: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			anchor: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			drop: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			yinyang: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			question: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			pencil: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			cat: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			eye: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}}
		}
	},
	{
		cardId: 13,
		cardPics: {
			igloo: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			anchor: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			drop: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			yinyang: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			question: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			pencil: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			cat: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			eye: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}}
		}
	},
	{
		cardId: 14,
		cardPics: {
			igloo: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			anchor: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			drop: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			yinyang: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			question: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			pencil: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			cat: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			eye: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}}
		}
	},
	{
		cardId: 15,
		cardPics: {
			igloo: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			anchor: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			drop: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			yinyang: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			question: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			pencil: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			cat: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			eye: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}}
		}
	},
	{
		cardId: 16,
		cardPics: {
			igloo: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			anchor: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			drop: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			yinyang: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			question: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			pencil: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			cat: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			eye: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}}
		}
	},
	{
		cardId: 17,
		cardPics: {
			igloo: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			anchor: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			drop: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			yinyang: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			question: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			pencil: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			cat: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			eye: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}}
		}
	},
	{
		cardId: 18,
		cardPics: {
			igloo: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			anchor: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			drop: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			yinyang: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			question: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			pencil: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			cat: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			eye: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}}
		}
	},
	{
		cardId: 19,
		cardPics: {
			igloo: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			anchor: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			drop: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			yinyang: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			question: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			pencil: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			cat: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			eye: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}}
		}
	},
	{
		cardId: 20,
		cardPics: {
			igloo: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			anchor: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			drop: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			yinyang: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			question: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			pencil: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			cat: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			eye: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}}
		}
	},
	{
		cardId: 21,
		cardPics: {
			igloo: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			anchor: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			drop: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			yinyang: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			question: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			pencil: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			cat: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			eye: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}}
		}
	},
	{
		cardId: 22,
		cardPics: {
			igloo: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			anchor: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			drop: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			yinyang: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			question: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			pencil: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			cat: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			eye: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}}
		}
	},
	{
		cardId: 23,
		cardPics: {
			igloo: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			anchor: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			drop: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			yinyang: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			question: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			pencil: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			cat: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			eye: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}}
		}
	},
	{
		cardId: 24,
		cardPics: {
			igloo: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			anchor: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			drop: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			yinyang: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			question: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			pencil: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			cat: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			eye: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}}
		}
	},
	{
		cardId: 25,
		cardPics: {
			igloo: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			anchor: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			drop: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			yinyang: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			question: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			pencil: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			cat: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			eye: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}}
		}
	},
	{
		cardId: 26,
		cardPics: {
			igloo: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			anchor: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			drop: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			yinyang: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			question: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			pencil: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			cat: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			eye: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}}
		}
	},
	{
		cardId: 27,
		cardPics: {
			igloo: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			anchor: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			drop: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			yinyang: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			question: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			pencil: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			cat: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			eye: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}}
		}
	},
	{
		cardId: 28,
		cardPics: {
			igloo: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			anchor: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			drop: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			yinyang: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			question: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			pencil: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			cat: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			eye: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}}
		}
	},
	{
		cardId: 29,
		cardPics: {
			igloo: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			anchor: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			drop: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			yinyang: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			question: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			pencil: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			cat: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			eye: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}}
		}
	},
	{
		cardId: 30,
		cardPics: {
			igloo: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			anchor: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			drop: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			yinyang: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			question: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			pencil: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			cat: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			eye: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}}
		}
	},
	{
		cardId: 31,
		cardPics: {
			igloo: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			anchor: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			drop: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			yinyang: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			question: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			pencil: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			cat: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			eye: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}}
		}
	},
	{
		cardId: 32,
		cardPics: {
			igloo: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			anchor: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			drop: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			yinyang: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			question: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			pencil: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			cat: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			eye: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}}
		}
	},
	{
		cardId: 33,
		cardPics: {
			igloo: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			anchor: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			drop: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			yinyang: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			question: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			pencil: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			cat: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			eye: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}}
		}
	},
	{
		cardId: 34,
		cardPics: {
			igloo: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			anchor: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			drop: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			yinyang: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			question: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			pencil: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			cat: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			eye: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}}
		}
	},
	{
		cardId: 35,
		cardPics: {
			igloo: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			anchor: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			drop: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			yinyang: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			question: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			pencil: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			cat: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			eye: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}}
		}
	},
	{
		cardId: 36,
		cardPics: {
			igloo: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			anchor: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			drop: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			yinyang: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			question: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			pencil: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			cat: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			eye: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}}
		}
	},
	{
		cardId: 37,
		cardPics: {
			igloo: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			anchor: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			drop: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			yinyang: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			question: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			pencil: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			cat: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			eye: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}}
		}
	},
	{
		cardId: 38,
		cardPics: {
			igloo: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			anchor: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			drop: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			yinyang: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			question: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			pencil: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			cat: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			eye: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}}
		}
	},
	{
		cardId: 39,
		cardPics: {
			igloo: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			anchor: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			drop: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			yinyang: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			question: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			pencil: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			cat: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			eye: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}}
		}
	},
	{
		cardId: 40,
		cardPics: {
			igloo: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			anchor: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			drop: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			yinyang: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			question: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			pencil: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			cat: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			eye: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}}
		}
	},
	{
		cardId: 41,
		cardPics: {
			igloo: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			anchor: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			drop: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			yinyang: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			question: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			pencil: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			cat: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			eye: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}}
		}
	},
	{
		cardId: 42,
		cardPics: {
			igloo: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			anchor: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			drop: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			yinyang: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			question: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			pencil: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			cat: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			eye: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}}
		}
	},
	{
		cardId: 43,
		cardPics: {
			igloo: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			anchor: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			drop: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			yinyang: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			question: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			pencil: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			cat: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			eye: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}}
		}
	},
	{
		cardId: 44,
		cardPics: {
			igloo: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			anchor: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			drop: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			yinyang: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			question: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			pencil: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			cat: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			eye: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}}
		}
	},
	{
		cardId: 45,
		cardPics: {
			igloo: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			anchor: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			drop: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			yinyang: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			question: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			pencil: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			cat: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			eye: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}}
		}
	},
	{
		cardId: 46,
		cardPics: {
			igloo: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			anchor: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			drop: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			yinyang: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			question: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			pencil: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			cat: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			eye: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}}
		}
	},
	{
		cardId: 47,
		cardPics: {
			igloo: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			anchor: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			drop: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			yinyang: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			question: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			pencil: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			cat: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			eye: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}}
		}
	},
	{
		cardId: 48,
		cardPics: {
			igloo: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			anchor: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			drop: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			yinyang: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			question: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			pencil: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			cat: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			eye: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}}
		}
	},
	{
		cardId: 49,
		cardPics: {
			igloo: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			anchor: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			drop: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			yinyang: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			question: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			pencil: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			cat: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			eye: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}}
		}
	},
	{
		cardId: 50,
		cardPics: {
			igloo: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			anchor: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			drop: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			yinyang: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			question: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			pencil: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			cat: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			eye: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}}
		}
	},
	{
		cardId: 51,
		cardPics: {
			igloo: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			anchor: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			drop: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			yinyang: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			question: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			pencil: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			cat: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			eye: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}}
		}
	},
	{
		cardId: 52,
		cardPics: {
			igloo: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			anchor: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			drop: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			yinyang: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			question: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			pencil: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			cat: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			eye: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}}
		}
	},
	{
		cardId: 53,
		cardPics: {
			igloo: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			anchor: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			drop: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			yinyang: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			question: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			pencil: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			cat: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			eye: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}}
		}
	},
	{
		cardId: 54,
		cardPics: {
			igloo: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			anchor: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			drop: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			yinyang: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			question: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			pencil: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			cat: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			eye: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}}
		}
	},
	{
		cardId: 55,
		cardPics: {
			igloo: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			anchor: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			drop: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			yinyang: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			question: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			pencil: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			cat: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}},
			eye: {topLeft: {x: 1, y: 1}, bottomRight: {x: 1, y: 1}}
		}
	}];
}

exports.prepareCards = prepareCards;
exports.getCardMarkup = getCardMarkup;