/*var firebase = require('firebase');

//Initializing
var config = {
	apiKey : "<API_KEY>",
	authDomain : "<PROJECT_ID>.firebaseApp.com",
	databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
	storageBucket: "<BUCKET>.appspot.com",
};
firebase.initializeApp(config);
*/

var http = require('http'),
	express = require('express'),
	path = require('path');

var app = express();
app.set('port', process.env.PORT || 8081);
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
	res.send('<html><body><h1>Hello World</h1></body></html>');
});

app.use(function (req, res) {
	res.send('404. Not Found');
});

http.createServer(app).listen(app.get('port'), function () {
	console.log('Server listening to port ' + app.get('port'));
});