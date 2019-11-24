var config = require('./config-dev');
var express = require('express');

var app = express();

if (require.main === module) {
	app.use(express.static('build'))
	app.listen(config.http.port, function () {
		console.log('HTTP server listening on port ' + config.http.port);
	});
}