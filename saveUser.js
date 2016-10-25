var firebase = require('firebase');

//Initializing
var config = {
	apiKey : "<WEB_API_KEY>",
	databaseURL: "<PATH_TO_DATABASE>",
};
firebase.initializeApp(config);

var http = require('http'),
	express = require('express'),
	path = require('path');

var app = express();
app.set('port', process.env.PORT || 8081);
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
	res.send('<html><body><h1>Hello World</h1></body></html>');
});

app.get('/fetchPostData', function (req, res) {
	var postRef = firebase.database().ref('/postData/post0/');
	postRef.once('value').then(function (snapshot) {
		res.send(snapshot.val());
	});	
});

app.use(function (req, res) {
	res.send('404. Not Found');
});

http.createServer(app).listen(app.get('port'), function () {
	console.log('Server listening to port ' + app.get('port'));
});