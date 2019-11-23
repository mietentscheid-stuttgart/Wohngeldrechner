var config = require('./config');

var Metalsmith = require('metalsmith');
var layouts = require('metalsmith-layouts');
var pug = require('metalsmith-pug');

var fs = require('fs');

module.exports.build = function () {
	return new Promise( function(resolve, reject) {
		Metalsmith(__dirname)
			.source('src')
			.destination(config.buildRoot)
			.use(pug({
				pretty: true
			}))
			.use(layouts({
				directory: 'layouts',
				engine: 'pug'
			}))
			.build(function(err, files) {
				if (err) { reject(err); throw err; }
		
				fs.symlink('.', './build/wohnberechtigungsschein-rechner', function(err) { if (err) { throw err; } });
				resolve();
			});
	} );
};

if (require.main === module)
	module.exports.build();

