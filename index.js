var Metalsmith = require('metalsmith');
var pug = require('metalsmith-pug');
var layouts = require('metalsmith-layouts');

Metalsmith(__dirname)
	.source('source')
	.destination('build')
	.use(pug())
	.use(layouts({
		engine: 'pug'
	}))
	.build(function(err, files) {
		if (err) { throw err; }
	});
