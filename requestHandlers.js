var path = require('path');

module.exports = function (io, config) {
	var module = {};

	module.index = function (req, res) {
		res.sendFile(path.join(__dirname, config.viewsFolder, 'index.htm'));
	};
	
	module.game = function (req, res) {
		var socketHandlers = require('./socketHandlers')(io, req.body.playerName);
		io.on('connection', socketHandlers.connection);
		
		res.sendFile(path.join(__dirname, config.viewsFolder, 'game.htm'));
	};
	
	return module;
};