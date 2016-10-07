var common = require('../utils/common.util.js');

var header=require('../tpls/header.string');
var body=require('../tpls/login.string');

common.renderBody($('body'),header);
common.append($('body'),body);
common.setHeader($('#header-title'),"登陆");
common.setHeader($('#header-left'),"&#xf007a");
common.setHeader($('#header-right'),"&#xf0013");

window.onload=function(){
	
	//获取焦点事件
	$("#phonenumber").on("focus",function(){
		$("#phoneInfo").css("visibility","visible");
	});
	
	$("#password").on("focus",function(){
		$("#passInfo").css("visibility","visible");
	});
	
	//清空事件
	$("#phoneInfo").on("touchend",function(){
		$("#phonenumber").val("");
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

	
	//设置注册按钮的点击事件
	$("#loginBtn").on("touchend",function(){
		var phonenumber=$("#phonenumber").val().trim();
		var password=$("#password").val().trim();
		if($("#remBtn").prop("checked")){
			saveLoginInfoToCookie(phonenumber,password);
		}
		
		var user=JSON.parse(localStorage.getItem("user"));
		if(user.username==phonenumber&&user.password==password){
			window.location.href="index-person.html?username="+phonenumber;
		}else{
			$("#errorInfo").css("visibility","visible");
			setTimeout(function(){
				$("#errorInfo").css("visibility","hidden");
			},2000);
		}
		
	});
	
	//登录时点击“记住密码”，则将登录信息保存到cookie中
    function saveLoginInfoToCookie(username,password){
        var user={
            "username":username,
            "password":password
        }
        var date=new Date();
        date.setDate(date.getDate()+7);
        var strUser=JSON.stringify(user);
        document.cookie="userInfo="+strUser+";repires="+date;

    }
	
}