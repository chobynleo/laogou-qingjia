var student = {
  studentId:'201511701224',
  Name:'李老狗',
  department:'数学与计算机学院',
  className:'软件1152',
  select_teacher:['张艺13420120501','杨福光13420120501','岳川13420120501']
};
$('#username').html(student.Name);

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
  beginTime:"2019-01-21 16:48:38",
  endTime:"2019-01-21 16:48:38",
  createTime:"2119-01-21 16:48:38",
  status: 0,//当前状态
  teacherid: '1152001',//教师id
  isteacheragreeqingjia:0,//老师是否同意了请假，0代表没有，1代表有(体现在请假详情模态框的同意按钮上。)
  issecretaryagreeqingjia:0,//副书记是否同意了请假，0代表没有，1代表有(体现在请假详情模态框的同意按钮上。)
  xiaojiaqingqiu:'',//学生填写的销假请求，(体现在销假确认模态框内的销假请求)
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
    beginTime:"2019-01-21 16:48:38",
    endTime:"2019-01-21 16:48:38",
    createTime:"2119-01-21 16:48:38",
    status: 1,//当前状态
    teacherid: '1152001',//教师id
    isteacheragreeqingjia:1,//老师是否同意了请假，0代表没有，1代表有(体现在请假详情模态框的同意按钮上。)
    issecretaryagreeqingjia:0,//副书记是否同意了请假，0代表没有，1代表有(体现在请假详情模态框的同意按钮上。)
    xiaojiaqingqiu:'请求岳川老师销假',
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
    needxiaojia:0, //该学生是否需要销假，0代表否，1代表需要(体现在查看详情的switch里面。)
    teacheradvice:"",
    secretaryadvice:"",
    beginTime:"2019-01-21 16:48:38",
    endTime:"2019-01-21 16:48:38",
    createTime:"2119-01-21 16:48:38",
    status: 2,//当前状态
    teacherid: '1152001',//教师id
    isteacheragreeqingjia:0,//老师是否同意了请假，0代表没有，1代表有(体现在请假详情模态框的同意按钮上。)
    issecretaryagreeqingjia:0,//副书记是否同意了请假，0代表没有，1代表有(体现在请假详情模态框的同意按钮上。)
    xiaojiaqingqiu:'',
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
    beginTime:"2019-01-21 16:48:38",
    endTime:"2119-01-21 16:48:38",
    createTime:"2119-01-21 16:48:38",
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
    beginTime:"2019-01-21 16:48:38",
    endTime:"2119-01-21 16:48:38",
    createTime:"2119-01-21 16:48:38",
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
    beginTime:"2019-01-21 16:48:38",
    endTime:"2119-01-21 16:48:38",
    createTime:"2119-01-21 16:48:38",
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
    beginTime:"2019-01-21 16:48:38",
    endTime:"2119-01-21 16:48:38",
    createTime:"2119-01-21 16:48:38",
    status: 4,//当前状态
    teacherid: '1152002',//教师id，这个例子代表不是目标老师
    isteacheragreeqingjia:0,//老师是否同意了请假，0代表没有，1代表有(体现在请假详情模态框的同意按钮上。)
    issecretaryagreeqingjia:0,//副书记是否同意了请假，0代表没有，1代表有(体现在请假详情模态框的同意按钮上。)
    xiaojiaqingqiu:'请求刘桃丽老师销假',
    isteacherxiaojiaqueren:'1',//目标老师有没有进行销假确认，0代表没有，1代表有(体现在销假确认模态框内的销假确认按钮。)
    querenrenmsg:'刘桃丽 2018/3/6 10:08',//(体现在销假确认模态框内的确认人信息栏。)
    isxiaojia:1,//该学生是否需要销假，0代表不需要，1需要
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
    beginTime:"2019-01-21 16:48:38",
    endTime:"2119-01-21 16:48:38",
    createTime:"2119-01-21 16:48:38",
    status: 4,//当前状态
    teacherid: '1152002',//教师id，这个例子代表不是目标老师
    isteacheragreeqingjia:0,//老师是否同意了请假，0代表没有，1代表有(体现在请假详情模态框的同意按钮上。)
    issecretaryagreeqingjia:0,//副书记是否同意了请假，0代表没有，1代表有(体现在请假详情模态框的同意按钮上。)
    xiaojiaqingqiu:'请求刘桃丽老师销假',
    isteacherxiaojiaqueren:'1',//目标老师有没有进行销假确认，0代表没有，1代表有(体现在销假确认模态框内的销假确认按钮。)
    querenrenmsg:'刘桃丽 2018/3/6 10:08',//(体现在销假确认模态框内的确认人信息栏。)
    isxiaojia:1,//该学生是否需要销假，0代表不需要，1需要
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
    beginTime:"2019-01-21 16:48:38",
    endTime:"2019-01-25 16:48:38",
    createTime:"2119-01-21 16:48:38",
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
    beginTime:"2019-01-21 16:48:38",
    endTime:"2019-01-25 16:48:38",
    createTime:"2119-01-21 16:48:38",
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
    beginTime:"2019-01-21 16:48:38",
    endTime:"2019-01-25 16:48:38",
    createTime:"2019-01-21 16:48:38",
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
/*
  {
    qingjiabianhao:'XJ001',
    beginTime:'2019/1/15 17:15',
    endTime:"2019-01-21 16:48:38",
    status:5,
    shenpiTime:"2119-01-21 16:48:38",
    isxiaojia:"是",
  }*/


