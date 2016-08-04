var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var Massive = require('massive');

var connectionString = "postgres://postgres@localhost/massive_demo"
var massiveInstance = Massive.connectSync({connectionString: connectionString});

var app = module.exports = express();
var port = 4000;

app.use(bodyParser.json());
app.use(cors());
app.set('db', massiveInstance);

var mainCtrl = require('./mainCtrl');

var db = app.get('db');

// db.queries.findById.injuries(2, function(err,result){
//   console.log(result);
// });

// Unneccessary ^

// db.injuries.find({id: 2}, function(err,result){
//   console.log(result);
// });

app.get('/incidents', mainCtrl.getIncidents);

app.get('/injuries', mainCtrl.getInjuries);

// app.post('/incidents', function(req, res) {
//   console.log('POST sighting');
// });

app.listen(port, function() {
	console.log("Started server on port", port);
});
