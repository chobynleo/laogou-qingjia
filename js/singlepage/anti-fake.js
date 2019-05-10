function  querycode() {
  $("#queryresult").empty();
  /*var data = {
    number:'201511701223',
    person:'李老狗',
    time:'2018年12月1日-2019年1月1日',
    status:'已同意'
  };
  var number = data.number.substr(0, 8)+'****';
  var person = data.person.substr(0, 1)+'**';
  var time = data.time;
  var status = data.status;
  var str = "<table  border=\"0\" cellspacing=\"0\" cellpadding=\"0\" class=\"table\">\n" +
    "\n" +
    "                            <tr class=\"active\">\n" +
    "                                <td width=\"50%\">学号</td>\n" +
    "                                <td>"+ number +"</td>\n" +
    "                            </tr>\n" +
    "                            <tr class=\"active\">\n" +
    "                                <td>请假人</td>\n" +
    "                                <td>"+ person +"</td>\n" +
    "                            </tr>\n" +
    "                            <tr class=\"active\">\n" +
    "                                <td>时间</td>\n" +
    "                                <td>"+ time +"</td>\n" +
    "                            </tr>\n" +
    "                            <tr class=\"active\">\n" +
    "                                <td>状态</td>\n" +
    "                                <td>"+ status +"</td>\n" +
    "                            </tr>\n" +
    "                        </table>";
  var err = '未找到相应的电子假条';*/
  /*if ($("#checkcode").val() === '001'){
    $("#queryresult").append(str);
  }else{
    $("#queryresult").append(err);
  }*/
  /*var url="http://47.106.247.251:8010/message/studentGetMessage?messageId="
    +$("#checkcode").val()+"&callback=?";*/
  var url = "http://47.106.247.251:8010/message/studentGetMessage?messageId="
    + $("#checkcode").val();
  $.ajax({
    url: url,
    type: 'get',
    success: function (res) {
      console.log(res);
      var data = res.data;
      if (data === null) {
        alert('未查询到相应的电子假条！')
      } else {
        var data = res.data;
        var number = data.studentId.substr(0, 8) + '****';
        var person = data.studentName.substr(0, 2) + '**';
        var time = data.creatTime;
        var status = data.status;
        var str = "<table  border=\"0\" cellspacing=\"0\" cellpadding=\"0\" class=\"table\">\n" +
          "\n" +
          "                            <tr class=\"active\">\n" +
          "                                <td width=\"50%\">学号</td>\n" +
          "                                <td>" + number + "</td>\n" +
          "                            </tr>\n" +
          "                            <tr class=\"active\">\n" +
          "                                <td>请假人</td>\n" +
          "                                <td>" + person + "</td>\n" +
          "                            </tr>\n" +
          "                            <tr class=\"active\">\n" +
          "                                <td>时间</td>\n" +
          "                                <td>" + time + "</td>\n" +
          "                            </tr>\n" +
          "                            <tr class=\"active\">\n" +
          "                                <td>状态</td>\n" +
          "                                <td>" + returnstatusval(status) + "</td>\n" +
          "                            </tr>\n" +
          "                        </table>";
        $("#queryresult").append(str);
        //如果为未找到则alert('未找到相应的电子假条')
        }
      },
      error: function (XMLHttpRequest, textStatus, errorThrown) {
        console.log(XMLHttpRequest.status);
        console.log(XMLHttpRequest.readyState);
        console.log(textStatus);
      }
    });
    /*$.jsonp({
      url: url,
      "success": function (res)
      {
        console.log(res)
        var data = res.data;
        var number = data.studentId.substr(0, 8)+'****';
        var person = data.studentName.substr(0, 2)+'**';
        var time = data.creatTime;
        var status = data.status;
        var str = "<table  border=\"0\" cellspacing=\"0\" cellpadding=\"0\" class=\"table\">\n" +
          "\n" +
          "                            <tr class=\"active\">\n" +
          "                                <td width=\"50%\">学号</td>\n" +
          "                                <td>"+ number +"</td>\n" +
          "                            </tr>\n" +
          "                            <tr class=\"active\">\n" +
          "                                <td>请假人</td>\n" +
          "                                <td>"+ person +"</td>\n" +
          "                            </tr>\n" +
          "                            <tr class=\"active\">\n" +
          "                                <td>时间</td>\n" +
          "                                <td>"+ time +"</td>\n" +
          "                            </tr>\n" +
          "                            <tr class=\"active\">\n" +
          "                                <td>状态</td>\n" +
          "                                <td>"+ status +"</td>\n" +
          "                            </tr>\n" +
          "                        </table>";
        $("#queryresult").append(str);
        //如果为未找到则alert('未找到相应的电子假条')
      },
      error:function(XMLHttpRequest, textStatus, errorThrown) {
        console.log(XMLHttpRequest.status);
        console.log(XMLHttpRequest.readyState);
        console.log(textStatus);
    }});*/
}

//请假状态的颜色
var returnstatusval = function(value) {


  if (value == 0)

    return "申请中";

  else if (value == 1)

    return "已批准";

  else if (value == 2)

    return "已拒绝";

  else if (value == 3)

    return "待销假";
  else if (value == 4)

    return "已申请销假";

  else if (value == 5)

    return "已销假";

}