var express = require('express');
var router = express.Router();
var GoEvent = require('../models/groupOutEvent');

router.route ('/')
    .post(function(req, res){
        var user = req.user || "no user";
        console.log(user);
        var event = new GoEvent();
        	event.creator = '56e1dde0d92cc55807f20925'; //temporarily using a valid ID for testing - remove when done testing.
	        //event.creator = req.user._id || '56e1dde0d92cc55807f20925';
	        event.joiner = '56e1dde0d92cc55807f20925';
	        //event.joiner = req.user._id || '56e1dde0d92cc55807f20925';
	        event.title = req.body.title;
	        event.category= req.body.category;
	        event.description = req.body.description;
	        event.location = req.body.location;
	        event.date = req.body.date;
	        event.time = req.body.time;
	        event.level = req.body.level;
	        event.petFriendly = req.body.petFriendly;
	        event.familyFriendly = req.body.familyFriendly;
	        console.log("Creating Event Working", event);

	        event.save(function(err, event){
	            if(err){
	                console.log(err);
	            } else {
	                res.json(event);
            }
        })
    })

    .get(function(req, res){
    	GoEvent.find()
    	.populate('creator')
    	.exec(function(err, goevent){
            if(err){
                console.log(err)
            } else {
                res.json(goevent)
            }
        })
    })

 router.route('/:event_id')
    .get(function(req, res){
        GoEvent.find(req.params.event_id, function(err, event){
            if(err){
                console.log(err)
            } else {
                res.json(event)
            }
        });
    })
    .put(function(req, res){ //put is just to edit.
        GoEvent.findById(req.params.event_id, function(err, event){
            if(err){
                console.log(err)
            } else {
		        event.title = req.body.title ? req.body.title : event.title;
		        event.category = req.body.category ? req.body.category : event.category;
		        event.description = req.body.description ? req.body.description : event.description;
		        event.location = req.body.location ? req.body.location : event.location;
		        event.date = req.body.date ? req.body.date : event.date;
		        event.time = req.body.time ? req.body.time : event.time;
		        event.level = req.body.level ? req.body.level: event.level;
		        event.petFriendly = req.body.petFriendly ? req.body.petFriendly : event.petFriendly;
		        event.familyFriendly = req.body.familyFriendly ? req.body.familyFriendly : event.familyFriendly;
		        console.log("Putting Event Working", event);

		        event.save(function(err, event){
		            if(err){
		                console.log(err);
		            } else {
		                res.json(event);
	            	}	
	        	});
    		}
    	});
    })


    .delete(function(req, res){
        GoEvent.remove({_id: req.params.event_id}, function(err, event){
            if(err){
                console.log(err)
            } else {
                console.log(event)
                res.json ({message: "event deleted!"});
            }
        });
    });


module.exports = router;   

  

  