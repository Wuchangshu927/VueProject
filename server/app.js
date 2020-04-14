var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var cors=require('cors')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors())
// app.all("*", function(req, res, next) {
//   if (!req.get("Origin")) return next();
//   // use "*" here to accept any origin
//   // res. header('Access-Control-Allow-Credentials','true');
//   // res.set("Access-Control-Allow-Origin", req.headers.origin);
//   res.set("Access-Control-Allow-Origin", '*');
//  // res.set("Access-Control-Allow-Credentials", "true");
//   res.set("Access-Control-Allow-Methods", "GET, POST, PUT ,DELETE");
//   res.set("Access-Control-Allow-Headers", "X-Requested-With, Content-Type,token");
//   // res.set('Access-Control-Allow-Max-Age', 3600);
//   if ("OPTIONS" === req.method) return res.send(200);
//   next();
// });


//session配置
app.use(session({
  cookie: { maxAge: 600000 },
  secret: "asdf"

}))

app.use(function(req, res, next){
  res.locals.user = req.session.user;
  next();
});

app.use(function(req, res, next) {
  res.locals.user = req.session.user;
  var err = req.session.error;
  delete req.session.error;
  res.locals.message = '';
  if (err) {
    res.locals.message = '<div class="alert alert-warning">' + err + '</div>';
  }
  next();
});

var onlineUsers = {};
//当前在线人数
var onlineCount = 0;
io.on('connection', function (conn) {
  conn.on('login', function (obj) {
    console.log('login', obj);
    if (!onlineUsers.hasOwnProperty(obj.userid)) {
      onlineUsers[obj.userid] = {
        id: obj.userid,
        conn: conn
      };
      onlineCount++;
    }
  });
  conn.on('disconnect', function (data) {
    console.log("关闭ing")
    console.log(data)
    console.log(conn.nsp)

    if (onlineUsers.hasOwnProperty(conn.userid)) {
      var obj = {
        id: obj.userid,
        conn: conn
      };
      delete onlineUsers[conn.userid];
      onlineCount--;
      console.log("关闭成功")
    }
  });
  conn.on('sendMsg', function (data) {
      console.log(data)
    var rids = data.to.split(',')
    for (let id of rids) {
      if (id) {
        var receiver = onlineUsers[id]
        console.log(receiver)
        if (receiver) {
          let i=receiver.conn.emit('receiveMsg', {from:data.from,msg:data.msg})
        }
      }
    }
  })
});
app.use('/', indexRouter);
app.use('/users', usersRouter);

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
server.listen('3000', () => {
  console.log('open Browser on http://127.0.0.1:3000')
})


module.exports = app;
