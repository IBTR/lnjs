
// using exports
var user = require('./user');

var vasya = new user.User("Vasya");
var petya = new user.User("Petya");

// using global obj - not rare - do not use
//require('./user.js');

//var vasya = new User("Vasya");
//var petya = new User("Petya");

vasya.hello(petya);
