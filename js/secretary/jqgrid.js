var teacher = {
  studentId:'201511701224',
  Name:'  ',
  department:'数学与计算机学院',
  select_teacher:['张艺13420120501','杨福光13420120501','岳川13420120501'],
  teacherid: '001'//教师id
};
$('#username').html(teacher.Name);


var datalist = [{
  name:'李老狗',
  className:'软件1152',
  studentId:"201511701221",
  department:'数学与计算机学院',
  targetteacher:"岳川",
  phone:"13420120501",
  jiatiaoid:"SJ001",
  jieshu:"1-8",
  reason:"参加学术会议。",
  needxiaojia:0, //该学生是否需要销假，0代表否，1代表需要(体现在查看详情的switch里面。)
  teacheradvice:"",
  secretaryadvice:"",
  beginTime:"2019-01-21 16:48",
  endTime:"2119-01-21 16:48",
  createTime:"2119-01-21 16:48",
  status: 0,//当前状态
  teacherid: '1152001',//教师id
  isteacheragreeqingjia:0,//老师是否同意了请假，0代表没有，1代表有(体现在请假详情模态框的同意按钮上。)
  issecretaryagreeqingjia:0,//副书记是否同意了请假，0代表没有，1代表有(体现在请假详情模态框的同意按钮上。)
  xiaojiaqingqiu:'',//学生填写的销假请求，(体现在销假确认模态框内的销假请求)
  isteacherxiaojiaqueren:'0',//目标老师有没有进行销假确认，0代表没有，1代表有(体现在销假确认模态框内的销假确认按钮。)
  querenrenmsg:'',//(体现在销假确认模态框内的确认人信息栏。)
  isxiaojia:0,//该学生是否需要销假，0代表不需要，1需要
  xiaojiastatus:0//销假状态 0代表未申请 1代表申请中 2代表销假已完成
},
  {
    name:'李老狗',
    className:'软件1152',
    studentId:"201511701221",
    department:'数学与计算机学院',
    targetteacher:"岳川",
    phone:"13420120501",
    jiatiaoid:"SJ001",
    jieshu:"1-8",
    reason:"参加学术会议。",
    needxiaojia:1, //该学生是否需要销假，0代表否，1代表需要(体现在查看详情的switch里面。)
    teacheradvice:"情况属实，同意请假。已同意， 岳川 2019/3/3 12:50",
    secretaryadvice:"",
    beginTime:"2019-01-21 16:48",
    endTime:"2119-01-21 16:48",
    createTime:"2119-01-21 16:48",
    status: 1,//当前状态
    teacherid: '1152001',//教师id
    isteacheragreeqingjia:1,//老师是否同意了请假，0代表没有，1代表有(体现在请假详情模态框的同意按钮上。)
    issecretaryagreeqingjia:0,//副书记是否同意了请假，0代表没有，1代表有(体现在请假详情模态框的同意按钮上。)
    xiaojiaqingqiu:'请求岳川老师销假',
    isteacherxiaojiaqueren:'0',//目标老师有没有进行销假确认，0代表没有，1代表有(体现在销假确认模态框内的销假确认按钮。)
    querenrenmsg:'',//(体现在销假确认模态框内的确认人信息栏。)
    isxiaojia:0,//该学生是否需要销假，0代表不需要，1需要
    xiaojiastatus:0//销假状态 0代表未申请 1代表申请中 2代表销假已完成
  },
  {
    name:'李老狗',
    className:'软件1152',
    studentId:"201511701221",
    department:'数学与计算机学院',
    targetteacher:"岳川",
    phone:"13420120501",
    jiatiaoid:"SJ001",
    jieshu:"1-8",
    reason:"参加学术会议。",
    needxiaojia:0, //该学生是否需要销假，0代表否，1代表需要(体现在查看详情的switch里面。)
    teacheradvice:"",
    secretaryadvice:"",
    beginTime:"2019-01-21 16:48",
    endTime:"2119-01-21 16:48",
    createTime:"2119-01-21 16:48",
    status: 2,//当前状态
    teacherid: '1152001',//教师id
    isteacheragreeqingjia:0,//老师是否同意了请假，0代表没有，1代表有(体现在请假详情模态框的同意按钮上。)
    issecretaryagreeqingjia:0,//副书记是否同意了请假，0代表没有，1代表有(体现在请假详情模态框的同意按钮上。)
    xiaojiaqingqiu:'',
    isteacherxiaojiaqueren:'0',//目标老师有没有进行销假确认，0代表没有，1代表有(体现在销假确认模态框内的销假确认按钮。)
    querenrenmsg:'',//(体现在销假确认模态框内的确认人信息栏。)
    isxiaojia:1,//该学生是否需要销假，0代表不需要，1需要
    xiaojiastatus:0//销假状态 0代表未申请 1代表申请中 2代表销假已完成
  },
  {
    name:'李老狗',
    className:'软件1152',
    studentId:"201511701221",
    department:'数学与计算机学院',
    targetteacher:"岳川",
    phone:"13420120501",
    jiatiaoid:"SJ001",
    jieshu:"1-8",
    reason:"参加学术会议。",
    needxiaojia:1, //该学生是否需要销假，0代表否，1代表需要(体现在查看详情的switch里面。)
    teacheradvice:"情况属实，同意请假。已同意， 岳川 2019/3/3 12:50",
    secretaryadvice:"",
    beginTime:"2019-01-21 16:48",
    endTime:"2119-01-21 16:48",
    createTime:"2119-01-21 16:48",
    status: 3,//当前状态
    teacherid: '1152001',//教师id
    isteacheragreeqingjia:1,//老师是否同意了请假，0代表没有，1代表有(体现在请假详情模态框的同意按钮上。)
    issecretaryagreeqingjia:0,//副书记是否同意了请假，0代表没有，1代表有(体现在请假详情模态框的同意按钮上。)
    xiaojiaqingqiu:'请求岳川老师销假',
    isteacherxiaojiaqueren:'0',//目标老师有没有进行销假确认，0代表没有，1代表有(体现在销假确认模态框内的销假确认按钮。)
    querenrenmsg:'',//(体现在销假确认模态框内的确认人信息栏。)
    isxiaojia:0,//该学生是否需要销假，0代表不需要，1需要
    xiaojiastatus:0//销假状态 0代表未申请 1代表申请中 2代表销假已完成
  },
  {
    name:'李老狗',
    className:'软件1152',
    studentId:"201511701221",
    department:'数学与计算机学院',
    targetteacher:"刘桃丽",
    phone:"13420120501",
    jiatiaoid:"SJ001",
    jieshu:"1-8",
    reason:"参加学术会议。",
    needxiaojia:0, //该学生是否需要销假，0代表否，1代表需要(体现在查看详情的switch里面。)
    teacheradvice:"",
    secretaryadvice:"",
    beginTime:"2019-01-21 16:48",
    endTime:"2119-01-21 16:48",
    createTime:"2119-01-21 16:48",
    status: 4,//当前状态
    teacherid: '1152002',//教师id，这个例子代表不是目标老师
    isteacheragreeqingjia:0,//老师是否同意了请假，0代表没有，1代表有(体现在请假详情模态框的同意按钮上。)
    issecretaryagreeqingjia:0,//副书记是否同意了请假，0代表没有，1代表有(体现在请假详情模态框的同意按钮上。)
    xiaojiaqingqiu:'请求刘桃丽老师销假',
    isteacherxiaojiaqueren:'1',//目标老师有没有进行销假确认，0代表没有，1代表有(体现在销假确认模态框内的销假确认按钮。)
    querenrenmsg:'刘桃丽 2018/3/6 10:08',//(体现在销假确认模态框内的确认人信息栏。)
    isxiaojia:0,//该学生是否需要销假，0代表不需要，1需要
    xiaojiastatus:0//销假状态 0代表未申请 1代表申请中 2代表销假已完成
  },
  {
    name:'李老狗',
    className:'软件1152',
    studentId:"201511701221",
    department:'数学与计算机学院',
    targetteacher:"岳川",
    phone:"13420120501",
    jiatiaoid:"SJ001",
    jieshu:"1-8",
    reason:"参加学术会议。",
    needxiaojia:1, //该学生是否需要销假，0代表否，1代表需要(体现在查看详情的switch里面。)
    teacheradvice:"情况属实，同意请假。已同意， 岳川 2019/3/3 12:50",
    secretaryadvice:"",
    beginTime:"2019-01-21 16:48",
    endTime:"2119-01-21 16:48",
    createTime:"2119-01-21 16:48",
    status: 5,//当前状态
    teacherid: '1152001',//教师id
    isteacheragreeqingjia:0,//老师是否同意了请假，0代表没有，1代表有(体现在请假详情模态框的同意按钮上。)
    issecretaryagreeqingjia:0,//副书记是否同意了请假，0代表没有，1代表有(体现在请假详情模态框的同意按钮上。)
    xiaojiaqingqiu:'请求岳川老师销假',
    isteacherxiaojiaqueren:'0',//目标老师有没有进行销假确认，0代表没有，1代表有(体现在销假确认模态框内的销假确认按钮。)
    querenrenmsg:'',//(体现在销假确认模态框内的确认人信息栏。)
    isxiaojia:0,//该学生是否需要销假，0代表不需要，1需要
    xiaojiastatus:0//销假状态 0代表未申请 1代表申请中 2代表销假已完成
  },
  {
    name:'李老狗',
    className:'软件1152',
    studentId:"201511701221",
    department:'数学与计算机学院',
    targetteacher:"刘桃丽",
    phone:"13420120501",
    jiatiaoid:"SJ001",
    jieshu:"1-8",
    reason:"参加学术会议。",
    needxiaojia:0, //该学生是否需要销假，0代表否，1代表需要(体现在查看详情的switch里面。)
    teacheradvice:"",
    secretaryadvice:"",
    beginTime:"2019-01-21 16:48",
    endTime:"2119-01-21 16:48",
    createTime:"2119-01-21 16:48",
    status: 4,//当前状态
    teacherid: '1152002',//教师id，这个例子代表不是目标老师
    isteacheragreeqingjia:0,//老师是否同意了请假，0代表没有，1代表有(体现在请假详情模态框的同意按钮上。)
    issecretaryagreeqingjia:0,//副书记是否同意了请假，0代表没有，1代表有(体现在请假详情模态框的同意按钮上。)
    xiaojiaqingqiu:'请求刘桃丽老师销假',
    isteacherxiaojiaqueren:'1',//目标老师有没有进行销假确认，0代表没有，1代表有(体现在销假确认模态框内的销假确认按钮。)
    querenrenmsg:'刘桃丽 2018/3/6 10:08',//(体现在销假确认模态框内的确认人信息栏。)
    isxiaojia:0,//该学生是否需要销假，0代表不需要，1需要
    xiaojiastatus:0//销假状态 0代表未申请 1代表申请中 2代表销假已完成
  },
  {
    name:'李老狗',
    className:'软件1152',
    studentId:"201511701221",
    department:'数学与计算机学院',
    targetteacher:"刘桃丽",
    phone:"13420120501",
    jiatiaoid:"SJ001",
    jieshu:"1-8",
    reason:"参加学术会议。",
    needxiaojia:0, //该学生是否需要销假，0代表否，1代表需要(体现在查看详情的switch里面。)
    teacheradvice:"",
    secretaryadvice:"",
    beginTime:"2019-01-21 16:48",
    endTime:"2119-01-21 16:48",
    createTime:"2119-01-21 16:48",
    status: 4,//当前状态
    teacherid: '1152002',//教师id，这个例子代表不是目标老师
    isteacheragreeqingjia:0,//老师是否同意了请假，0代表没有，1代表有(体现在请假详情模态框的同意按钮上。)
    issecretaryagreeqingjia:0,//副书记是否同意了请假，0代表没有，1代表有(体现在请假详情模态框的同意按钮上。)
    xiaojiaqingqiu:'请求刘桃丽老师销假',
    isteacherxiaojiaqueren:'1',//目标老师有没有进行销假确认，0代表没有，1代表有(体现在销假确认模态框内的销假确认按钮。)
    querenrenmsg:'刘桃丽 2018/3/6 10:08',//(体现在销假确认模态框内的确认人信息栏。)
    isxiaojia:0,//该学生是否需要销假，0代表不需要，1需要
    xiaojiastatus:0//销假状态 0代表未申请 1代表申请中 2代表销假已完成
  },
  {
    name:'李老狗',
    className:'软件1152',
    studentId:"201511701221",
    department:'数学与计算机学院',
    targetteacher:"刘桃丽",
    phone:"13420120501",
    jiatiaoid:"SJ001",
    jieshu:"1-8",
    reason:"参加学术会议。",
    needxiaojia:0, //该学生是否需要销假，0代表否，1代表需要(体现在查看详情的switch里面。)
    teacheradvice:"情况属实，同意请假。已同意， 刘桃丽 2019/1/20 12:50",
    secretaryadvice:"",
    beginTime:"2019-01-21 16:48",
    endTime:"2019-01-25 16:48",
    createTime:"2119-01-21 16:48",
    status: 4,//当前状态
    teacherid: '1152002',//教师id，这个例子代表不是目标老师
    isteacheragreeqingjia:1,//老师是否同意了请假，0代表没有，1代表有(体现在请假详情模态框的同意按钮上。)
    issecretaryagreeqingjia:0,//副书记是否同意了请假，0代表没有，1代表有(体现在请假详情模态框的同意按钮上。)
    xiaojiaqingqiu:'请求刘桃丽老师销假',
    isteacherxiaojiaqueren:'1',//目标老师有没有进行销假确认，0代表没有，1代表有(体现在销假确认模态框内的销假确认按钮。)
    querenrenmsg:'刘桃丽 2018/3/6 10:08',//(体现在销假确认模态框内的确认人信息栏。)
    isxiaojia:1,//该学生是否需要销假，0代表不需要，1需要
    xiaojiastatus:1//销假状态 0代表未申请 1代表申请中 2代表销假已完成
  },
  {
    name:'李老狗',
    className:'软件1152',
    studentId:"201511701221",
    department:'数学与计算机学院',
    targetteacher:"刘桃丽",
    phone:"13420120501",
    jiatiaoid:"SJ001",
    jieshu:"1-8",
    reason:"参加学术会议。",
    needxiaojia:0, //该学生是否需要销假，0代表否，1代表需要(体现在查看详情的switch里面。)
    teacheradvice:"情况属实，同意请假。已同意， 刘桃丽 2019/1/20 12:50",
    secretaryadvice:"",
    beginTime:"2019-01-21 16:48",
    endTime:"2019-01-25 16:48",
    createTime:"2119-01-21 16:48",
    status: 4,//当前状态
    teacherid: '1152002',//教师id，这个例子代表不是目标老师
    isteacheragreeqingjia:1,//老师是否同意了请假，0代表没有，1代表有(体现在请假详情模态框的同意按钮上。)
    issecretaryagreeqingjia:0,//副书记是否同意了请假，0代表没有，1代表有(体现在请假详情模态框的同意按钮上。)
    xiaojiaqingqiu:'请求刘桃丽老师销假',
    isteacherxiaojiaqueren:'1',//目标老师有没有进行销假确认，0代表没有，1代表有(体现在销假确认模态框内的销假确认按钮。)
    querenrenmsg:'刘桃丽 2018/3/6 10:08',//(体现在销假确认模态框内的确认人信息栏。)
    isxiaojia:1,//该学生是否需要销假，0代表不需要，1需要
    xiaojiastatus:1//销假状态 0代表未申请 1代表申请中 2代表销假已完成
  },
  {
    name:'李老狗',
    className:'软件1152',
    studentId:"201511701221",
    department:'数学与计算机学院',
    targetteacher:"刘桃丽",
    phone:"13420120501",
    jiatiaoid:"SJ001",
    jieshu:"1-8",
    reason:"参加学术会议。",
    needxiaojia:0, //该学生是否需要销假，0代表否，1代表需要(体现在查看详情的switch里面。)
    teacheradvice:"情况属实，同意请假。已同意， 刘桃丽 2019/1/20 12:50",
    secretaryadvice:"同意请假。  周荣伟 2019/1/21 12:50",
    beginTime:"2019-01-21 16:48",
    endTime:"2019-01-25 16:48",
    createTime:"2019-01-21 16:48",
    status: 4,//当前状态
    teacherid: '1152002',//教师id，这个例子代表不是目标老师
    isteacheragreeqingjia:1,//老师是否同意了请假，0代表没有，1代表有(体现在请假详情模态框的同意按钮上。)
    issecretaryagreeqingjia:1,//副书记是否同意了请假，0代表没有，1代表有(体现在请假详情模态框的同意按钮上。)
    xiaojiaqingqiu:'请求刘桃丽老师销假',
    isteacherxiaojiaqueren:'1',//目标老师有没有进行销假确认，0代表没有，1代表有(体现在销假确认模态框内的销假确认按钮。)
    querenrenmsg:'刘桃丽 2018/3/6 10:08',//(体现在销假确认模态框内的确认人信息栏。)
    isxiaojia:1,//该学生是否需要销假，0代表不需要，1需要
    xiaojiastatus:2//销假状态 0代表未申请 1代表申请中 2代表销假已完成
  }
];
var banjilist = [];
var teacherId = window.sessionStorage.getItem("userId").replace("\"","");
console.log(teacherId)
$.ajax({
  type: "get",
  url: "http://47.106.247.251:8010/user/getUserDTO?userId="+teacherId,
  data: {},
  cache: false,
  async : false,
  dataType: "json",
  success: function (msg)
  {

    console.log(msg)
    $('#username').html(msg.data.userName);
    window.sessionStorage.setItem("username", msg.data.userName);
    $.ajax({
      type: "get",
      url: "http://47.106.247.251:8010/message/facultyGetMessagePages?facultyUserId="+teacherId+'&pageNum=1&pageSize=10',
      data: {},
      cache: false,
      async : false,
      dataType: "json",
      success: function (msg)
      {
        console.log(msg)
        datalist = msg.data;
        /*console.log(datalist.object.beginTime)*/
        /*console.log(row)*/

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

var yibanId = document.getElementById('dataBox').innerHTML;

$(function () {
  $('#teacherTable').bootstrapTable({
    method:'GET',
    //"/YibanLeaveSystem/Toteacher/list"
    url:"../teacher/info",
    contentType:"application/json",
    dataType:"json",
    search:true,
    cache: false, //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
    striped: false,   //是否显示行间隔色

    icons: {
      paginationSwitchDown: 'glyphicon-collapse-down icon-chevron-down',
      paginationSwitchUp: 'glyphicon-collapse-up icon-chevron-up',
      refresh: 'glyphicon-refresh icon-refresh',
      toggle: 'glyphicon-list-alt icon-list-alt',
      columns: 'glyphicon-th icon-th',
      detailOpen: 'glyphicon-plus icon-plus',
      detailClose: 'glyphicon-minus icon-minus',
    },

    pagination:true,
    clickToselect :true,
    sortable:true,
    showColumns:false,
    sortOrder: 'asc', //排序方式
    queryParams: getQueryParams,
    sidePagination: "client", //分页方式：client客户端分页，server服务端分页（*）
    pageSize: 10,                       //每页的记录行数（*）
    pageList: 10,        //可供选择的每页的行数（*）
    pageNumber: 1,
    paginationPreText: "上一页",
    paginationNextText: "下一页",
    uniqueId: "studentId",                     //每一行的唯一标识，一般为主键列
    idField: "studentId",
    showRefresh: false,                  //是否显示刷新按钮
    showExport: false,
    maintainSelected : true,
    smartDisplay: true,
    searchOnEnterKey: true,
    searchAlign: 'right',
    showToggle:false,                    //是否显示详细视图和列表视图的切换按钮
    cardView: false,                    //是否显示详细视图
    detailView: false,
    minimumCountColumns: 1, //最少允许的列数
    exportDataType: 'all',
    exportTypes:[ 'csv', 'txt', 'sql', 'doc', 'excel', 'xlsx', 'pdf'],  //导出文件类型

    //可供选择的每页的行数（*）
    onPageChange: function (size, number) {

    },
    onEditableSave: function (field, row, oldValue, $el) {
      //四个参数field, row, oldValue, $el分别对应着当前列的名称、当前行数据对象、更新前的值、编辑的当前单元格的jQuery对象。

    },
    //最顶上的checkbox被选中
    onCheckAll: function (row) {
      $('#printExcel').attr("disabled",false);
    },
    //最顶上的checkbox被取消
    onUncheckAll: function (row) {
      $('#printExcel').attr("disabled",true);
    },
    //单行最前面的checkbox被选中
    onCheck: function (row) {
      $('#printExcel').attr("disabled",false);
    },
    //单行最前面的checkbox被取消
    onUncheck: function (row) {
      if(!$("input[name='btSelectItem']").is(':checked')){
        $('#printExcel').attr("disabled",true);
      }
    },
    columns: [
      {
        title:'全选',
        field:'select',
        checkbox:true,
        align:"center",


      },

      {
        field:'studentId',
        name:'studentId',
        title:'学号',
        align:"center",
        edit:false
      },

      {
        field: 'studentName',
        name: 'studentName',
        title: '姓名',
        align:"center",
        edit:false,
      },

      /*{
          field: 'student.department',
          name: 'department',
          title: '学院',
          align:"center",
          edit:false,

      },*/

      {
        field: 'className',
        name: 'className',
        title: '班级',
        align:"center",
        edit:false,
        formatter: function(value,row, index) {
          let ClassName2='';
          console.log(row)
          $.ajax({
            type: "get",
            url: "http://47.106.247.251:8010/message/studentGetMessage?messageId="+row.messageId,
            data: {},
            cache: false,
            async : false,
            dataType: "json",
            success: function (msg)
            {
              banjilist.push(msg.data)
              if(msg.data){
                console.log(msg.data.className);
                ClassName2 = msg.data.className;
                yuanxi = msg.data.facultyName;
                banji = msg.data.className;
              }

              /!*console.log(msg.data.className)*!/
            },
            error:function (err) {
              alert("请求失败！");
            }
          });
          return ClassName2;
        }
      },

      {
        field: 'status',
        name: 'status',
        title: '审批状态',
        align:"center",
        formatter: function(value,row, index) {
          return statusFormatter(value);
        }
      },

      {
        field: 'beginTime',
        name:'beginTime',
        title:'开始时间',
        align:"center",
        /*formatter:beginTimeFormartter*/
      },

      {
        field: 'endTime',
        name:'endTime',
        title:'截止时间',
        align:"center",
        /*formatter:endTimeFormartter*/
      },

      {
        field: 'creatTime',
        name:'creatTime',
        title:'申请时间',
        align:"center",
        /*formatter:endTimeFormartter*/
      },

      {
        field : 'goodsId',
        title : '操作',
        align:"center",
        events: operateEvents,
        formatter : function(value,row, index) {
          // var strHtml = '&nbsp;&nbsp;&nbsp;<a href="javascript:void(0)" title="查看或修改" alt="查看或修改" id="editButton" ><i class="icon-edit icon-white"></i></a>';
          //操作里面的销假确认
          var isclick = 'disabled';
          if (row.status === '4' || row.status === '5'||row.status === '3'){
            isclick = '';
          }
          //console.log(row);
          //解决拼接字符串用到的双引号和json字符串中的双引号冲突
          //var info = JSON.stringify(row);
          var strHtml = '<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#Edit" style="margin-right: 15px" onclick="showmodal(' + JSON.stringify(row).replace(/"/g, '&quot;') + ')"> 查看详情</button><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#xiaojiamodal"'  +isclick +' onclick="showxiaojiamodal(' + JSON.stringify(row).replace(/"/g, '&quot;') + ')">销假确认</button>';
          return strHtml;
        }

      }


    ],
    data:datalist,

    locale:'zh-CN',//中文支持,



  });

});


/* 初始化switch控件 */
$("#switchbox").bootstrapSwitch({
  onText : "我的业务",      // 设置ON文本  
  offText : "所有业务",    // 设置OFF文本  
  onColor : "success",// 设置ON文本颜色     (info/success/warning/danger/primary)  
  offColor : "danger",  // 设置OFF文本颜色        (info/success/warning/danger/primary)  
  size : "small",    // 设置控件大小,从小到大  (mini/small/normal/large)  
  handleWidth:"90",//设置控件宽度
  // 当开关状态改变时触发  
  onSwitchChange : function(event, state) {
    if (state === true) {
      //我的业务，①有长假标记（请假时间为3-15天）的请假申请且②当次申请已被1级审批教师审批审批同意后的业务
      var mylist = [];
      for(var i=0;i<datalist.length;i++){
        //时间的差值
        var timeval = returntimeval(datalist[i].beginTime,datalist[i].endTime);
        if(3<= parseInt(timeval) && parseInt(timeval) <= 15 && datalist[i].levelOneSign === 1){
          mylist.push(datalist[i])
        }
      }
      $('#teacherTable').bootstrapTable('load', mylist)
      /*$.ajax({
          type: "get",
          url: url,
          data: {yewu:wode},
          cache: false,
          async : false,
          dataType: "json",
          success: function (msg)
          {
            $('#teacherTable').bootstrapTable('load', msg.data)
          },
          error:function (err) {
            alert("请求失败！");
          }
        });*/
    } else {
      //所有业务
      $('#teacherTable').bootstrapTable('load', datalist)
      /*$.ajax({
          type: "get",
          url: url,
          data: {yewu:suoyou},
          cache: false,
          async : false,
          dataType: "json",
          success: function (msg)
          {
            $('#teacherTable').bootstrapTable('load', msg.data)
          },
          error:function (err) {
            alert("请求失败！");
          }
        });*/
    }
  }
});



var getQueryParams = function(params){
  var p = {
    limit: params.limit,
    pageNumber: params.offset/params.limit+1,
    yibanId:yibanId
  };
  return p;
}

/*清除时间：秒*/
var cleanTime = function(str)
{
  //var str1 = str.substr(0, str.length - 2);
  //return str1;
  return
}

/*var currentTime = myDate.toLocaleString( );
var currentTimeFormartter=function (value,row,index)
{
   return cleanTime(value);
};*/

var beginTimeFormartter=function (value,row,index)
{
  //return cleanTime(value);
  return changeDateFormat(value)
};

var endTimeFormartter=function (value,row,index)
{
  //return cleanTime(value);
  return changeDateFormat(value)
};

window.operateEvents = {

  "click #editButton":function (e, value, row, index)
  {
    $("#Iid").val(row.id);
    $("#studentId").val(row.studentId);
    $('#name').val(row.student.name);
    $('#department').val(row.student.department);
    $('#className').val(row.student.className);
    $('#phone').val(row.phone);
    $('#leaveNumber').val(row.number);
    $('#beginTime').val(cleanTime(row.beginTime));
    $('#endTime').val(cleanTime(row.endTime));


    var status=$.trim(row.status);


    if(status==0)//待审核

      document.getElementById("Qing1").checked=true;

    else if(status==-1)//拒绝请假
      document.getElementById("Qing2").checked=true;

    else if(status==1)//未销假
      document.getElementById("Qing3").checked=true;

    else//已销假
      document.getElementById("Qing4").checked=true;

    $('#reason').val(row.reason);
    $('#Edit').modal('toggle');
  }

};

//打开 查看详情 模态框
function showmodal(row) {
  console.log(row);
  var targetteacher = '';
  $.ajax({
    type: "get",
    url: "http://47.106.247.251:8010/teacher/getTeacherList?userId="+row.teacherId,
    data: {},
    cache: false,
    async : false,
    dataType: "json",
    success: function (msg)
    {
      console.log(msg.data)
      targetteacher = msg.data[0].name;
    },
    error:function (err) {
      alert("请求失败！");
    }
  });
  var thisclassName='';
  var thisfacultyName='';
  console.log(banjilist)
  for (var i=0;i<banjilist.length;i++){
    if (banjilist[i].messageId === row.messageId){
      thisfacultyName = banjilist[i].facultyName;
      thisclassName = banjilist[i].className;
    }
  }
  var username = window.sessionStorage.getItem("username");
  $('#dcname').val(thisfacultyName+' '+thisclassName);
  $('#nameid').val(row.studentName+' '+row.studentId);
  $('#time').val(row.beginTime+'-'+row.endTime);
  $('#jieshu').val(row.clazzNum);
  $('#phone').val(row.phone);
  $('#status').val(returnstatusval(row.status));
  $('#targetteacher').val(targetteacher);
  $('#jiatiaoid').val(row.messageId);
  $('#reason').val(row.reason);
  $('#teacheradvice').val(row.levelOneComment + '  '+ targetteacher + '  ' +  row.levelOneTime);
  $('#secretaryadvice').val(row.levelTwoComment);

  $('#down').attr("href",row.fileUrl);
  if(row.fileUrl === "" || row.fileUrl === "_"||row.fileUrl === " " ){
    row.fileUrl = 'javascript:void(0);'
    $('#down').attr("href",row.fileUrl);
    $('#down').html('无请假文件');
  }

  //清空'同意'，'拒绝'按钮
  $('#secretaryadvicebutton').empty();
  //是否需要出现2级审批意见的按钮
  if(row.levelTwoSign === 0){
    $('#secretaryadvice').attr('disabled',true)
    //副书记意见为空
    if(1){
      //这里表示副书记不是该假条的目标教师
      //填充是否需要销假 switch
      $('#isneedxiaojia').empty();
      if(row.isReportback === 1){
        //需要销假
        var str = '<span class="form-control" disabled>是</span>';
        $('#isneedxiaojia').append(str)
      }else{
        //不需要销假
        var str = '<span class="form-control" disabled>否</span>';
        $('#isneedxiaojia').append(str)
      }
      //时间的差值
      var timeval = returntimeval(row.beginTime,row.endTime);
      if(3<= parseInt(timeval) && row.levelOneSign === 1 && (row.status === 0||row.status === '0')){
        //需要插入'同意'，'拒绝'按钮
        var str = '<button type="button" class="btn btn-success" id="agree" onclick="agreebutton(' + JSON.stringify(row).replace(/"/g, '&quot;') + ')" style="margin-right: 15px;" data-dismiss="modal">\t<i class="icon-ok"></i> 同意</button>\n' +
          '\t\t\t\t\t\t\t\t\t\t\t\t<button type="button" class="btn btn-warning" id="reject" onclick="rejectbutton(' + JSON.stringify(row).replace(/"/g, '&quot;') + ')" data-dismiss="modal" ><i class="icon-remove"></i>拒绝</button>'
        $('#secretaryadvicebutton').append(str);
        //该栏书记意见能够填写
        $('#secretaryadvice').attr('disabled',false)
      }else{
        //提示副书记意见为啥不能够填写
        $('#secretaryadvice').val('该假条不需要您的审批，该栏目不能填写')
      }
      }else{
        //这里表示副书记是该假条的目标教师,一般不会出现这种情况，故忽视
      }
  }else{
    //副书记意见不为空，即不可编辑状态
    $('#secretaryadvice').attr('disabled',true)
    if(teacherId !== row.teacherId) {
      //这里表示副书记不是该假条的目标教师
      $('#secretaryadvice').val(row.levelTwoComment+ ' ' + username + '  ' + row.levelTwoTime );
    }
  }
  //初试请求数据
  /*$.ajax({
    type: "get",
    url: url,
    data: {nodeid:nodeid},
    cache: false,
    async : false,
    dataType: "json",
    success: function (msg)
    {
      var datamodal = msg.datamodal;
      var status = msg.status;
      $('#Name').val(datamodal.Name);
      $('#dcname').val(datamodal.dcname);
      $('#time').val(datamodal.time);
      $('#pitchnumber').val(datamodal.pitchnumber);
      $('#phone').val(datamodal.phone);
      $('#status').val(datamodal.status);
      $('#teacher').val(datamodal.teacher);
      $('#noteid').val(datamodal.noteid);
      $('#reason').html(datamodal.reason);
      $('#teacheradvice').html(datamodal.teacheradvice);
      $('#secretaryadvice').html(datamodal.secretaryadvice);

      if(status === 1 || status === 3 || status === 4 ||status === 5){
        $('#dayin').attr("disabled",false);
      }else{
        $('#tip').show();
      }
    },
    error:function (err) {
      alert("请求失败！");
    }
  });*/
}
//2级审批意见的同意按钮
function agreebutton(row){
  console.log(row)
  var messageId = row.messageId;
  var secretaryadvice = $('#secretaryadvice').val();
  //需设置issecretaryagreeqingjia为1
  console.log("副书记意见："+secretaryadvice);
  //AJAX
  var data = {messageId:messageId,facultyUserId:teacherId,levelTwoComment:secretaryadvice,levelTwoSign:1};
  console.log(data)
  $.ajax({
    type: "put",
    url: "http://47.106.247.251:8010/message/faucltyUpdateMessageById",
    data: data,
    cache: false,
    async : false,
    dataType: "json",
    success: function (msg)
    {
      console.log(msg)

      alert('操作成功')
      window.location.reload();
    },
    error:function (err) {
      alert("请求失败！");
    }
  });

  alert('操作成功')
}

//2级审批意见的拒绝按钮
function rejectbutton(row){
  var secretaryadvice = $('#secretaryadvice').val();
  //需设置issecretaryagreeqingjia为2
  console.log("副书记意见："+secretaryadvice);
  var messageId = row.messageId;
  console.log(row)
  //需设置isteacheragreeqingjia为0
  var data = {messageId:messageId,facultyUserId:teacherId,levelTwoComment:secretaryadvice,levelTwoSign:2};;
  console.log(data)
  $.ajax({
    type: "put",
    url: "http://47.106.247.251:8010/message/faucltyUpdateMessageById",
    data: data,
    cache: false,
    async : false,
    dataType: "json",
    success: function (msg)
    {
      console.log(msg)

      alert('操作成功')
      window.location.reload();
    },
    error:function (err) {
      alert("请求失败！");
    }
  });

}


//销假确认模态框的事件
function showxiaojiamodal(row){

  var thisclassName='';
  var thisfacultyName='';
  console.log(banjilist)
  for (var i=0;i<banjilist.length;i++){
    if (banjilist[i].messageId === row.messageId){
      thisfacultyName = banjilist[i].facultyName;
      thisclassName = banjilist[i].className;
    }
  }

  $('#xiaojiadcname').val(thisclassName+' '+thisfacultyName);
  $('#xiaojianameid').val(row.studentName+' '+row.studentId);
  $('#xiaojiatime').val(row.beginTime+'-'+row.endTime);
  $('#xiaojiaphone').val(row.phone);
  $('#xiaojiaqingqiu').val(row.reportbackSubmitComment);
  $('#querenrendiv').hide();
  if(teacher.teacherid !== row.teacherid){
    //这里表示副书记不是该假条的目标教师
    //目标老师有没有进行销假确认，0代表没有，1代表有
    if(parseInt(row.status === 5)){
      //目标老师已进行销假确认
      /*$('#querenrendiv').show();
      $('#querenren').val(row.querenrenmsg)*/
    }else{
      //目标老师未进行销假确认

    }
  }else{
    //这里表示副书记是该假条的目标教师,一般不会出现这种情况，故忽视
  }
}

//点击‘确认销假’按钮
function querenxiaojiabutton(){
  //AJAX set isteacherxiaojiaqueren为 1 即可
  alert('操作成功')
}


$('input:checkbox').bind("click",function(){
  this.blur();
  this.focus();
  alert()
});


//模态框提交编辑按钮事件
$('#submitEdit').click(function(){
  var id=$("#Iid").val();
  var status = $('input:radio[name="Qing"]:checked').val();
  var comment= $('#comment').val();//新增审批意见
  var information=
    {
      "id":id,
      "status":status,
      "comment":comment
    };

  console.log(information);

  $.ajax({
    type:"POST",
    // "/YibanLeaveSystem/Toteacher/handle"
    url:"../teacher/handle",
    data:JSON.stringify(information),
    contentType:"application/json",
    dataType:"json",
    success:function(data)
    {
      if(data.success==true)
        layer.msg(data.msg,{icon:1});
      else
        layer.msg(data.msg,{icon:2});
    },
    error:function(err){
      console.log(err)
    }
  });

  $('#Edit').modal('toggle');

}) ;



/*//下载学生请假证明文件
$("#down").click(function(){
  var id=$("#Iid").val();
  $('#Edit').modal('hide');
  // "/YibanLeaveSystem/Toteacher/download/"+id;
  window.location.href="../teacher/download/"+id;
});*/

//打印数据成Excel表
$("#printExcel").click(function(){
  var messageidlist = [];
  $.map($('#teacherTable').bootstrapTable('getSelections'), function (row) {
    console.log(row)

    messageidlist.push(row.messageId)

  })
  console.log(messageidlist);
  var url = "http://47.106.247.251:8010/getMessageExcle?messageIdList=";
  for (var i = 0; i<messageidlist.length;i++)
  {
    if(i !== messageidlist.length-1){
      url  = url + messageidlist[i]+'%2C';
    }else{
      url  = url + messageidlist[i] + '&fileName=excel'
    }

  }
  console.log(222222)
  console.log(url)
  window.location.href = url;

})

/*//打印数据成Excel表
$("#printExcel").click(function(){
  var Data= $("#teacherTable").bootstrapTable("getSelections");
  if(Data=="" ||Data == null)
  {
    layer.alert("请选择要打印的数据",{icon:6});
  }
  else
  {
    var List=[];
    for(var i=0;i<Data.length;i++)
    {
      List.push(Data[i].id);
      console.log(Data[i].id);
    }

    /!*window.location.href="/YibanLeaveSystem/Toteacher/downloadExcel?List="+List;*!/
    // "/YibanLeaveSystem/Toteacher/downloadExcel/";

    var url="../teacher/downloadExcel";
    var form = $("<form></form>").attr("action", url).attr("method", "post");
    form.append($("<input></input>").attr("type", "hidden").attr("name", "List").attr("value", List));
    form.appendTo('body').submit().remove();

  }
})*/


//查询按钮事件
$("#search-btn").click(function(){
  $("#teacherTable").bootstrapTable('refresh',{url:""});
});




//修改——转换日期格式(时间戳转换为datetime格式)
function changeDateFormat(cellval) {
  if (cellval != null) {
    var date = new Date(parseInt(cellval.replace("/Date(", "").replace(")/", ""), 10));
    var month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
    var currentDate = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
    var hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    var seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
    return date.getFullYear() + "-" + month + "-" + currentDate+ " " + hours + ":" + minutes ;
  }
}

//请假状态的颜色
var statusFormatter = function(value) {


  if (value == 0)

    return "<span class='label label-primary' style='font-size: 14px;height: 32px;padding:8px'>申请中</span>";

  else if (value == 1)

    return "<span class='label label-success' style='font-size: 14px;height: 32px;padding:8px'>已批准</span>";

  else if (value == 2)

    return "<span class='label label-danger' style='font-size: 14px;height: 32px;padding:8px'>已拒绝</span>";

  else if (value == 3)

    return "<span class='label label-grey' style='font-size: 14px;height: 32px;padding:8px'>待销假</span>";
  else if (value == 4)

    return "<span class='label label-grey' style='font-size: 14px;height: 32px;padding:8px'>已申请销假</span>";

  else if (value == 5)

    return "<span class='label label-grey' style='font-size: 14px;height: 32px;padding:8px'>已销假</span>";

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


//计算时间差
function returntimeval(a,b)
{

  var aa=new Date();
  var bb=aa.getTime();  //返回1970到现在的秒数
  var atime=Date.parse(a);    //返回1970到现在指定日期的秒数
  var btime=Date.parse(b);    //返回1970到现在指定日期的秒数
  if(a==''||b==''){
    console.log('不能为空哦');
  }
  if(atime==btime)
  {
    console.log('日期不能相等哦');
  }
  if(atime>btime)
  {
    var c=atime-btime;
    var miao=c/1000;
    var fen=miao/60;
    var shi=fen/60;
    var day=shi/24;
    console.log("相差"+day+"天哦");
    return day;
  }
  if(btime>atime)
  {
    var c=btime-atime;
    var miao=c/1000;
    var fen=miao/60;
    var shi=fen/60;
    var day=shi/24;
    console.log("相差"+day+"天哦");
    return day;
  }
}

/*$.ajax({
    type: "get",
    url: url,
    data: {nodeid:nodeid},
    cache: false,
    async : false,
    dataType: "json",
    success: function (msg)
    {
      var datamodal = msg.datamodal;
      var status = msg.status;
      $('#Name').val(datamodal.Name);
      $('#dcname').val(datamodal.dcname);
      $('#time').val(datamodal.time);
      $('#pitchnumber').val(datamodal.pitchnumber);
      $('#phone').val(datamodal.phone);
      $('#status').val(datamodal.status);
      $('#teacher').val(datamodal.teacher);
      $('#noteid').val(datamodal.noteid);
      $('#reason').html(datamodal.reason);
      $('#teacheradvice').html(datamodal.teacheradvice);
      $('#secretaryadvice').html(datamodal.secretaryadvice);

      if(status === 1 || status === 3 || status === 4 ||status === 5){
        $('#dayin').attr("disabled",false);
      }else{
        $('#tip').show();
      }
    },
    error:function (err) {
      alert("请求失败！");
    }
  });*/