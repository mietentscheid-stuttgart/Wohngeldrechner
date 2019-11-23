var build = require('./build');
var config = require('./config');
var FtpDeploy = require('ftp-deploy');

var ftpdeploy = new FtpDeploy();

if (require.main === module) {
	build.build().then(
		ftpdeploy.deploy( {
			user:		config.ftpDeploy.user,
			host:		config.ftpDeploy.host,
			port:		config.ftpDeploy.port,
			localRoot:	config.buildRoot,
			remoteRoot:	config.ftpDeploy.path,
			include: 	["*", "**/*"],
			exclude: 	["wohnberechtigungsschein-rechner"],
			deleteRemote:	false,
			forcePasv:	true
		} )
	)
}
