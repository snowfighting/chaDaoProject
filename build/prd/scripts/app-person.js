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

	module.exports = __webpack_require__(17);


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
<<<<<<< HEAD
	},
	setHeader:function($el,str){
		$el.html(str);
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
=======
	//<<<<<<< HEAD
	//=======
	//<<<<<<< HEAD
	// <<<<<<< HEAD
	//=======
	//<<<<<<< HEAD
	//>>>>>>> master
	},
	setHeader:function($el,str){
		$el.html(str);
	//>>>>>>> fengyuchao
	//<<<<<<< HEAD
	},
	// =======

	  setHeader:function($el,str){
	  	$el.html(str);
	//>>>>>>> fengyuchao
	  },
	// >>>>>>> master
	switchPage: function (index) {
	  // $('#footer li').eq(index).addClass('active').siblings().removeClass('active');
	  $('#footer').on('click', 'li', function () {
	    location.href = $(this).attr('data-url');
	  })
	//}
	//=======
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
	//>>>>>>> master
>>>>>>> wuhuizhang
	};
	//

	module.exports = common;
	//console.log(2)



/***/ },
/* 4 */,
/* 5 */
/***/ function(module, exports) {

	module.exports = "<footer id=\"footer\">	<ul>		<li data-url=\'../../../index.html\'>			<i class=\"iconfont\">&#xe60e;</i>			<b>首页</b>		</li>		<li data-url=\'../../../index-class.html\'>			<i class=\"iconfont\">&#xe647;</i>			<b>分类</b>		</li>		<li data-url=\'\'>			<i class=\"iconfont\">&#xe638;</i>			<b>消息</b>		</li>		<li data-url=\'../../../index-car.html\'>			<i class=\"iconfont\">&#xe764;</i>			<b>购物车</b>		</li>		<li data-url=\'../../../index-person.html\'>			<i class=\"iconfont\">&#xe655;</i>			<b>个人中心</b>		</li>	</ul></footer>"

/***/ },
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	__webpack_require__(18);





/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	var common = __webpack_require__(3);

	var footer=__webpack_require__(5);
	var body=__webpack_require__(19);


	common.renderBody($('body'),body);
	common.append($('.container'),footer);

	window.onload=function(){
		$(".orders-title").on("click",function(){
			window.location.href="orders.html";
		});
		
		var mUrl = document.URL;
		var  paramAll =mUrl.split('?')[1];
		var paramValue= mUrl.split("=")[1];
		console.log(mUrl);
		$("#username").text(paramValue);
		
		$(".container").on("touchmove",function(event){
			var touch = event.touches[0];
		});
	}




/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = "<div class=\"container\">	<div class=\"container-wrap\">		<section>			<div class=\"person_top\">			<div class=\"top\">				<span class=\"iconfont\">&#x3466;</span>				<b class=\"iconfont\">&#xf0013;</b>			</div>			<div class=\"center\">				<img src=\"http://upload.chadaodian.com/shop/common/default_user_portrait.gif\"/>				<span id=\"username\"></span>			</div>			<div class=\"bottom\">				<ul>					<li>						<span>0</span>						<b>商品收藏</b>					</li>					<li>						<span>0</span>						<b>店铺收藏</b>					</li>					<li>						<span class=\"iconfont\">&#xe638;</span>						<b>我的足迹</b>					</li>				</ul>			</div>	</div>			<div class=\"orders\">				<div class=\"orders-title\">					<i class=\"iconfont\">&#xe622;</i>					<span class=\"\">						我的订单					</span>					<b>查看全部订单</b>					<b class=\"icon iconfont\">&#xf007a;</b>					</div>				<div class=\"orders-content\">					<ul>						<li>							<i class=\"iconfont\">&#xe607;</i>							<span>待付款</span>						</li>						<li>							<i class=\"iconfont\">&#xe68d;</i>							<span>待收货</span>						</li>						<li>							<i class=\"iconfont\">&#xe7cb;</i>							<span>待自提</span>						</li>						<li>							<i class=\"iconfont\">&#xe638;</i>							<span>待评价</span>						</li>						<li>							<i class=\"iconfont\">&#xf0177;</i>							<span>退货/退款</span>						</li>						</ul>																					</div>			</div>			<div class=\"money\">				<div class=\"money-title\">					<i class=\"iconfont\">&#xe622;</i>					<span class=\"\">						我的钱包					</span>					<b>查看全部钱包</b>					<b class=\"icon iconfont\">&#xf007a;</b>					</div>				<div class=\"money-content\">					<ul>						<li>							<i class=\"iconfont\">&#xe607;</i>							<span>预存款</span>						</li>						<li>							<i class=\"iconfont\">&#xe68d;</i>							<span>充值卡</span>						</li>						<li>							<i class=\"iconfont\">&#xe7cb;</i>							<span>代金券</span>						</li>						<li>							<i class=\"iconfont\">&#xe638;</i>							<span>红包</span>						</li>						<li>							<i class=\"iconfont\">&#xf0177;</i>							<span>积分</span>						</li>						</ul>				</div>			</div>			<div class=\"address\">				<i class=\"iconfont\">&#xe622;</i>				<span class=\"\">					收货地址管理				</span>				<b class=\"iconfont\">&#xf007a;</b>				</div>			<div class=\"usersetting\">				<i class=\"iconfont\">&#xe622;</i>				<span class=\"\">					用户设置				</span>				<b class=\"iconfont\">&#xf007a;</b>				</div>			<div class=\"category\">				<ul>					<li><a href=\"#\">我的账号</a></li>					<li><a href=\"#\">安全退出</a></li>					<li><a href=\"#\">反馈</a></li>					<li><a href=\"#\">返回顶部</a></li>				</ul>			</div>		</section>	</div>	</div>"

/***/ }
/******/ ]);