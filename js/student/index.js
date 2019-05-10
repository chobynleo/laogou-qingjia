var student = {
  studentId:'201511821511',
  Name:'郭碧峰',
  department:'数学与计算机学院',
  className:'软件1152',
  select_teacher:['张艺13420120501','杨福光13420120501','岳川13420120501'],
  teacherId:['20151000','20151001','20151002']
};
/*
$('#username').html(student.Name);
$('#studentId').val(student.studentId);
$('#Name').val(student.Name);
$('#department').val(student.department);
$('#className').val(student.className);
*/

console.log(window.sessionStorage.getItem("userId").replace("\"",""))
var studentId = window.sessionStorage.getItem("userId").replace("\"","");
$.ajax({
  type: "get",
  url: "http://47.106.247.251:8010/user/getUserDTO?userId="+studentId,
  data: {},
  cache: false,
  async : false,
  dataType: "json",
  success: function (msg)
  {
    console.log(msg)
    $('#studentId').val(msg.data.userId);
    $('#Name').val(msg.data.userName);
    $('#department').val(msg.data.facultyName);
    $('#className').val(msg.data.clazzName);
    $.ajax({
      type: "get",
      url: "http://47.106.247.251:8010/teacher/selectTeacherForStudent?studentUserId="+studentId,
      /*url: "http://47.106.247.251:8010/teacher/selectTeacherForStudent",*/
      data: {},
      cache: false,
      async : false,
      dataType: "json",
      success: function (msg)
    {
      console.log(msg.data)
      var teacherArray = msg.data;
      for (var i=0;i<msg.data.length;i++){
        $("select[name='select-teacher']").append("<option value="+ teacherArray[i].userId+">"+ teacherArray[i].name+teacherArray[i].phone+"</option>");
      }
    },
      error:function (err) {
        alert("请求失败！");
      }
    });
  },
  error:function (err) {
    alert("请求失败！");
  }
});







