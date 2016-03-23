// routes/fbroutes.js

module.exports = function(app, passport) {

    // route for home page
    var FACEBOOK_APP_ID = process.env.FACEBOOK_APP_ID || '1732046997082547';

    app.get('/', function(req,res){
      console.log('rendering / after login');
      res.render('index', {FACEBOOK_APP_ID: FACEBOOK_APP_ID});
    });

    // route for login form
    // route for processing the login form
    // route for signup form
    // route for processing the signup form

    // route for showing the profile page
    app.get('/profile', isLoggedIn, function(req, res) {
        res.render('profile', {
            user : req.user // get the user out of session and pass to template
        });
    });

    app.get('/goeventcreate', isLoggedIn, function(req, res){
    var user = req.user || "no user";
        res.render('goeventcreate', {user: user});
});

    // =====================================
    // FACEBOOK ROUTES =====================
    // =====================================
    // route for facebook authentication and login
    app.get('/auth/facebook', passport.authenticate('facebook', { scope : 'email' }));

    // handle the callback after facebook has authenticated the user
    app.get('/auth/facebook/callback',
        passport.authenticate('facebook', {
            successRedirect : '/',
            failureRedirect : '/'
        }));

    // route for logging out
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });

};

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page

    res.redirect('/');   
}

