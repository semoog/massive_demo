var app = require("./index");
var db = app.get('db');

module.exports = {

	getIncidents: function(req, res) {
		db.queries.get.incidents(function(err, response) {
			if (err) {
				res.send(err);
			}
			res.send(response);
		});
	},

  getInjuries: function(req, res) {
		db.queries.get.injuries(function(err, response) {
			if (err) {
				res.send(err);
			}
			res.send(response);
		});
	}

};
