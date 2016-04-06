/**
 * 依赖模块
 */
var express = require('express');
var session = require('express-session');
var exphbs = require('express-handlebars');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var path = require('path');
var user = require('./user');

var app = express();

/**
 *  模板
 */
app.engine('hbs', exphbs({
  // layoutsDir: 'views',
  // defaultLayout: 'main',
  extname: '.hbs',
  helpers: {
    static: function(name) {
      return require('./lib/static').map(name);
    }
  }
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// 端口
app.set('port', process.env.PORT || 3000);
// 静态资源映射
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/upload'));


// parse application/json
app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({
//   extended: false
// }));
app.use(bodyParser());
app.use(cookieParser());


app.use(session({
  secret: 'login', //为了安全性的考虑设置secret属性
  cookie: {
    secure: false,
    maxAge: 60 * 1000 * 30 //设置过期时间
  },
  resave: true, // 即使 session 没有被修改，也保存 session 值，默认为 true
  saveUninitialized: true, //
}));

//引入路由
require('./routes/routes.js')(app);


//监听端口
app.listen(app.get('port'), function() {
  console.log('Express started on http://localhost:' +
    app.get('port') + '; press Ctrl-C to terminate.');
});
