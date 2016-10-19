var firebase = require('firebase');

//Initializing
var config = {
	apiKey : "<API_KEY>",
	authDomain : "<PROJECT_ID>.firebaseApp.com",
	databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
	storageBucket: "<BUCKET>.appspot.com",
};
firebase.initializeApp(config);