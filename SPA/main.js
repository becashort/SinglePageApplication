//setting up variables
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
//adding database
var mongoose = require('mongoose');
var mongoDB = 'mongodb://admin:admin@ds121192.mlab.com:21192/books';
mongoose.connect(mongoDB);


//creating schema
var Schema = mongoose.Schema;
//define schema
var bookSchema = new Schema({
    //what information it can pull from the database
    title: String,
    description: String,
    author: String
})

var BookData = mongoose.model('BookData', bookSchema);

//making my own schema and linking my own API
// var mongoDB = 'mongodb://becashort:cruisin33@ds161455.mlab.com:61455/information';
// mongoose.connect(mongoDB);

// var Schema = mongoose.Schema;
// //define schema
// var techSchema = new Schema({
	 // type: String,
    // model: String,
    // colour: String
// })

// var Technology = mongoose.model('Technology', techSchema);

// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false }) 

//shows the application which folder to use
app.use(express.static(path.join(__dirname, 'public')));

//setting main root point - USES SENDFILE
app.get('/', function(req, res) {
	console.log("GET for / - home route point");
    res.sendFile(path.join(__dirname + '/index.html'));
});

//setting main root point - USES SENDFILE 
app.get('/home', function(req, res) {
	console.log("GET for home route point");
    res.sendFile(path.join(__dirname + '/public/content/home.html'));
}); 

//setting up navbar root points - grades - USES SENDFILE
app.get('/grades', function(req, res) {
	console.log("GET for /grades");
    res.sendFile(path.join(__dirname + '/public/content/grades.html'));
});

//setting up navbar root points - interests - USES SENDFILE
app.get('/interests', function(req, res) {
	console.log("GET for /interests");
    res.sendFile(path.join(__dirname + '/public/content/interests.html'));
});

//setting up navbar root points - past work - USES SENDFILE
app.get('/pastWork', function(req, res) {
	console.log("GET for /pastWork");
    res.sendFile(path.join(__dirname + '/public/content/pastWork.html'));
});

//setting up root points - when user writes route point and name, text is returned - USES SEND
app.get('/hello/:name', function (req, res) {
console.log(req.params.name);
res.send('Hello ' + ' ' + req.params.name + '. Thank you for viewing my Eportfolio. I hope you enjoyed it, this text is produced via get request');
})

//redirect route point
/* app.delete('/home', function (req, res) {
res.redirect('/');
}) */

//setting up root points 
app.post('/enter', function (req, res) {
	console.log("post method");
	console.log(req.body.firstname);
   res.send('Hello ' + req.body.firstname + " " + req.body.lastname);
})



//setting up root points - technology - text from teachers db is returned.
app.get('/technology', function(req,res){
	BookData.find(function(err, reviews) {
                if (err)
                    res.send(err)
                res.json(reviews);
            });
});





//setting up server
app.listen(8080);

//setting up the :8081 of URL
var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})