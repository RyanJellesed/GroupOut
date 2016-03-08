var mongoose = require('mongoose');
var User = require('../models/user');


// app/routes.js
module.exports = function(app, passport) {

    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/', // redirect to the secure profile section
        failureRedirect: '/signup', // redirect back to the signup page if there is an error
        failureFlash: true // allow flash messages
    }));


    app.get('/signup', function(req, res) {
        var user = req.user || "no user";
        // render the page and pass in any flash data if it exists
        res.render('signup.ejs', {user: user,
            message: req.flash('signupMessage')
        });
    });

    app.get('/login', function(req, res) {
        var user = req.user || "no user";
        // render the page and pass in any flash data if it exists
        res.render('login.ejs', {user: user,
            message: req.flash('loginMessage')
        });
    });

    app.post('/login', passport.authenticate('local-login', {
       successRedirect: '/', // redirect to the secure profile section
       failureRedirect: '/login', // redirect back to the signup page if there is an error
       failureFlash: true // allow flash messages
   }));

  

    app.get('/logout', function(req,res){
        req.logout();
        res.redirect('/');
    });

};  