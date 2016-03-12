var express    = require('express'); // makes sure the express library can be used in our code otherwise our code will not know what express is
var app        = express();
var bodyParser = require('body-parser'); // body parser is a package and the 'require' says to pull in body-parser into express
var passport = require('passport');
var mongoose   = require('mongoose');
mongoose.connect('mongodb://localhost/groupOut');

var session = require('express-session');
var flash = require('connect-flash');

var userRouter = require ('./routes/users');
// var commentRouter = require ('./routes/comments');
var categoriesRouter = require ('./routes/categories');
var groupOutEventRouter = require ('./routes/groupOutEvents');

var userInfo  = require('./models/user'); //users profile

var comment  = require('./models/comment'); //the comment on the Event page
var groupOutEvent = require ('./models/groupOutEvent');
var category = require('./models/category');




app.use(bodyParser.urlencoded({ extended: true}));  // app.use is the important part.  It mounts middleware. You need the rest, 'Harold says he doesn't even really understand it'
app.use(bodyParser.json());

// ===============================================================================

app.use(session({
 secret: 'ilovescotchscotchyscotchscotch'
})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(session({
 cookie: {
   maxAge: 60000
 }
}));
app.use(flash());

require('./config/passport')(passport);
// routes ======================================================================
require('./routes/fbroutes')(app, passport);


app.use(express.static('public')); //  configures to use all the files in the public folder as static files


app.set('view engine', 'ejs');
app.get('/', function(req,res){
  res.render('index');
});
app.get('./partial', function(req,res){
  res.render('navbar');
});


app.get('/goevent', function(req, res){
	var user = req.user || "no user";
		res.render('goevent', {user: user});
});

app.get('/template', function(req,res) {
  res.render('template');
});

app.get('/tester', function(req,res) {
  res.render('tester');
});





var port = process.env.PORT || 6060; // this sets the port we are going to use 

// ===============================================================================

// app.get connects to our router to our app
// it looks in our index which is represented by our /
// the / is not needed but is a best practice to point at our root directory
// the function parametes are a Request, Response pair
//  
// app.use('/api/comments', commentRouter );
app.use('/api/categories', categoriesRouter );
app.use('/api/user', userRouter );

app.use('/api/event', groupOutEventRouter);

// we debug server js in our terminal
// if this works we will see the string in our terminal
app.listen(port, function() {
  // this prints in our terminal
  // this was the specific terminal we did our nodemon server.js 
  console.log('Magic happens on port ' + port)
});


