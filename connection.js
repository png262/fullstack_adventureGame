var Connection = function(nextNode, condition) {
	this.nextNode = nextNode;
	this.condition = condition;
	
	this.test = function (input) {
		if (this.condition === input) {
			return true;
		} else if (this.condition === undefined) {
			return true;
		} else {
			return false; 
		}
	}
};



module.exports = Connection;
