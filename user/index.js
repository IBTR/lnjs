var phrases = require('./ru.json');

function User(name) {
	this.name = name;
}

User.prototype.hello = function(who){
	console.log (phrases.Hello + ", " + who.name);
};

exports.User = User; // exports - object for export from file
//global.User = User; // global - object for global var and obj