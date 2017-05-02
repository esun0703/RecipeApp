var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var path = require('path');
var cookieParser = require('cookie-parser');
var PORT = process.env.PORT || 3000;
var flash = require('connect-flash');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongo = require('mongodb');
var mongoose = require('mongoose');
var expressValidator = require('express-validator');

////////The Mongoose.connect should link to franco's heroku mlab link
mongoose.connect('mongodb://localhost/userfoods');
///////
var db = mongoose.connection;

// Init App
var app = express();

////////////////
// // View Engine (do we need this?)
// app.set('views', path.join(__dirname, 'views'));
// app.engine('handlebars', exphbs({defaultLayout:'layout'}));
// app.set('view engine', 'handlebars');
//////////////////////

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: true }))
 
// parse application/json 
app.use(bodyParser.json({ type: 'application/**json'}))

app.use(bodyParser.raw({type: 'application/vnd.custom-type'}))

app.use(bodyParser.text({type: 'text/html'}))


// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

//Routes
require("./apiRoutes.js")(app);

// Express Session
app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: true
}));

// Passport init
app.use(passport.initialize());
app.use(passport.session());

// Express Validator
app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
      var namespace = param.split('.')
      , root    = namespace.shift()
      , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));

// Connect Flash
app.use(flash());

// Global Vars
app.use(function (req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  res.locals.user = req.user || null;
  next();
});





app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});