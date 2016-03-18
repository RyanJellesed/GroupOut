var express = require('express');
var router = express.Router();
var User = require('../models/user');
var Catagory = require('../models/category')



  router.route('/getUser')
    .get(function(req, res){
      if(req.user){
        User.findById(req.user._id, function(err, user){
          if(err){
            console.log(err)
          } else {
            res.json(user)
          }
        })
      } else {
        res.json({user: "no user"})
      }
    })



router.route('/:user_id')
  .get(function(req, res) {
    User.findById(req.params.user_id)
    .populate('facebook.interests')
    .exec(function(err, user) {
      if(err){
        console.log(err);
      } else {
        res.json(user);
      }
    })  
  })
  .put(function(req, res) {
    console.log("im trying to put bio in user")
    User.findById(req.params.user_id, function(err, user) {
      if(err){
        console.log(err);
      } else {

        // 56e1db38721f4726083665cd
        var interests = '56e6f44934fa6508113882ef';
        
        user.facebook.bio = req.body.bio ? req.body.bio : user.facebook.bio;
        user.facebook.interests.push(interests);
        


        user.save(function(err){
          if(err){
            console.log(err);
          } else {

            res.json({title: "user updated"});
          }
        })
      }
    })  
  })
  .delete(function(req, res) {
    user.remove({_id :req.params.user_id}, function(err, user) {
      if(err){
        console.log(err);
      } else {
        console.log(user);
        res.json({title: "user was deleted"});
      }
    })  
  })

module.exports = router;

