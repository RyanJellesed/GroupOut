var express = require('express');
var router = express.Router();
var GoEvent = require('../models/groupOutEvent');
var Comment = require('../models/comment')

router.route ('/')
    .post(function(req, res){
        var user = req.user || "no user";
        console.log(user);
        var event = new GoEvent();
        	// event.creator = '56e1aa50ce328313072914b6'; //temporarily using a valid ID for testing - remove when done testing.
	        event.creator = req.user._id;
	        // event.joiner = '56e1aa50ce328313072914b6';
	        event.joiner = req.user._id;
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
        .populate('category')
        .populate('level')
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
        GoEvent.findById(req.params.event_id) 
        .populate('creator')
        .populate('category')
        .populate('level')
        .populate({
            path:'comments',
            populate: {
                path: 'commentor',
                select: 'facebook.name facebook.picture'
            }
        })
        .populate({
            path:'joiners',
            select: 'facebook.name facebook.picture'
        })
        .exec(function(err, event){
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

router.route('/:event_id/join')
    .put(function(req, res){
        var user = req.user || "no user";
        GoEvent.findById(req.params.event_id, function(err, event){
            if(err){
                console.log(err)
            } else {
                console.log(event)
                event.joiners.push(req.user._id);

                event.save(function(err, e){
                    if(err){
                        console.log(err);
                    } else {
                        res.json(e);
                    }
                });
            }
        });
    })

router.route('/:event_id/comment')
    .post(function(req, res){
        var comment = new Comment();
        comment.commentor = req.user._id;
        comment.date = req.body.date;
        comment.commentBody = req.body.commentBody;

        console.log('event comments working');
        comment.save(function(err, com){
            if(err){
                res.send(err);
            } else {
                GoEvent.findById(req.params.event_id, function(err, event){
                    if(err){
                        res.send(err);
                    } else {
                        event.comments.push(com._id);
                        event.save();
                        res.json(com);
                    }   
                })
            }
        })
    
    })

router.route('/my/events/anything')
    .get(function(req, res){
        
        GoEvent.find( { $or: [{ joiners:   req.user._id  },  { creator: req.user._id}]  }  )  
        .populate('creator')
        .populate('category')
        .populate('level')
        .exec(function(err, goevent){
            if(err){
                console.log(err)
            } else {
                res.json(goevent)
            }
        })
    })




module.exports = router;   

  

  