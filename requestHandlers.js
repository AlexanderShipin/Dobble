var path = require('path');

module.exports = function (io, config) {
	var module = {};
	var socketHandlers = require('./socketHandlers')(io);
	io.on('connection', socketHandlers.connection);

	module.index = function (req, res) {
		res.sendFile(path.join(__dirname, config.viewsFolder, 'game.htm'));
	};
	
	return module;
};