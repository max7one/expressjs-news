$(document).ready(function() {
  /**
   * 按钮提交表单数据
   */
  $('.pass-btn').click(function() {
    if (!$('#username').val() || !$('#password').val()) {
      $('.err').text('用户名或密码不能为空');
    } else {
      $.ajax({
        type: 'post',
        url: '/login',
        async: true,
        data: {
          username: $('#username').val(),
          password: $('#password').val()
        },
        success: function(data, status) {
          location.href = '/system';
        },
        error: function(data, status, e) {
          if (data.status == "404") {
            $('.err').html($('#username').val() + " 不存在");
          } else {
            $('.err').html("密码错误");
          }
        }
      })
    }
  });
  /**
   * 提示文字消失
   */
  $('input[type=text]').focus(function() {
    $('.err').text("");
  })
});
