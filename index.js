var Metalsmith = require('metalsmith');
var layouts = require('metalsmith-layouts');
var pug = require('metalsmith-pug');

Metalsmith(__dirname)
	.source('src')
	.destination('build')
	.use(pug())
	.use(layouts({
		directory: 'layouts',
		engine: 'pug'
	}))
	.build(function(err, files) {
		if (err) { throw err; }
	});
