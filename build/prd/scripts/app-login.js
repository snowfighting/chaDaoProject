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
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(9);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */
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
	    $('#footer').on('tap', 'li', function () {
	      location.href = $(this).attr('data-url');
	    })
	//<<<<<<< HEAD
	//=======
	//<<<<<<< HEAD
	},
	setHeader:function($el,str){
		$el.html(str);
	//>>>>>>> fengyuchao
	//<<<<<<< HEAD
	//}
	//=======
	},
	  setHeader:function($el,str){
	  	$el.html(str);
	//>>>>>>> fengyuchao
	//}
	//>>>>>>> master
	//=======
	}

	//>>>>>>> songxuejiao
	};
	//
	module.exports = common;
	//console.log(2)


/***/ },
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	__webpack_require__(10);




/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	var common = __webpack_require__(3);

	var header=__webpack_require__(11);
	var body=__webpack_require__(12);

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


/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = "<header id=\"header\">	<div id=\"header-wrap\">		<span class=\"iconfont\" id=\"header-left\">左边</span>		<div id=\"header-title\">标题</div>		<span class=\"iconfont\" id=\"header-right\">右边</span>	</div></header>"

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = "<div id=\"container\">	<div id=\"errorInfo\">		您输入的用户名或者密码有误	</div>	<ul>		<li>			<span>手机号</span>			<div class=\"inputbox\">				<input type=\"text\" placeholder=\"请输入手机号码\" id=\"phonenumber\"/>				<span id=\"phoneInfo\" class=\"iconfont\">&#xe6a0;</span>			</div>					</li>		<li>			<span>密码</span>			<div class=\"inputbox\">				<input type=\"password\" placeholder=\"请输入密码\" id=\"password\"/>				<span id=\"passInfo\" class=\"iconfont\">&#xe6a0;</span>			</div>					</li>		<div id=\"loginsetting\">			<p><input type=\"checkbox\" name=\"\" id=\"remBtn\" value=\"\" />7天自动登陆</p>			<a href=\"#\">忘记密码？</a>		</div>		<input type=\"button\" value=\"登&nbsp;&nbsp;陆\"  id=\"loginBtn\"/>	</ul></div>"

/***/ }
/******/ ]);