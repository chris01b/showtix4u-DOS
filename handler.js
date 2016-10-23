var exec = require('child_process').exec;

var sides = ['Left', 'Center', 'Right'];

exports.addFirefox = function addFirefox(profile, ticketsFile) {
	firefoxes.push(
		function(callback) {
			exec('firefox --no-remote -P ' + profile + ' imacros://run/?m=Tickets' + ticketsFile + '.js',
			function(err) {
				if (err) {console.log(err)}
			});
			callback();
		}
	)
};

exports.sides = sides;