var main = require('../handlers/main');

module.exports = function(app) {
  /**
   * home请求
   */
  app.get('/', main.home);
  app.get('/load', main.load);

  /**
   * 登录请求
   */
  app.get('/login', main.loginGet);
  app.post('/login', main.loginPost);

  /**
   * 系统后台请求
   */
  app.get('/system', main.system);
  app.get('/system/addnews', main.addnewsGet);
  app.post('/system/addnews/content', main.addnewsPost);
  app.get('/system/del', main.newsdel);

  /**
   * 用户注销
   */
  app.get('/logout', main.logout);
}


