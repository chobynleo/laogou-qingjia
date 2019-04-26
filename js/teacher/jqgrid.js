var teacher = {
  studentId:'201511701224',
  Name:'岳川',
  department:'数学与计算机学院',
  className:'软件1152',
  select_teacher:['张艺13420120501','杨福光13420120501','岳川13420120501'],
  teacherid: '1152001'//教师id
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
        field: 'name',
        name: 'name',
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
        formatter:beginTimeFormartter
      },

      {
        field: 'endTime',
        name:'endTime',
        title:'截止时间',
        align:"center",
        formatter:endTimeFormartter
      },

      {
        field: 'createTime',
        name:'createTime',
        title:'申请时间',
        align:"center",
        formatter:endTimeFormartter
      },

      {
        field : 'goodsId',
        title : '操作',
        align:"center",
        events: operateEvents,
        formatter : function(value,row, index) {
          // var strHtml = '&nbsp;&nbsp;&nbsp;<a href="javascript:void(0)" title="查看或修改" alt="查看或修改" id="editButton" ><i class="icon-edit icon-white"></i></a>';
          //操作里面的销假确认
          var isclick = '';
          /*if (row.isxiaojia === 1){
            isclick = '';
          }*/
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
      //我的业务
      var mylist = [];

      for(var i=0;i<datalist.length;i++){
        if(datalist[i].teacherid === teacher.teacherid){
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
  console.log('该条信息的请假编号为：'+row.jiatiaoid);

  $('#dcname').val(row.department+' '+row.className);
  $('#nameid').val(row.name+' '+row.studentId);
  $('#time').val(row.beginTime+'-'+row.endTime);
  $('#jieshu').val(row.jieshu);
  $('#phone').val(row.phone);
  $('#status').val(returnstatusval(row.status));
  $('#targetteacher').val(row.targetteacher);
  $('#jiatiaoid').val(row.jiatiaoid);
  $('#reason').val(row.reason);
  $('#teacheradvice').val(row.teacheradvice);
  $('#secretaryadvice').val(row.secretaryadvice);

  //清空'同意'，'拒绝'按钮
  $('#teacheradvicebutton').empty();
  //是否需要出现1级审批意见的按钮以及辅导员/班主任意见是否能编辑、是否出现需要销假 switch 按钮
  if(row.teacheradvice === ""){
    $('#teacheradvice').attr('disabled',true)
    //辅导员/班主任意见为空
    if(teacher.teacherid === row.teacherid){
      //判断是否本人是否目标教师,这里表示是目标教师
      $('#teacheradvice').attr('disabled',false);
      //需要插入'同意'，'拒绝'按钮
      var str = '<button type="button" class="btn btn-success" id="agree" onclick="agreebutton()" style="margin-right: 15px;" data-dismiss="modal">\t<i class="icon-ok"></i> 同意</button>\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t<button type="button" class="btn btn-warning" id="reject" onclick="rejectbutton()" data-dismiss="modal" ><i class="icon-remove"></i>拒绝</button>'
      $('#teacheradvicebutton').append(str);
      //插入是否需要销假 switch
      $('#isneedxiaojia').empty();
      var str = '<div class="switch" style="">\n' +
        '\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input id="needxiaojia" type="checkbox" />\n' +
        '<input type="hidden" name="needxiaojiahidden" id="needxiaojiahidden" value="0" />'+
        '\t\t\t\t\t\t\t\t\t\t\t\t\t</div>';
      $('#isneedxiaojia').append(str);
      /* 初始化switch控件 */
      $("#needxiaojia").bootstrapSwitch({
        onText : "是",      // 设置ON文本  
        offText : "否",    // 设置OFF文本  
        onColor : "success",// 设置ON文本颜色     (info/success/warning/danger/primary)  
        offColor : "primary",  // 设置OFF文本颜色        (info/success/warning/danger/primary)  
        size : "small",    // 设置控件大小,从小到大  (mini/small/normal/large)  
        handleWidth:"40",//设置控件宽度
        // 当开关状态改变时触发  
        onSwitchChange : function(event, state) {
          if (state === true) {
            //需要销假
            console.log('需要销假');
            $('#needxiaojiahidden').val('1')
            //即isxiaojia为1
          } else {
            //不需要销假
            console.log('不需要销假');
            $('#needxiaojiahidden').val('0')
            //即isxiaojia为0
          }
        }
      });
      }else{
        //判断是否本人是否目标教师,这里表示不是目标教师
        $('#isneedxiaojia').empty();
        $('#teacheradvice').val('您并非目标教师，因此该栏不可填写。');
      }
  }else{
    //辅导员/班主任意见不为空，即不可编辑状态
    $('#teacheradvice').attr('disabled',true)
    if(teacher.teacherid === row.teacherid) {
      //判断是否本人是否目标教师,这里表示是目标教师
      //填充是否需要销假 switch
      $('#isneedxiaojia').empty();
      if(row.needxiaojia){
        //需要销假
        var str = '<span class="form-control" disabled>是</span>';
        $('#isneedxiaojia').append(str)
      }else{
        //不需要销假
        var str = '<span class="form-control" disabled>否</span>';
        $('#isneedxiaojia').append(str)
      }
    }else{
      //判断是否本人是否目标教师,这里表示不是目标教师
      $('#isneedxiaojia').empty();
      $('#teacheradvice').val('您并非目标教师，因此该栏不可填写。');
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
//1级审批意见的同意按钮
function agreebutton(){
  var needxiaojiaval = $('#needxiaojiahidden').val();
  var teacheradvice = $('#teacheradvice').val();
  //需设置isteacheragreeqingjia为1
  console.log('需要销假:'+needxiaojiaval+"  教师意见："+teacheradvice);
  //AJAX
  alert('操作成功')
}

//1级审批意见的拒绝按钮
function rejectbutton(){
  var needxiaojiaval = $('#needxiaojiahidden').val();
  var teacheradvice = $('#teacheradvice').val();
  //需设置isteacheragreeqingjia为0
  console.log('需要销假:'+needxiaojiaval+"  教师意见："+teacheradvice);
  //AJAX
  alert('操作成功')
}


//销假确认模态框的事件
function showxiaojiamodal(row){
  //清空'确认销假'按钮
  $('#querenxiaojiadiv').empty();
  //填充信息
  $('#xiaojiadcname').val(row.department+' '+row.className);
  $('#xiaojianameid').val(row.name+' '+row.studentId);
  $('#xiaojiatime').val(row.beginTime+'-'+row.endTime);
  $('#xiaojiaphone').val(row.phone);
  $('#xiaojiaqingqiu').val(row.xiaojiaqingqiu);
  $('#querenrendiv').hide();
  console.log(1111)
  console.log(row)
  if(teacher.teacherid === row.teacherid){
    //判断是否本人是否目标教师,这里表示是目标教师
    //目标老师有没有进行销假确认，0代表没有，1代表有
    console.log(row.isteacherxiaojiaqueren)
    if(parseInt(row.isteacherxiaojiaqueren)){
      //目标老师已进行销假确认
      $('#querenrendiv').show();
      $('#querenren').val(row.querenrenmsg)
    }else{
      //目标老师未进行销假确认
      var str = '<button type="button" class="btn btn-success" id="querenxiaojia" onclick="querenxiaojiabutton()"data-dismiss="modal">\t 确认销假</button>';
      $('#querenxiaojiadiv').append(str);
    }
  }else{
    //判断是否本人是否目标教师,这里表示不是目标教师
    $('#querenxiaojiadiv').empty();
    //目标老师有没有进行销假确认，0代表没有，1代表有
    if(row.isteacherxiaojiaqueren){
      //目标老师已进行销假确认
      $('#querenrendiv').show();
      $('#querenren').val(row.querenrenmsg)
    }
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



//下载学生请假证明文件
$("#down").click(function(){
  var id=$("#Iid").val();
  $('#Edit').modal('hide');
  // "/YibanLeaveSystem/Toteacher/download/"+id;
  window.location.href="../teacher/download/"+id;
});

//打印数据成Excel表
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

    /*window.location.href="/YibanLeaveSystem/Toteacher/downloadExcel?List="+List;*/
    // "/YibanLeaveSystem/Toteacher/downloadExcel/";

    var url="../teacher/downloadExcel";
    var form = $("<form></form>").attr("action", url).attr("method", "post");
    form.append($("<input></input>").attr("type", "hidden").attr("name", "List").attr("value", List));
    form.appendTo('body').submit().remove();

  }
})


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