//模态框的数据
var datamodal = {
  Name:'李老狗',
  dcname:'数学与计算机学院 软件1152',
  time: '2019/3/4 19:30-2019/3/5 19:30',
  pitchnumber:'1-8',
  phone:'13420120501',
  download:'xxx',
  status:'已通过',
  teacher:'岳川13420151354',
  noteid:'SJ10001',
  reason:'发表学术论文',
  teacheradvice:'情况属实，同意请假。岳川 2019/3/4 13:12',
  secretaryadvice:'',
  status:2
};

//stringObject.substr(start,length)  substr() 方法可在字符串中抽取从 start 下标开始的指定数目的字符

var cleanTime = function(str)
{
  var str1 = str.substr(0, str.length - 2);
  return str1;
};

var yibanId = document.getElementById('dataBox').innerHTML;
$(function () {
  $('#studentTable').bootstrapTable({
    method:'GET',
    url:"../teacher/info",
    contentType:"application/json",
    dataType:"json",
    search:false, //是否启用搜索框
    cache: false, //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
    striped: false,   //是否显示行间隔色
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
    uniqueId: "qingjiabianhao",                     //每一行的唯一标识，一般为主键列
    idField: "qingjiabianhao",
    showRefresh: false,                  //是否显示刷新按钮
    showExport: false,
    smartDisplay: true,
    searchOnEnterKey: true,
    showToggle:false,                    //是否显示详细视图和列表视图的切换按钮
    cardView: false,                    //是否显示详细视图
    detailView: false,
    minimumCountColumns: 1, //最少允许的列数
    exportDataType: 'all',
    //可供选择的每页的行数（*）
    onPageChange: function (size, number) {},
    onEditableSave: function (field, row, oldValue, $el) {
      //四个参数field, row, oldValue, $el分别对应着当前列的名称、当前行数据对象、更新前的值、编辑的当前单元格的jQuery对象。
    },

    columns: [
      {
        field:'jiatiaoid',
        name:'jiatiaoid',
        title:'请假编号',
        align:"center",
        edit:false
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
        title:'结束时间',
        align:"center",
        formatter:endTimeFormartter
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
        field: 'createTime',
        name:'createTime',
        title:'审批时间',
        align:"center",
        formatter:endTimeFormartter
      },
      {
        field: 'isxiaojia',
        name:'isxiaojia',
        title:'是否销假',
        align:"center",
        formatter : function(value,row, index) {
          if(value){
            //value 1 是
            return '<span>是</span>'
          }else{
            //value 0 否
            return '<span>否</span>'
          }
        }
      },
      {
        field : 'goodsId',
        title : '操作',
        align:"center",
        events: operateEvents,
        formatter : function(value,row, index) {
          // var strHtml = '&nbsp;&nbsp;&nbsp;<a href="javascript:void(0)" title="查看或修改" alt="查看或修改" id="editButton" ><i class="icon-edit icon-white"></i></a>';
          var isclick = 'disabled';
          var time = compareTime(row.endTime);
          //①该次请假需要销假②当前时间>请假截至时间两个条件时该按钮为正常可点击状态，其他情况为不可点击状态。
          if (row.isxiaojia ===1 && time){
            isclick = '';
          }
          var strHtml = '<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#Detail1" style="margin-right: 15px" onclick="showmodal(' + JSON.stringify(row).replace(/"/g, '&quot;') + ')"> 查看详情</button><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#xiaojiamodal"'  +isclick +' onclick="showxiaojiamodal(' + JSON.stringify(row).replace(/"/g, '&quot;') + ')">销假确认</button>';
          return strHtml;
        }
      }
    ],
    data:datalist,
    locale:'zh-CN',//中文支持,
  });

});

var getQueryParams = function(params){
  var p = {
    limit: params.limit,
    pageNumber: params.offset/params.limit+1,
    yibanId:yibanId
  };
  return p;
};

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
  //return changeDateFormat(value)
  return value
};

