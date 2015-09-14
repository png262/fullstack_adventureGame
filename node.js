var Connection = require('./connection');

var Node = function(title, text) {
	this.title = title;
	this.text = text;
	this.connections = [];

	this.connect = function (node, circumstances) {
		for (var i = 0; i < this.connections.length; i++){
			if (this.connections[i][1] == circumstances) {
				throw new Error ();
			}
		}	
		this.connections.push([node,circumstances]);
	};

	this.route = function (circumstance) {
		for (var i = 0; i < this.connections.length; i ++) {
			if (this.connections[i][1] == circumstance) {
				return this.connections[i][0];
			}
		}
	}


};

	


module.exports = Node;
