var orm = require('orm');
var userdata = require('../user');
var querystring = require('querystring');
var url = require('url');

module.exports = function(req, res, fields) {
  orm.connect("mysql://root:@localhost/test?dateStrings=date", function(err, db) {
    if (err) throw err;
    //定义数据表
    var User = db.define("news", {
      newsid: {
        type: 'integer',
        key: true
      },
      newstitle: String,
      newsimg: String,
      newscontent: String,
      addtime: {
        type: 'date'
      },
      source: String
    });
    if (req.method == 'GET') {
      //查找全部
      User.find({}, function(err, data) {
        var sendData = {
          newsall: data
        };
        /**
         * 判断URL
         */
        switch (req.path) {
          case "/":
            res.render('home', sendData);
            break;
          case "/load":
            res.render('partials/content-list', sendData, function(err, html) {
              res.send(html);
            });
            break;
          case "/system":
            res.render('system', sendData);
            break;
          case "/system/del":
            var query = url.parse(req.url).query;
            console.log(query);
            var newsid = querystring.parse(query).newsid;
            var arr = newsid.split(',');
            User.find({
              newsid: arr
            }).remove(function(err) {
              res.sendStatus(200);
            });
            break
        }
      })
    } else {
      User.create({
        newstitle: fields.newstitle,
        newsimg: fields.newsimg,
        newscontent: fields.newscontent,
        addtime: fields.addtime,
        source: fields.source
      }, function(err, data) {});
      res.redirect('/system');
    }
  })
};
