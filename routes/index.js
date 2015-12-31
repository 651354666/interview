var express = require('express');
var router = express.Router();

var rooms = {
    "deluxe": {
        "friends": [
            "Bob Smith",
            "Jane Doe",
            "Bubba Hyde",
            "Betsy Toheavens"
        ]
    },
    "shared": {
        "friends": [
            "Bob Smith"
        ]
    },
    "animal-friendly": {
        "friends": [
            "Bob Smith",
            "Jane Doe",
            "Bubba Hyde"
        ]
    },
    "another": {
        "friends": [
            "Bob Smith",
            "Jane Doe"
        ]
    },
    "and-another": {
        "friends": []
    }
};

function routes(app){

	/* GET home page. */
	app.get('/', function(req, res) {
		res.render('index', {'rooms': rooms});
	});

	  
}

module.exports = routes;
