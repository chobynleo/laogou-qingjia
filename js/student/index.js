var student = {
  studentId:'201511701224',
  Name:'李老狗',
  department:'数学与计算机学院',
  className:'软件1152',
  select_teacher:['张艺13420120501','杨福光13420120501','岳川13420120501']
};
$('#username').html(student.Name);
$('#studentId').val(student.studentId);
$('#Name').val(student.Name);
$('#department').val(student.department);
$('#className').val(student.className);

for (var i=0;i<student.select_teacher.length;i++){
  $("select[name='select-teacher']").append("<option value="+ i+">"+ student.select_teacher[i]+"</option>");
}



/*
$.ajax({
  type: "get",
  url: url,
  data: {},
  cache: false,
  async : false,
  dataType: "json",
  success: function (msg)
  {
    $('#studentId').val(msg.studentId);
    $('#Name').val(msg.studentId);
    $('#department').val(msg.studentId);
    $('#className').val(msg.studentId);
  },
  error:function (err) {
    alert("请求失败！");
  }
});*/
