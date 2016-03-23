var express    = require('express'); // makes sure the express library can be used in our code otherwise our code will not know what express is
var app        = express();
var bodyParser = require('body-parser'); // body parser is a package and the 'require' says to pull in body-parser into express
var passport = require('passport');
var mongoose = require('mongoose');
var uriUtil = require('mongodb-uri');

var options = {
server:  { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
replset: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } }
};  
var mongodbUri = process.env.MONGOLAB_URI || "mongodb://localhost/groupOut";
var mongooseUri = uriUtil.formatMongoose(mongodbUri);

mongoose.connect(mongooseUri, options);

var session = require('express-session');
var flash = require('connect-flash');

var userRouter = require ('./routes/users');
// var commentRouter = require ('./routes/comments');
var categoriesRouter = require ('./routes/categories');
var levelRouter = require ('./routes/levels');
var groupOutEventRouter = require ('./routes/groupOutEvents');

var userInfo  = require('./models/user'); //users profile

var comment  = require('./models/comment'); //the comment on the Event page
var groupOutEvent = require ('./models/groupOutEvent');
var category = require('./models/category');
var level = require('./models/level');

if (process.env.NODE_ENV === 'production') {
 console.log('Running in production mode');

 app.use('/static', express.static('static'));
} else {
 // When not in production, enable hot reloading

 var chokidar = require('chokidar');
 var webpack = require('webpack');
 var webpackConfig = require('./webpack.config.dev');
 var compiler = webpack(webpackConfig);
 app.use(require('webpack-dev-middleware')(compiler, {
   noInfo: true,
   publicPath: webpackConfig.output.publicPath
 }));
 app.use(require('webpack-hot-middleware')(compiler));

 // Do "hot-reloading" of express stuff on the server
 // Throw away cached modules and re-require next time
 // Ensure there's no important state in there!
 var watcher = chokidar.watch('./server');
 watcher.on('ready', function() {
   watcher.on('all', function() {
     console.log('Clearing /server/ module cache from server');
     Object.keys(require.cache).forEach(function(id) {
       if (/\/server\//.test(id)) delete require.cache[id];
     });
   });
 });
}



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

var FACEBOOK_APP_ID = process.env.FACEBOOK_APP_ID || '1732046997082547';


app.get('/', function(req,res){
  console.log('rendering /');
  res.render('index', {FACEBOOK_APP_ID: FACEBOOK_APP_ID});
});
app.get('./partial', function(req,res){
  res.render('navbar');
});

app.get('/goeventview?', function(req,res){
  console.log(req.query.q);
  res.render('goeventview');
});


app.get('/about', function(req,res) {
  res.render('about');
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
app.use('/api/levels', levelRouter );
app.use('/api/user', userRouter );

app.use('/api/event', groupOutEventRouter);

// we debug server js in our terminal
// if this works we will see the string in our terminal
app.listen(port, function() {
  // this prints in our terminal
  // this was the specific terminal we did our nodemon server.js 
  console.log('Magic happens on port ' + port)
});


