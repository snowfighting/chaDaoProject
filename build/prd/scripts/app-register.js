/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(20);


/***/ },

/***/ 3:
/***/ function(module, exports) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	var common = {
	renderBody: function ($el, str) {
	    $el.prepend(str);
	},
	inner: function ($el, str) {
	    $el.html(str);
	},
	append: function ($el, str) {
	    $el.append(str);
	},
	switchPage: function (index) {
	    $('#footer').on('click', 'li', function () {
	      location.href = $(this).attr('data-url');
	    })
	},
	setHeader:function($el,str){
		$el.html(str);
	},

	switchPage: function (index) {
	  // $('#footer li').eq(index).addClass('active').siblings().removeClass('active');
	  $('#footer').on('click', 'li', function () {
	    location.href = $(this).attr('data-url');
	  })
	}
	 
	};

<<<<<<< HEAD
=======
	module.exports = common;



>>>>>>> master
/***/ },

/***/ 11:
/***/ function(module, exports) {

	module.exports = "<header id=\"header\">	<div id=\"header-wrap\">		<span class=\"iconfont\" id=\"header-left\">左边</span>		<div id=\"header-title\">标题</div>		<span class=\"iconfont\" id=\"header-right\">右边</span>	</div></header>"

/***/ },

/***/ 20:
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	__webpack_require__(21);



/***/ },

/***/ 21:
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	var common = __webpack_require__(3);

	var header=__webpack_require__(11);
	var body=__webpack_require__(22);

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



/***/ },

/***/ 22:
/***/ function(module, exports) {

	module.exports = "<div id=\"container\">	<ul>		<li>			<span>手机号</span>			<div class=\"inputbox\">				<input type=\"text\" placeholder=\"请输入手机号码\" id=\"phonenumber\"/>				<span id=\"phoneInfo\" class=\"iconfont\">&#xe6a0;</span>			</div>					</li>		<li>			<span>动态码</span>			<div class=\"inputbox\">				<input type=\"text\" placeholder=\"请输入验证码\" id=\"code\"/>				<a href=\"#\">短信获取</a>				<span id=\"codeInfo\" class=\"iconfont\">&#xe6a0;</span>			</div>			</li>		<li>			<span>密码</span>			<div class=\"inputbox\">				<input type=\"password\" placeholder=\"请输入密码\" id=\"password\"/>				<span id=\"passInfo\" class=\"iconfont\">&#xe6a0;</span>			</div>					</li>		<input type=\"checkbox\" name=\"\" id=\"showBtn\" value=\"\" />显示密码		<input type=\"button\" value=\"注册\"  id=\"regBtn\"/>	</ul></div>"

/***/ }

/******/ });