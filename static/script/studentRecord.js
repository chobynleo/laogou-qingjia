
var studentId=document.getElementById('dataBox').innerHTML;//获取用户ID

//stringObject.substr(start,length)  substr() 方法可在字符串中抽取从 start 下标开始的指定数目的字符

var cleanTime = function(str)
{
	var str1 = str.substr(0, str.length - 2);
	return str1;
}

//页面加载后的函数
$(document).ready(function() {
	
	var i = 0;
	var tbody = "";
	var trs = "";
	var strbtn="";
	trs += "<tr><td data-label='请假记录'>" + "XJ001" + "</td>" +
			"<td data-label='开始时间'>" +"2019/1/15 17:15"+ "</td>" +
			"<td data-label='结束时间'>" +"2019/1/15 17:18" + "</td>" +
			"<td data-label='请假状态'>"+ statusFormatter(0)+ "</td>"+
			"<td data-label='请假记录'>" + "2019/1/15 17:20" + "</td>" +
			"<td data-label='请假记录'>" + "否" + "</td>" +
			"<td data-label='请假记录'>" + "<button type='button' class='btn btn-info' data-toggle='modal' data-target='#Detail1'>" +"查看详情"+ "</button></td>" +
			"<td data-label='请假记录'>" + "<button type='button' class='btn btn-primary disabled'>" +"查看假条"+"</button></td></tr>";
	tbody += trs;
	console.log(tbody);
	alert(tbody);
	$("#record").append(tbody);

	//把id是record的元素后面加上tbody
	//append() 方法在被选元素的结尾（仍然在内部）插入指定内容

			/*$.ajax({
				///YibanLeaveSystem/Toleave/info/
				url : "../../student/info",
				type : "GET",
				contentType : "application/json",
				dataType : "json",
				success : function(data) {

					var i = 0;
					var tbody = "";
					$.each(data, function(n, value) {
						i++;
						var trs = "";
						trs += "<tr><td data-label='请假记录'>" + i + "</td><td data-label='开始时间'>" + cleanTime(value.beginTime)
								+ "</td><td data-label='结束时间'>" +cleanTime(value.endTime) + "</td><td data-label='请假状态'>"
								+ statusFormatter(value.status)
								+ "</td></tr>";
						tbody += trs;

					});
					$("#record").append(tbody);

				},

				error : function() {
					layer.msg("加载失败", {
						icon : 2
					});
				}
			});*/

		});

var statusFormatter = function(value) {


	if (value == 0)

		return "<span class='label label-primary'>待审核</span>";

	else if (value == -1)

		return "<span class='label label-warning'>拒绝请假</span>";

	else if (value == 1)

		return "<span class='label label-success'>已批准</span>";
    /*	未销假*/

	else if (value == 2)

		return "<span class='label label-success'>已批准</span>";
	/*	已销假*/
}
