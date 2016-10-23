var async = require('async');
var handler = require('./handler.js');

firefoxes = []

for (var i = 1; i <= handler.sides.length; i++) {
	handler.addFirefox('f' + i, i - 1);
}

async.parallel(firefoxes, function(err, results) {
	if (err) {console.log(err)}
});