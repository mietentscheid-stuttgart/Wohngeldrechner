var config = require('./config-dev');
var express = require('express');

var app = express();

if (require.main === module) {
	var port = config.http.port;
	if (process.argv.length > 2)
		port = parseInt(process.argv[2]);

	app.use(express.static('build'))
	app.listen(port, function () {
		console.log('HTTP server listening on port ' + port);
	});
}
