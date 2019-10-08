const express = require('express');
const path = require('path');
const exphbs = require('express-hanglebars');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
const mongoose = require('mongoose');
const errorHandler = require('errorhandler');
const flash = require('connect-flash');


const users = require('./routes/users');
const ulogin = require('./routes/ulogin');





const app = express();


const ulogin = require('./routes/ulogin');

mongoose.Promise = global.Promise;

mongoose.connect('mongobd://localhost/ulogin' , {
  useMongoClient: true
})

.then() => console.log("mongobd connected"))
.catch(err => console.log(err));

require('./models/ulogin');
const ulogin =mongoose.model('ulogin');

app.engine('handlears', exphbs({
  defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');

 

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use(methodOverride('_method'));


app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));


app.use(flash());

app.use(function(req, res, next){
  res.locals.success_msg = req.flash('sucess_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
});



//about route 
app.get('/about', (req, res) => {
  res.render('about')
});

//login route user

app.get('/users/login', (req, res) => {
  res.send('login');

});


//my authenticate 

app.post('/login',
  passport.authenticate('local'),
  function(req, res) {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    res.redirect('/users/' + req.user.username);
  });


  var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));


passport.serializeUser(function(user, done) {
   done(null, user.id);
});
 
passport.deserializeUser(function(id, done) {
   User.findById(id, function (err, user) {
      done(err, user);
   });
});



var app = express();
app.use(require('serve-static')(__dirname + '/../../public'));
app.use(require('cookie-parser')());

app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));

app.use(passport.initialize());
app.use(passport.session());
var app = express();
app.use(require('serve-static')(__dirname + '/../../public'));
app.use(require('cookie-parser')());
 
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
 
app.use(passport.initialize());
app.use(passport.session());



app.post('/login',
    passport.authenticate('local', { successRedirect: '/', failureRedirect: '/login', failureFlash: true })
);
















// //Configure mongoose's promise to global promise
// mongoose.promise = global.Promise;

// //Configure isProduction variable
// const isProduction = process.env.NODE_ENV === 'production';

// //Initiate our app
// const app = express();

// //Configure our app



// module.exports = Admin;
// app.use(cors());
// app.use(require('morgan')('dev'));
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, 'public')));
// app.use(session({ secret: 'somethingslight', cookie: { maxAge: 60000 }, resave: false, saveUninitialized: false }));

// if(!isProduction) {
//   app.use(errorHandler());
// }

// //Configure Mongoose
// mongoose.connect('mongodb://localhost/somethingslight');
// mongoose.set('debug', true);

// //Error handlers & middlewares
// if(!isProduction) {
//   app.use((err, req, res) => {
//     res.status(err.status || 500);

//     res.json({
//       errors: {
//         message: err.message,
//         error: err,
//       },
//     });
//   });
// }

// app.use((err, req, res) => {
//   res.status(err.status || 500);

//   res.json({
//     errors: {
//       message: err.message,
//       error: {},
//     },
//   });
// });

// app.listen(8080, () => console.log('Server running on http://localhost:8080/'));