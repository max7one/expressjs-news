$(document).ready(function() {
  //全选
  $('#checkall').click(function() {
    if ($(this).prop("checked")) {
      $('.check').prop("checked", true);
    } else {
      $('.check').prop("checked", false);
    }
  });

  $('#btndel').click(function() {
    if (confirm("确定删除?")) {
      $tr = $(':checked').parent().parent();
      var array = [];
      for (var i = 0; i < $tr.length; i++) {
        array.push($tr.eq(i).attr('data-newsid'));
      }
      console.log(array);
      $.ajax({
        type: 'get',
        url: '/system/del?newsid='+array,
        async: true,
        success: function(data, status) {
          if (status == 'success') {
            location.href = '/system';
          }
        },
      })
    }
  })
});
