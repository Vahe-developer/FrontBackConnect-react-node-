var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require("mongoose");
var cors = require("cors");


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var myTask = require("./routes/myTask/mytask");


mongoose.connect('mongodb://localhost:27017/Fouraitch', {useNewUrlParser: true});



var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());





app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/task",myTask);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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












app.listen(7777,function () {
  console.log("server is listening")
})

module.exports = app;


