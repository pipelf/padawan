const Browser = require('zombie');
var HTML5 = require('html5').HTML5;

Browser.localhost('localhost', '8080');

var PadawanWorld = function () {
	this.browser = new Browser({runScripts:true, debug:true, htmlParser: HTML5,  waitDuration: 29*1000});
};

PadawanWorld.prototype.visit = function(url) {
	this.browser.visit(url, function(error) {
		console.log('ERRRO:  ' + error);
	});
};

PadawanWorld.prototype.assert = function(selector, text) {
	return this.browser.assert.text(selector, text);
};

exports.World = PadawanWorld;