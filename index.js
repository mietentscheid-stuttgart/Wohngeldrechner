var Metalsmith = require('metalsmith');
var layouts = require('metalsmith-layouts');
var pug = require('metalsmith-pug');

var fs = require('fs');

Metalsmith(__dirname)
	.source('src')
	.destination('build')
	.use(pug({
		pretty: true
	}))
	.use(layouts({
		directory: 'layouts',
		engine: 'pug'
	}))
	.build(function(err, files) {
		if (err) { throw err; }

		fs.symlink('.', './build/wohnberechtigungsschein-rechner', function(err) { if (err) { throw err; } });
	});
