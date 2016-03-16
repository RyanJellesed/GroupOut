var express = require('express');
var router = express.Router();
var Level = require('../models/level');

router.route('/')//post a new blog post
	.post(function(req, res) {
		var level = new Level();
		level.name = req.body.name;
		level.icon = req.body.icon;

		level.save(function(err, level){
			if(err){
				console.log(err);
			} else {
				res.json(level)
			}
		})
	})
	.get(function(req, res) {

		Level.find(function(err, levels){
			if(err){
				console.log(err);
			} else {
				res.json(levels);
			}
		})
	})

module.exports = router;