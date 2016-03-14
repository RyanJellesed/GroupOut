var express = require('express');
var router = express.Router();
var Category = require('../models/category');

router.route('/')//post a new blog post
	.post(function(req, res) {
		var category = new Category();
		category.name = req.body.name;
		
		category.save(function(err, category){
			if(err){
				console.log(err);
			} else {
				res.json(category)
			}
		})
	})
	.get(function(req, res) {

		Category.find(function(err, catagories){
			if(err){
				console.log(err);
			} else {
				res.json(catagories);
			}
		})
	})

module.exports = router;