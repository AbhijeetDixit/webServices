var express = require('express')
var app = express()
var fs = require('fs')

app.get('/demoService',function (req, res) {
	mesg = 'Demo Response'
	console.log(mesg)
	res.end(mesg)
})

var server = app.listen(8081, function () {
	var host = server.address().address
	var port = server.address().port

	console.log('Listening to 8081')
})