var config = require('./config');

var Metalsmith = require('metalsmith');
var layouts = require('metalsmith-layouts');
var pug = require('metalsmith-pug');

var fs = require('fs');
var path = require('path');

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

				// copy assets into build dir
				[
					{ source: path.join('node_modules', 'jquery', 'dist'),	target: path.join('libs', 'jquery'),			name: 'jquery.min.js' },

					{ source: path.join('node_modules', 'jquery-ui-dist'),	target: path.join('libs', 'jquery-ui'),			name: 'jquery-ui.min.js' },
					{ source: path.join('node_modules', 'jquery-ui-dist'),	target: path.join('libs', 'jquery-ui'),			name: 'jquery-ui.min.css' },

					{ source: path.join('node_modules', 'jqplot', 'src'),			target: path.join('libs', 'jquery-jqplot'),		name: 'jquery.jqplot.js' },
					{ source: path.join('node_modules', 'jqplot', 'src'),			target: path.join('libs', 'jquery-jqplot'),		name: 'jqplot.core.js' },
					{ source: path.join('node_modules', 'jqplot', 'src'),			target: path.join('libs', 'jquery-jqplot'),		name: 'jqplot.linearTickGenerator.js' },
					{ source: path.join('node_modules', 'jqplot', 'src'),			target: path.join('libs', 'jquery-jqplot'),		name: 'jqplot.linearAxisRenderer.js' },
					{ source: path.join('node_modules', 'jqplot', 'src'),			target: path.join('libs', 'jquery-jqplot'),		name: 'jqplot.axisTickRenderer.js' },
					{ source: path.join('node_modules', 'jqplot', 'src'),			target: path.join('libs', 'jquery-jqplot'),		name: 'jqplot.axisLabelRenderer.js' },
					{ source: path.join('node_modules', 'jqplot', 'src'),			target: path.join('libs', 'jquery-jqplot'),		name: 'jqplot.tableLegendRenderer.js' },
					{ source: path.join('node_modules', 'jqplot', 'src'),			target: path.join('libs', 'jquery-jqplot'),		name: 'jqplot.lineRenderer.js' },
					{ source: path.join('node_modules', 'jqplot', 'src'),			target: path.join('libs', 'jquery-jqplot'),		name: 'jqplot.markerRenderer.js' },
					{ source: path.join('node_modules', 'jqplot', 'src'),			target: path.join('libs', 'jquery-jqplot'),		name: 'jqplot.divTitleRenderer.js' },
					{ source: path.join('node_modules', 'jqplot', 'src'),			target: path.join('libs', 'jquery-jqplot'),		name: 'jqplot.canvasGridRenderer.js' },
					{ source: path.join('node_modules', 'jqplot', 'src'),			target: path.join('libs', 'jquery-jqplot'),		name: 'jqplot.linePattern.js' },
					{ source: path.join('node_modules', 'jqplot', 'src'),			target: path.join('libs', 'jquery-jqplot'),		name: 'jqplot.shadowRenderer.js' },
					{ source: path.join('node_modules', 'jqplot', 'src'),			target: path.join('libs', 'jquery-jqplot'),		name: 'jqplot.shapeRenderer.js' },
					{ source: path.join('node_modules', 'jqplot', 'src'),			target: path.join('libs', 'jquery-jqplot'),		name: 'jqplot.sprintf.js' },
					{ source: path.join('node_modules', 'jqplot', 'src'),			target: path.join('libs', 'jquery-jqplot'),		name: 'jsdate.js' },
					{ source: path.join('node_modules', 'jqplot', 'src'),			target: path.join('libs', 'jquery-jqplot'),		name: 'jqplot.themeEngine.js' },
					{ source: path.join('node_modules', 'jqplot', 'src'),			target: path.join('libs', 'jquery-jqplot'),		name: 'jqplot.toImage.js' },
					{ source: path.join('node_modules', 'jqplot', 'src'),			target: path.join('libs', 'jquery-jqplot'),		name: 'jqplot.effects.core.js' },
					{ source: path.join('node_modules', 'jqplot', 'src'),			target: path.join('libs', 'jquery-jqplot'),		name: 'jqplot.effects.blind.js' },
					{ source: path.join('node_modules', 'jqplot', 'src'),			target: path.join('libs', 'jquery-jqplot'),		name: 'jquery.jqplot.css' },
					{ source: path.join('node_modules', 'jqplot', 'src', 'plugins'),	target: path.join('libs', 'jquery-jqplot', 'plugins'),	name: 'jqplot.barRenderer.js' },
					{ source: path.join('node_modules', 'jqplot', 'src', 'plugins'),	target: path.join('libs', 'jquery-jqplot', 'plugins'),	name: 'jqplot.categoryAxisRenderer.js' },
					{ source: path.join('node_modules', 'jqplot', 'src', 'plugins'),	target: path.join('libs', 'jquery-jqplot', 'plugins'),	name: 'jqplot.pointLabels.js' }
				].forEach( (asset) => {
					fs.mkdirSync(
						path.join(config.buildRoot, asset.target),
						{ recursive: true }
					);
					fs.copyFileSync(
						path.join(asset.source, asset.name), 
						path.join(config.buildRoot, asset.target, asset.name)
					);
				} );

				// notify promise to be resolved
				resolve();
			});
	} );
};

if (require.main === module)
	module.exports.build();

