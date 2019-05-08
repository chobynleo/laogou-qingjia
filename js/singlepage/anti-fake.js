function  querycode() {
  $("#queryresult").empty();
  var data = {
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
  var err = '未找到相应的电子假条';
  /*if ($("#checkcode").val() === '001'){
    $("#queryresult").append(str);
  }else{
    $("#queryresult").append(err);
  }*/
  var url="http://47.106.247.251:8010/message/studentGetMessage?messageId="
    +$("#checkcode").val()+"&callback=?";
    $.jsonp({
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
      "error": function(d,msg) {
        alert("Could not find user "+msg);
      }
    });
}