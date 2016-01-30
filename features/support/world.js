var zombie = require('zombie');

var PadawanWorld = function () {
	this.browser = new zombie.create();
};

PadawanWorld.prototype.visit = function(url) {
	this.browser.visit(url, function(error) {
		console.log('ERRRO:  ' + error);
	});
};

exports.World = PadawanWorld;