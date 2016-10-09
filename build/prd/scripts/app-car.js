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

	module.exports = __webpack_require__(6);


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

	module.exports = common;



/***/ },
/* 4 */,
/* 5 */,
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	__webpack_require__(7);



/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	var str = __webpack_require__(8);

	var common = __webpack_require__(3);
	var cookieObj = __webpack_require__(9);

	common.renderBody($('body'),str);

	var totalMoney = 0;
	init();
	function init(){
		showGoods();
		$('#totalM').html(totalMoney.toFixed(2));
	}

	/**
	 * 设置总价
	 */
	function setTotal(mon){
		var totalMoney = parseFloat($('#totalM').html());
		$('#totalM').html((totalMoney+mon).toFixed(2));
	}

	/**
	 * 减少商品
	 */
	$('#cart-item').on('click','li',function(event){
		var event = event || window.event;
		var target = event.target || event.srcElement;
		var mon = parseFloat($(this).children().eq(2).children().eq(1).children().eq(0).children().eq(0).html());
		if(target.className == 'minus'){
			var n = parseInt($(this).children().eq(2).children().eq(1).children().eq(1).children().eq(1).val());
			if(n-1 < 0){
				alert("对不起，商品数量不能为负");
			}else{
				$(this).children().eq(2).children().eq(1).children().eq(1).children().eq(1).val(--n);
				setTotal(-mon);
			}
		}
	})

	/**
	 * 增加商品
	 */
	$('#cart-item').on('click','li',function(){
		var event = event || window.event;
		var target = event.target || event.srcElement;
		var mon = parseFloat($(this).children().eq(2).children().eq(1).children().eq(0).children().eq(0).html());
		if(target.className == 'add'){
			var n = parseInt($(this).children().eq(2).children().eq(1).children().eq(1).children().eq(1).val());
			$(this).children().eq(2).children().eq(1).children().eq(1).children().eq(1).val(++n);
			setTotal(mon);
		}
	})

	/**
	   * 全选
	   */
	$('#all_checkbox').on('click',function(){
			$('input[name=goods]').each(function(){
				$(this).attr('checked',true);
			});
	})

	/**
	 * cookie获取数据
	 */
	function showGoods(){
		var goods = cookieObj.getCookie('cartcookie');
		var arrProducts = [];
		if(goods.length>0){
			arrProducts = JSON.parse(goods);
		}
		
		var html='';
		for(var i = 0;i < arrProducts.length;i++){
			html+= '<li class="cart-item-cnt">';
			html+= '<span class="goods-check">';
			html+= '<input type="checkbox" name="goods" value="" /></span>';
			html+= '<div class="goods-pic">';
			html+= '<a href="../../../car-details.html">';
			html+= '<img src="'+arrProducts[i].img+'"/></a></div>';
			html+= '<div class="goods-info">';
			html+= '<div class="goods-name">';
			html+= '<a href="../../../car-details.html">'+arrProducts[i].name+'</a>';
			html+= '<span class="del-goods"></span></div>';
			html+= '<div class="goods-subtotal">';
			html+= '<span class="goods-price">￥<b id="xiaoji">'+arrProducts[i].price+'</b></span>';
			html+= '<div class="value-box">';
			html+= '<span class = "minus">-</span>';
			html+= '<input type="text" class="num" value="'+arrProducts[i].count+'" />';
			html+= '<span class = "add">+</span></div></div></div></li>';

			totalMoney += parseFloat(arrProducts[i].xiaoji);
		}
		
		$('#cart-item').html(html);
	}





/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = "<div class=\"car-container\">	<header>		<div class=\"header-l\">			<a href=\"javascript:history.go(-1)\"></a>		</div>		<div class=\"header-title\">			<h1>购物车</h1>		</div>		<div class=\"header-r\">			<a href=\"javascript:void(0);\"></a>			<!--<div class=\"head-nav-menu\" id=\"head-nav-menu\">				<span class=\"arrow\"></span>					<ul>						<li>							<a href=\"../../../index.html\"><i class=\"iconfont\">&#xe60e;</i>首页</a>						</li>						<li>							<a href=\"../../../#\"><i class=\"iconfont\">&#xe6b5;</i>搜索</a>						</li>						<li>							<a href=\"../../../index-class.html\"><i class=\"iconfont\">&#xe647;</i>分类</a>						</li>						<li>							<a href=\"../../../#\"><i class=\"iconfont\">&#xe638;</i>消息</a>						</li>						<li>							<a href=\"../../../index-car.html\"><i class=\"iconfont\">&#xe764;</i>购物车</a>						</li>						<li>							<a href=\"../../../index-person.html\"><i class=\"iconfont\">&#xe655;</i>我的商城</a>						</li>					</ul>			</div>-->		</div>	</header>	<section>		<div class=\"cart-container\">			<div class=\"cart-store\">				<span class=\"store-check\">					<input type=\"checkbox\" checked value=\"\" />				</span>				<dl>					<dt></dt>					<dd>八马茶业</dd>				</dl>			</div>			<ul class=\"cart-item\" id=\"cart-item\"></ul>		</div>	</section>	<footer>		<div class=\"all-check\">			<input type=\"checkbox\" id=\"all_checkbox\" class=\"all_checkbox\" value=\"\" />		</div>		<div class=\"total\">			<dl>				<dt>合计总金额：</dt>				<dd>￥<b id=\"totalM\">525.00</b></dd>			</dl>		</div>		<div class=\"check-out\">			<a href=\"javascript:void(0);\">确认信息</a>		</div>	</footer></div>"

/***/ },
/* 9 */
/***/ function(module, exports) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	var cookieObj = {
		/**
		 * 获取某个cookie
		 * @param {Object} cookiename
		 */
		getCookie:function(cookiename){
			var cookieValue = '';
			var strCookies = document.cookie;
			var arrCookies = strCookies.split('; ');
			for(var i = 0;i < arrCookies.length;i++){
				var arrItem = arrCookies[i].split('=');
				if(arrItem[0] == cookiename){
					cookieValue = arrItem[1];
				}
			}
			return decodeURIComponent(cookieValue);
		},
		/**
		 * 存储某个cookie
		 * @param {Object} name
		 * @param {Object} value
		 * @param {Object} expiredays
		 */
		setCookie:function(name,value,expiredays){
			var date = new Date();
			date.setDate(date.getDate()+expiredays);
			document.cookie = name+'='+encodeURIComponent(value)+';expires='+date;
		},
		/**
		 * 移除某个cookie
		 */
		removeCookie(name){
			setCookie(name,'',-1);
		}
	};

	module.exports = cookieObj;


/***/ }
/******/ ]);