var table = require("../models/mysql");
var userdata = require('../user');
var formidable = require('formidable');
var uuid = require('node-uuid');
var bodyParser = require('body-parser');
var fs = require('fs');

exports.home = function(req, res) {
  table(req, res);
}

exports.load = function(req, res) {
  table(req, res);
}

exports.loginGet = function(req, res) {
  res.render('login');
}

exports.system = function(req, res) {
  if (req.session.sign) { //检查用户是否已经登录，如果已登录展现已登录页面
    table(req, res);
  } else { //否则展示index页面
    res.render('login');
  }
}

exports.addnewsGet = function(req, res) {
  if (req.session.sign) { //检查用户是否已经登录，如果已登录展现已登录页面
    res.render('addnews');
  } else { //否则展示index页面
    res.render('login');
  }
}


exports.loginPost = function(req, res) {
  var username = req.body.username;
  var password = req.body.password;
  if (userdata[username] && userdata[username].password == password) {
    req.session.sign = true;
    req.session.username = req.body.username;
    res.sendStatus(200);
  } else if (!userdata[username]) {
    res.sendStatus(404);
  } else {
    res.sendStatus(434);
  }
}

exports.addnewsPost = function(req, res) {
  var form = new formidable.IncomingForm();
  form.parse(req, function(err, fields, files) {
    var extName = /\.[^\.]+/.exec(files.file.name);
    var ext = Array.isArray(extName) ? extName[0] : '';
    // //重命名，以防文件重复
    var avatarName = uuid() + ext;
    // //移动的文件目录
    var newPath = 'upload/img/' + avatarName;
    fs.renameSync(files.file.path, newPath);
    // res.send('success');
    fields.newsimg = 'img/' + avatarName;
    table(req, res, fields);
  })
}

exports.newsdel = function(req, res) {
  if (req.session.sign) {
    console.log(req.url);
    table(req, res);
  } else {
    res.send('error');
  }
}

exports.logout = function(req, res) {
  req.session.destroy();
  res.redirect('/');
}
