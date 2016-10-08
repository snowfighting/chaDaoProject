var common = require('../utils/common.util.js');

var header=require('../tpls/header.string');
var body=require('../tpls/register.string');

common.renderBody($('body'),header);
common.append($('body'),body);
common.setHeader($('#header-title'),"注册");
common.setHeader($('#header-left'),"&#xf007a");
common.setHeader($('#header-right'),"&#xf0013");

window.onload=function(){
	
	//获取焦点事件
	$("#phonenumber").on("focus",function(){
		$("#phoneInfo").css("visibility","visible");
	});
	
	$("#code").on("focus",function(){
		$("#codeInfo").css("visibility","visible");
	});
	
	$("#password").on("focus",function(){
		$("#passInfo").css("visibility","visible");
	});
	
	//清空事件
	$("#phoneInfo").on("touchend",function(){
		$("#phonenumber").val("");
	});
	$("#codeInfo").on("touchend",function(){
		$("#code").val("");
	});
	$("#passInfo").on("touchend",function(){
		$("#password").val("");
	});
	
	//失去焦点事件
	$("#phonenumber").on("blur",function(){
		var reg=/^1[3|4|5|8][0-9]\d{4,8}$/;
		if(reg.test($(this).val().trim())){
			$("#phoneInfo").html("&#xe61f");
			$("#phoneInfo").css("color","green");
		}else{
			$("#phoneInfo").css("color","red");
		}
	});
	
	$("#code").on("blur",function(){
		
	});
	
	$("#password").on("blur",function(){
		var reg=/[a-zA-Z]{1}[a-zA-Z0-9]{5,11}/;
		console.log(reg.test($(this).val().trim()));
		if(reg.test($(this).val().trim())){
			$("#passInfo").html("&#xe61f");
			$("#passInfo").css("color","green");
		}else{
			$("#passInfo").css("color","red");
		}
	});
	
	//设置是否显示密码
	var isshowpass=false;
	$("#showBtn").on("touchend",function(){
		console.log(1);
		if($(this).prop("checked")){
			console.log(2);
			isshowpass=true;
			$("#password").prop("type","password");
		}else{
			console.log(3);
			isshowpass=false;
			$("#password").prop("type","text");
		}
		
	});
	
	//设置注册按钮的点击事件
	$("#regBtn").on("touchend",function(){
		var phonenumber=$("#phonenumber").val().trim();
		var password=$("#password").val().trim();
		console.log(phonenumber);
		var user={
			"username":phonenumber,
			"password":password
		}
		localStorage.setItem("user",JSON.stringify(user));
		window.location.href="login.html";
	});
	
}
