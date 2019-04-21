


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
									 field:'qingjiabianhao',
									 name:'qingjiabianhao',
									 title:'请假编号',
									 align:"center",
									 edit:false
								 },
								 {
									 field:'qingjiajilu',
									 name:'qingjiajilu',
									 title:'请假记录',
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
										field: 'status',
										name: 'status',
										title: '审批状态',
										align:"center",
										edit:false,
								},
                {
										field: 'shenpiTime',
										name:'shenpiTime',
										title:'审批时间',
										align:"center",
										formatter:endTimeFormartter
                },
							  {
									 field: 'isxiaojia',
									 name:'isxiaojia',
									 title:'是否销假',
									 align:"center",
                   edit:false,
							  },
            
               {
                   field : 'goodsId',
									 title : '操作',
									 align:"center",
									 events: operateEvents,
									 formatter : function(value,row, index) {
											// var strHtml = '&nbsp;&nbsp;&nbsp;<a href="javascript:void(0)" title="查看或修改" alt="查看或修改" id="editButton" ><i class="icon-edit icon-white"></i></a>';
                     var strHtml = "<button type='button' class='btn btn-info' data-toggle='modal' data-target='#Detail1' style='margin-right: 15px'>" +"查看详情"+"</button><button type='button' class='btn btn-primary disabled'>" +"查看假条"+"</button>";
											return strHtml;
									 }
          
               }
           
            
            ],
            data:[{
              	 qingjiabianhao:'XJ001',
            		 qingjiajilu:'2019/1/15 17:15', 
            		 beginTime:"2019-01-21 16:48:38",
              	 status:0,
            		 shenpiTime:"2119-01-21 16:48:38",
							   isxiaojia:"否",
            	 }
            	],
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
        return date.getFullYear() + "-" + month + "-" + currentDate+ " " + hours + ":" + minutes ;
    }
}




