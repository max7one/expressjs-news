$(document).ready(function() {
  /**
   * 导航栏上下切换
   */
  $divider = $('#index_view_navigator .divider');
  $footer = $('#index_view_navigator .footer');
  $down = $('.down-triangle');
  $tr = $("tr:gt(1)");
  $(".more").click(function() {
    $tr.show();
    $divider.show();
    $footer.show();
    $down.css("display", "none");
  });
  $(".less").click(function() {
    $tr.hide();
    $divider.hide();
    $footer.hide();
    $down.css("display", "block");
  });

  /**
   * 图片滚动
   */
  (function() {
    //增加滚动图片
    var ul = $('.g-list')[0];
    ul.innerHTML += ul.innerHTML;
    var n = 1;
    var ico = $('.g-icons i');
    //设定图片宽度
    $('.g-imagebox img').width($('.topic-gallery-container').width());
    $(window).resize(function() {
      $('.g-imagebox img').width($('.topic-gallery-container').width());
    });
    //滚动条滚动
    function tab() {
      for (var i = 0; i < ico.length; i++) {
        ico[i].className = '';
      }
      ico[n % 3].className = 'cur';
    }
    //滚动定时器
    setInterval(function() {
      $('.g-list').css('transition', 'transform 350ms ease-in');
      $('.g-list').css('transform', 'translateX(-' + 100 * n + '%)');
      setTimeout(function() {
        $('.g-list').css('transition', 'none');
        if (n == 4) {
          $('.g-list').css('transform', 'translateX(-100%)');
          n = 1;
        }
        ++n;
      }, 700);
      tab();
    }, 3000);
  })();

/**
 * 热点滚动
 */
  (function() {
    var m = 1;
    setInterval(function() {
      $('.ui-hotword-content').css('transition', 'margin-top 1s ease-out 0s');
      $('.ui-hotword-content').css('margin-top', '-' + 28 * m + 'px');
      setTimeout(function() {
        if (m == 10) {
          $('.ui-hotword-content').css('transition', 'none');
          $('.ui-hotword-content').css('margin-top', '0');
          m = 0;
        }
        ++m;
      }, 1400);
    }, 1500)
  })();

/**
 * 点击加载
 */
  $('.ui-refresh').click(function() {
    $('.ui-refresh div').addClass("ui-refresh-loading");
    $('.ui-refresh span').text("加载中...");
    //AJAX请求
    $.ajax({
      type: 'get',
      url: '/load',
      async: true,
      success: function(html) {
        setTimeout(function() {
          $(".index-list").append(html);
          $('.ui-refresh div').removeClass("ui-refresh-loading");
          $('.ui-refresh span').text("点击加载更多");
        }, 500);
      }
    })
  });
});
