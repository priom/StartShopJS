const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const helmet = require('helmet');
const passport = require('passport');
const flash = require('connect-flash');
const validator = require('express-validator');

const index = require('./routes/index');
const user = require('./routes/userRoute');

const app = express();

app.use(helmet());

// connect to mongodb
//mongoose.connect('mongodb://localhost/startshopDB', {
mongoose.connect('mongodb://startshop:startshop@ds149433.mlab.com:49433/startshop', {
    useMongoClient: true
});

require('./config/passport');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(validator());
app.use(cookieParser());

// setting csrf token for session
app.use(session({ secret: '2FjNWBV6AOgoCaDY04IcdyUwSLsqhE3Q', resave: false, saveUninitialized: false }))

app.use(flash());

// passport config
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  res.locals.login = req.isAuthenticated();
  next();
});

app.use('/', index);
app.use('/user', user);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