var endTimeFormartter=function (value,row,index)
{
  //return cleanTime(value);
  //return changeDateFormat(value)
  return value
};

window.operateEvents = {

};

//修改——转换日期格式(时间戳转换为datetime格式)
function changeDateFormat(cellval) {
  if (cellval != null) {
    var date = new Date(parseInt(cellval.replace("/Date(", "").replace(")/", ""), 10));
    var month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
    var currentDate = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
    var hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    var seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
    console.log(date.getFullYear())
    return date.getFullYear() + "-" + month + "-" + currentDate+ " " + hours + ":" + minutes ;
  }
}

//比较时间的大小
function compareTime(yourtime){
  yourtime = yourtime.replace("-","/");//替换字符，变成标准格式
  var d2=new Date();//取今天的日期
  var d1 = new Date(Date.parse(yourtime));
  if(d1>d2){
    //当前时间<请假截至时间
    return false;
  }else{
    //当前时间>请假截至时间
    return true;
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

//打开 查看详情 模态框
function showmodal(row) {
  console.log('点击的请假编号为：'+row.qingjiabianhao);
  console.log(row);
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


  if(row.status === 1 || row.status === 3 || row.status === 4 || row.status === 5){
    $('#dayin').attr("disabled",false);
  }else{
    $('#tip').show();
    $('#dayin').attr("disabled",true);
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
//打开 期满销假 模态框
function showxiaojiamodal(row) {
  console.log('点击的请假编号为：'+row.jiatiaoid);
  var status3msg = '岳川 2019/3/6 10：08';
  console.log(row.xiaojiastatus)
  switch(row.xiaojiastatus)
  {
    case 0:
      //请求模块框1
      var str1 = '<form class="form-horizontal">\n' +
        '                               <div class="modal-body">\n' +
        '                                   <div class="row">\n' +
        '                                       <div class="col-md-2" style="text-align: center">\n' +
        '                                           <span>请假理由:</span>\n' +
        '                                       </div>\n' +
        '                                       <div class="col-md-10">\n' +
        '                                           <textarea id="xiaojiareason" class="form-control col-md-9" rows="2" maxlength="50"  name="xiaojiaqingqiu"  placeholder="最多输入50个字"></textarea>\n' +
        '                                       </div>\n' +
        '                                   </div>\n' +
        '                                   <br>\n' +
        '\n' +
        '                                   <div class="form-group row">\n' +
        '                                       <div class="col-md-12 col-md-offset-5">\n' +
        '                                           <button type="button" id="xiaojiasubmit" class="btn btn-info" onclick=xiaojiareasonsubmit("'+ row.jiatiaoid +'")>提交</button>\n' +
        '                                       </div>\n' +
        '                                   </div>\n' +
        '                               </div>\n' +
        '                           </form>';
      $('#modal-body').append(str1)
      break;
    case 1:
      //请求模块框2
      var str2 = '<form class="form-horizontal">\n' +
        '                               <div class="modal-body">\n' +
        '                                   <br>\n' +
        '                                   <div class="row">\n' +
        '                                       <div class="col-md-12" style="text-align: center">\n' +
        '                                           <span>销假请求已提交，待辅导员/班主任确认后可完成销假。</span>\n' +
        '                                       </div>\n' +
        '                                   </div>\n' +
        '                                   <br>\n' +
        '                                   <br>\n' +
        '                               </div>\n' +
        '                           </form>';
      $('#modal-body').append(str2)
      break;
    case 2:
      var str3 = '<form class="form-horizontal">\n' +
        '                               <div class="modal-body">\n' +
        '                                   <br>\n' +
        '                                   <div class="row">\n' +
        '                                       <div class="col-md-12" style="text-align: center">\n' +
        '                                           <span>销假请求已完成。</span>\n' +
        '                                       </div>\n' +
        '                                       <br>\n' +
        '                                       <br>\n' +
        '                                       <div class="col-md-12" style="text-align: center">\n' +
        '                                           <span>确认人：'+ status3msg+'</span>\n' +
        '                                       </div>\n' +
        '                                   </div>\n' +
        '                                   <br>\n' +
        '                                   <br>\n' +
        '                               </div>\n' +
        '                           </form>';
      $('#modal-body').append(str3)
      break;
    default:
    //n 与 case 1 和 case 2 不同时执行的代码
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
      switch(status)
      {
      case 1:
        //请求模块框1
        var str1 = '<form class="form-horizontal">\n' +
        '                               <div class="modal-body">\n' +
        '                                   <div class="row">\n' +
        '                                       <div class="col-md-2" style="text-align: center">\n' +
        '                                           <span>请假理由:</span>\n' +
        '                                       </div>\n' +
        '                                       <div class="col-md-10">\n' +
        '                                           <textarea id="xiaojiareason" class="form-control col-md-9" rows="2" maxlength="50"  name="xiaojiaqingqiu"  placeholder="最多输入50个字"></textarea>\n' +
        '                                       </div>\n' +
        '                                   </div>\n' +
        '                                   <br>\n' +
        '\n' +
        '                                   <div class="form-group row">\n' +
        '                                       <div class="col-md-12 col-md-offset-5">\n' +
        '                                           <button type="button" id="xiaojiasubmit" class="btn btn-info" onclick="xiaojiareasonsubmit('+ nodeid +')">提交</button>\n' +
        '                                       </div>\n' +
        '                                   </div>\n' +
        '                               </div>\n' +
        '                           </form>';
        $('#modal-body').append(str1)
        break;
      case 2:
        //请求模块框2
        var str2 = '<form class="form-horizontal">\n' +
          '                               <div class="modal-body">\n' +
          '                                   <br>\n' +
          '                                   <div class="row">\n' +
          '                                       <div class="col-md-12" style="text-align: center">\n' +
          '                                           <span>销假请求已提交，待辅导员/班主任确认后可完成销假。</span>\n' +
          '                                       </div>\n' +
          '                                   </div>\n' +
          '                                   <br>\n' +
          '                                   <br>\n' +
          '                               </div>\n' +
          '                           </form>';
        $('#modal-body').append(str2)
        break;
      case 3:
        var str3 = '<form class="form-horizontal">\n' +
        '                               <div class="modal-body">\n' +
        '                                   <br>\n' +
        '                                   <div class="row">\n' +
        '                                       <div class="col-md-12" style="text-align: center">\n' +
        '                                           <span>销假请求已完成。</span>\n' +
        '                                       </div>\n' +
        '                                       <br>\n' +
        '                                       <br>\n' +
        '                                       <div class="col-md-12" style="text-align: center">\n' +
        '                                           <span>确认人：'+ datamodal.status3msg+'</span>\n' +
        '                                       </div>\n' +
        '                                   </div>\n' +
        '                                   <br>\n' +
        '                                   <br>\n' +
        '                               </div>\n' +
        '                           </form>';
        $('#modal-body').append(str3)
        break;
      default:
        //n 与 case 1 和 case 2 不同时执行的代码
      }

    },
    error:function (err) {
      alert("请求失败！");
    }
  });*/
}

//期满销假 模态框1 提交事件
function xiaojiareasonsubmit(nodeid) {
  console.log($('#xiaojiareason').val());
  console.log(nodeid);
  $('#modal-body').empty();
  //请求模块框2
  var str2 = '<form class="form-horizontal">\n' +
    '                               <div class="modal-body">\n' +
    '                                   <br>\n' +
    '                                   <div class="row">\n' +
    '                                       <div class="col-md-12" style="text-align: center">\n' +
    '                                           <span>销假请求已提交，待辅导员/班主任确认后可完成销假。</span>\n' +
    '                                       </div>\n' +
    '                                   </div>\n' +
    '                                   <br>\n' +
    '                                   <br>\n' +
    '                               </div>\n' +
    '                           </form>';
  $('#modal-body').append(str2)
  /*
  $.ajax({
    type: "get",
    url: url,
    data: {nodeid:nodeid,xiaojiareason:$('#xiaojiareason').val()},
    cache: false,
    async : false,
    dataType: "json",
    success: function (msg)
    {
      $('#modal-body').empty();
      //请求模块框2
      var str2 = '<form class="form-horizontal">\n' +
        '                               <div class="modal-body">\n' +
        '                                   <br>\n' +
        '                                   <div class="row">\n' +
        '                                       <div class="col-md-12" style="text-align: center">\n' +
        '                                           <span>销假请求已提交，待辅导员/班主任确认后可完成销假。</span>\n' +
        '                                       </div>\n' +
        '                                   </div>\n' +
        '                                   <br>\n' +
        '                                   <br>\n' +
        '                               </div>\n' +
        '                           </form>';
      $('#modal-body').append(str2)
    },
    error:function (err) {
      alert("请求失败！");
    }
  });*/
}

//关闭 查看详情 模态框
function closemodal() {
  $('#tip').hide();
}
//关闭 期满销假 模态框
function closexiaojiamodal() {
  $('#modal-body').empty();
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
/*
//每个查看详情的点击事件
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
});
*/
