var inquirer = require('inquirer');

var game = require('./game.source');

var currentNode = game.startingPoint;
// var currentMessage = game.startingPoint.text;
// var currentChoices = game.startingPoint.connections.map( function (array) {return array[1]});


var play = function (node) {


	if (node.connections.length === 0) {
		return console.log(node.text);
	}


	inquirer.prompt([
	{
		type: 'list',
		name: node.title,
		message: node.text,
		choices: node.connections.map( function (array) {return array[1]})
	}



		], function( answers ) {

			var nextNode = node.route(answers[node.title])  
			play(nextNode);

	 
	});

}

play(currentNode)

/*

This file has no test specs. It might be a tricky one. You need to look at 
the docs for the inquirer npm package, and see if you can figure out how 
to make the game run!

If you're running out of time, check out our solution to the problem:
https://gist.github.com/zekenie/e90faf30a789d65c6459

*/
