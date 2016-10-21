var express = require('express');
var router = express.Router();

var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://jay:jay@localhost:27017/admin';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/test', function(req, res, next) {

	MongoClient.connect(url, function(err, db) {
		var collection = db.collection('invest');
		collection.find({}).toArray(function(err, docs) {
			console.log("Found the following records");
			console.log(docs)
			res.send({data:docs})
		});
	})

});

module.exports = router;