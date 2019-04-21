var user = {
    student: {
        name : "李老狗",
        usercount : "123",
        password : "123"
    },
    teacher: {
        name : "岳川",
        usercount : "asd",
        password : "asd"
    },
    secretary:{
      name : "周荣伟",
      usercount : "123asd",
      password : "123asd"
    }
}
$(function() {

  $('#mpanel').codeVerify({
    type: 1,
    width: '80px',
    height: '27px',
    fontSize: '18px',
    codeLength: 4,
    btnId: 'submitbutton', // 登陆按钮ID
    ready: function() {},
    success: function() {
      // 验证成功之后调用登陆方法
      var radio=document.getElementsByName("radio");
      var checkbox = false;
      var checkboxid = 0;
      for(var i=0;i<radio.length;i++){
        if(radio[i].checked == true){
          checkbox = true;
          checkboxid = i;
        }
      }

      if ($("#username").val() !== "" && $("#password").val() !== "" && checkbox) {
        var data = {"username":$("#username").val(),"password":$("#password").val(),"checkbox":checkboxid}
        console.log(data);
        //这里来个假数据跳转
        jiashujulogin(data);
        $.ajax({
          type: "post",
          url: url,
          data: {"username":$("#username").val(),"password":$("#password").val(),"checkbox":checkboxid},
          cache: false,
          async : false,
          dataType: "json",
          success: function (msg)
          {
            window.location.href = ""
          },
          error:function (err) {
            alert("请求失败！");
          }
        });
      }else{
        alert("请填写完整的账号信息后登录!");
      }
    },
    error: function() {
      var radio=document.getElementsByName("radio");
      var checkbox = false;
      for(var i=0;i<radio.length;i++){
        if(radio[i].checked == true){
          checkbox = true;
        }
      }

      if ($("#username").val() !== "" && $("#password").val() !== "" && checkbox) {
        alert("验证码错误");
      }else{
        alert("请填写完整的账号信息后登录!");
      }

    }
  });

});

function denglutiaozhuan(){
	var radio=document.getElementsByName("radio");
	var checkbox = false;
	for(var i=0;i<radio.length;i++){
	  if(radio[i].checked == true){
      checkbox = true;
    }
  }

  if ($("#username").val() !== "" && $("#password").val() !== "" && checkbox) {

  }else{
    alert("请填写完整的账号信息后登录!")
  }
	i/*f(radio[0].checked == true){
		window.location.href="http://localhost:8080/YibanLeaveSystem/YibanLeaveSystem/views/zqu/student/index.html#";
	}
	if(radio[1].checked == true){
		window.location.href="http://localhost:8080/YibanLeaveSystem/YibanLeaveSystem/views/zqu/teacher/jqgrid.html"
	}*/
		
}

/*$("#submitbutton").click(function(){debugger
    if ($("#username").val() === user.teacher.usercount || $("#username").val() === user.student.usercount) {
        if ($("#password").val() === user.teacher.password || $("#password").val() === user.student.password) {
            if ($("#username").val() === "asdasd") {
                //跳转到教工端
                window.location.href = "#";
            } else {
                //跳转到学生端
                window.location.href = "#";
            }
        } else {
            alert("密码不正确！");
        }
    } else {
        alert("用户账户不正确！");
    }

})*/

function jiashujulogin(data) {
  console.log(data);
  switch(data.checkbox)
  {
    case 0:
      //学生
      if(data.username === '123' && data.password === '123'){
        window.location.href = 'student/index.html';
      }else{
        alert('请检查用户名和密码是否正确，以及是否与身份匹配')
      }
      break;
    case 1:
      //老师
      if(data.username === 'asd' && data.password === 'asd'){
        window.location.href = 'teacher/jqgrid.html';
      }else{
        alert('请检查用户名和密码是否正确，以及是否与身份匹配')
      }
      break;
    case 2:
      //副书记
      if(data.username === '123asd' && data.password === '123asd'){
        window.location.href = 'secretary/jqgrid.html';
      }else{
        alert('请检查用户名和密码是否正确，以及是否与身份匹配')
      }
      break;
    default:
      alert('请检查用户名和密码是否正确，以及是否与身份匹配')
  }
}