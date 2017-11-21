var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

//setting root point
app.get('/', function(req, res) {
	console.log("GET for /");
    res.sendFile(path.join(__dirname + '/index.html'));
});

//setting up navbar root points - virtual
app.get('/lap&phone', function(req, res) {
	console.log("GET for /lap&phone");
    res.sendFile(path.join(__dirname + '/public/content/lap&phone.html'));
});

//setting up navbar root points - phones & laptops
app.get('/virtual', function(req, res) {
	console.log("GET for /virtual");
    res.sendFile(path.join(__dirname + '/public/content/virtual.html'));
});

//setting up navbar root points - drones
app.get('/drones', function(req, res) {
	console.log("GET for /drones");
    res.sendFile(path.join(__dirname + '/drones.html'));
});



//setting up server
app.listen(8080);

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})