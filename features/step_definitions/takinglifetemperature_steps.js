
var PadawanWorld = require('../support/world').World;

var lifetemperatureSteps = function() {
	var self = this;
	var Given = When = Then = this.defineStep;
	this.world = new PadawanWorld();

	this.Given(/^an Area of Life$/, function (callback) {
	  // Write code here that turns the phrase above into concrete actions

		self.world.visit('/coolapp.html');
		self.world.assert('h1', 'Welcome');
		//callback.pending();
	});

	this.When(/^I gradually express how I feel about that area of life at the current moment$/, function (callback) {
	  // Write code here that turns the phrase above into concrete actions
	  callback.pending();
	});

	this.When(/^I can accept the selected measure$/, function (callback) {
	  // Write code here that turns the phrase above into concrete actions
	  callback.pending();
	});

	this.Then(/^the measurement is store with a time stamp$/, function (callback) {
	  // Write code here that turns the phrase above into concrete actions
	  callback.pending();
	});

	this.Then(/^another Area of Life is presented to be measure$/, function (callback) {
	  // Write code here that turns the phrase above into concrete actions
	  callback.pending();
	});

	this.Given(/^all Areas of Life$/, function (callback) {
	  // Write code here that turns the phrase above into concrete actions
	  callback.pending();
	});

	this.Given(/^all have a measurement$/, function (callback) {
	  // Write code here that turns the phrase above into concrete actions
	  callback.pending();
	});

	this.Then(/^I can visualize all measurements$/, function (callback) {
	  // Write code here that turns the phrase above into concrete actions
	  callback.pending();
	});

	this.Then(/^I can easily compare each measure$/, function (callback) {
	  // Write code here that turns the phrase above into concrete actions
	  callback.pending();
	});

	this.Then(/^a remainder will be set for every month to measure the Areas of Life$/, function (callback) {
	  // Write code here that turns the phrase above into concrete actions
	  callback.pending();
	});

	this.Given(/^multiple Life Measurements taken$/, function (callback) {
	  // Write code here that turns the phrase above into concrete actions
	  callback.pending();
	});

	this.Given(/^a range of time is set$/, function (callback) {
	  // Write code here that turns the phrase above into concrete actions
	  callback.pending();
	});

	this.Then(/^I can see all of the Measurements and highlight my progress$/, function (callback) {
	  // Write code here that turns the phrase above into concrete actions
	  callback.pending();
	});


};

module.exports = lifetemperatureSteps;