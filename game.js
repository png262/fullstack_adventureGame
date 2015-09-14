var Node = require('./node');

var Game = function() {
	this.nodes = {};
	this.startingPoint = null;

	this.addNode = function (key, value) {
		for (var i in this.nodes) {
			if(i == key) {
				throw new Error ();
			}
		}
		this.nodes[key] = new Node(key, value);
		
		if(this.startingPoint == null) {
			this.startingPoint = this.nodes[key];
		}
		return this.nodes[key];

	};

	this.getNode = function (key){
		return this.nodes[key];
	}

	this.connect = function (firstnode, secondnode, text) {
		this.nodes[firstnode].connect(this.nodes[secondnode], text);
	}


};

module.exports = Game;
