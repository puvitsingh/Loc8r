var mongoose = require( 'mongoose' );
var gracefulShutdown;
var dbURI = 'mongodb://localhost/Loc8r';
if (process.env.NODE_ENV === 'production') {
	dbURI = process.env.MONGOLAB_URI;
}
mongoose.connect(dbURI);

var readLine = require ("readline");
if (process.platform === "win32"){
    var rl = readLine.createInterface ({
        input: process.stdin,
        output: process.stdout
    });
    rl.on ("SIGINT", function (){
        process.emit ("SIGINT");
    });
};

mongoose.connection.on('connected', function () {
	console.log('NODE_ENV: ' + process.env.NODE_ENV);
	console.log('Mongoose Connected to ' + dbURI);
});

mongoose.connection.on('error', function (err) {
	console.log('Mongoose Connection error ' + err);
});

mongoose.connection.on('disconnected', function () {
	console.log('Mongoose Disconnected');
});

gracefulShutdown = function (msg, callback) {
	mongoose.connection.close(function() {
		console.log('Mongoose disconnected through ' + msg);
		callback();
	});
};

//for nodemon restarts
process.once('SIGUSR2', function() {
	gracefulShutdown('nodemon restart', function () {
		process.kill(process.pid, 'SIGUSR2');
	});
});

//for app termination
process.on('SIGINT', function() {
	gracefulShutdown('app termination', function () {
		process.exit(0);
	});
});

//for Heroku app termination
process.on('SIGTERM', function() {
	gracefulShutdown('Heroku app shutdown', function () {
		process.exit(0);
	});
});


require('./locations');