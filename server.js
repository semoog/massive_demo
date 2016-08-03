var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var Massive = require("massive");

var app = express();
app.use(bodyParser.json());
app.use(cors);

var port = 3000;

var db = Massive.connectSync({db : "massive_demo"});

// db.queries.findById.injuries(2, function(err,result){
//   console.log(result);
// });

// Unneccessary ^

db.injuries.find({id: 2}, function(err,result){
  console.log(result);
});

// db.queries.get.incidents(function (err, res) {
//   console.log(res);
// });

app.get('/incidents', function(req, res) {
  console.log('POST sighting');
});

app.post('/incidents', function(req, res) {
  console.log('POST sighting');
});

app.listen(port, function() {
  console.log("Started server on port", port);
});
