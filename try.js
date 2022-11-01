const ct = require('ctupdater');

ct.checkForUpdate({
	currentVersion: require('./package.json').version,
	repo: 'https://api.github.com/repos/CPTRICODEV/Updater/releases/latest',
	assetMatch: /.+js/i
});

ct.onUpdateAvailable = (version, asset) => {
	console.log(`new version ${version} available!`);
	gau.downloadNewVersion(asset);
};

ct.onNewVersionReadyToInstall = (file) => {
	console.log(`ready to install ${file}`);
	gau.executeUpdate(file);
};