var build = require('./build');
var config = require('./config');
var FtpDeploy = require('ftp-deploy');

var ftpdeploy = new FtpDeploy();

// watch upload progress on console
ftpdeploy.on("uploading", (data) => {
	console.log("transfering files " + data.transferredFileCount + " / " + data.totalFilesCount + "\t" + data.filename);
});

if (require.main === module) {
	build.build().then( (val) => ftpdeploy.deploy({
			user:		config.ftpDeploy.user,
			host:		config.ftpDeploy.host,
			port:		config.ftpDeploy.port,
			localRoot:	config.buildRoot,
			remoteRoot:	config.ftpDeploy.path,
			include: 	["*", "**/*"],
			exclude: 	["wohnberechtigungsschein-rechner"],
			deleteRemote:	false,
			forcePasv:	true
	}) ).then( (val) => {
		console.log("files successfully uploaded to " + config.ftpDeploy.path);
		console.log("");
		console.log("ATTENTION!");
		console.log("Please copy and paste the HTML code block\n\t<!-- BEGIN - COPY&PASTE HTML CODE INTO WORDPRESS POST -->\n\t...\n\t<!-- END - COPY&PASTE HTML CODE INTO WORDPRESS POST -->\nfrom build/wb-post.html into the target wordpress page");
	} );
}
