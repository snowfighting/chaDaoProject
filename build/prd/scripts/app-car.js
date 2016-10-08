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
<<<<<<< HEAD
	},
	setHeader:function($el,str){
		$el.html(str);
	},
	  setHeader:function($el,str){
	  	$el.html(str);
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
>>>>>>> wuhuizhang
	},
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
<<<<<<< HEAD
	};

	module.exports = common;

=======

	//>>>>>>> songxuejiao
	//>>>>>>> master
	};
	//

	module.exports = common;
	//console.log(2)
>>>>>>> wuhuizhang



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

	common.renderBody($('body'),str);


	/**
	 * 增加商品
	 */
	$("#add").on('click',function(){
		var num = parseInt($(".num").val());
		$(".num").val(++num);
		
	})

	/**
	 * 减少商品
	 */
	$("#minus").on('click',function(){
		var num = parseInt($(".num").val());
		if(num-1 < 0){
			alert("对不起，商品数量不能为负");
		}else{
			$(".num").val(--num);
	//		getMoney(num);
	//		setTotal();
		}
		
	})

	$('#all_checkbox').on('click',function(){
			$('input[name=goods]').each(function(){
				$(this).attr('checked',true);
			});
	})





/***/ },
/* 8 */
/***/ function(module, exports) {

<<<<<<< HEAD
	module.exports = "<div class=\"car-container\">	<header>		<div class=\"header-l\">			<a href=\"javascript:history.go(-1)\"></a>		</div>		<div class=\"header-title\">			<h1>购物车</h1>		</div>		<div class=\"header-r\">			<a href=\"javascript:void(0);\"></a>			<!--<div class=\"head-nav-menu\" id=\"head-nav-menu\">				<span class=\"arrow\"></span>					<ul>						<li>							<a href=\"../../../index.html\"><i class=\"iconfont\">&#xe60e;</i>首页</a>						</li>						<li>							<a href=\"../../../#\"><i class=\"iconfont\">&#xe6b5;</i>搜索</a>						</li>						<li>							<a href=\"../../../index-class.html\"><i class=\"iconfont\">&#xe647;</i>分类</a>						</li>						<li>							<a href=\"../../../#\"><i class=\"iconfont\">&#xe638;</i>消息</a>						</li>						<li>							<a href=\"../../../index-car.html\"><i class=\"iconfont\">&#xe764;</i>购物车</a>						</li>						<li>							<a href=\"../../../index-person.html\"><i class=\"iconfont\">&#xe655;</i>我的商城</a>						</li>					</ul>			</div>-->		</div>	</header>	<section>		<div class=\"cart-container\">			<div class=\"cart-store\">				<span class=\"store-check\">					<input type=\"checkbox\" checked value=\"\" />				</span>				<dl>					<dt></dt>					<dd>八马茶业</dd>				</dl>			</div>			<ul class=\"cart-item\">				<li class=\"cart-item-cnt\">					<span class=\"goods-check\">						<input type=\"checkbox\" name=\"goods\" value=\"\" />					</span>					<div class=\"goods-pic\">						<a href=\"../../../car-details.html\">							<img src=\"../../../build/images/sai1.jpg\"/>						</a>					</div>					<div class=\"goods-info\">						<div class=\"goods-name\">							<a href=\"../../../car-details.html\">八马茶业 安溪铁观音 赛珍珠1000 250克</a>							<span class=\"del-goods\"></span>						</div>						<div class=\"goods-subtotal\">							<span class=\"goods-price\">￥<b id=\"xiaoji\">420.00</b></span>							<div class=\"value-box\">								<span id=\"minus\">-</span>								<input type=\"text\" class=\"num\" value=\"1\" />								<span id=\"add\">+</span>							</div>						</div>					</div>				</li>			</ul>		</div>	</section>	<footer>		<div class=\"all-check\">			<input type=\"checkbox\" id=\"all_checkbox\" class=\"all_checkbox\" value=\"\" />		</div>		<div class=\"total\">			<dl>				<dt>合计总金额：</dt>				<dd>￥<b>525.00</b></dd>			</dl>		</div>		<div class=\"check-out\">			<a href=\"javascript:void(0);\">确认信息</a>		</div>	</footer></div>"
=======
	module.exports = "<div class=\"car-container\">	<header>		<div class=\"header-l\">			<a href=\"javascript:history.go(-1)\"></a>		</div>		<div class=\"header-title\">			<h1>购物车</h1>		</div>		<div class=\"header-r\">			<a href=\"javascript:void(0);\"></a>		</div>	</header>	<section>		<div class=\"cart-container\">			<div class=\"cart-store\">				<span class=\"store-check\">					<input type=\"checkbox\" checked value=\"\" />				</span>				<dl>					<dt></dt>					<dd>八马茶业</dd>				</dl>			</div>			<ul class=\"cart-item\">				<li class=\"cart-item-cnt\">					<span class=\"goods-check\">						<input type=\"checkbox\" checked value=\"\" />					</span>					<div class=\"goods-pic\">						<a href=\"../../../car-details.html\">							<img src=\"../../../build/images/sai1.jpg\"/>						</a>					</div>					<div class=\"goods-info\">						<div class=\"goods-name\">							<a href=\"../../../car-details.html\">八马茶业 安溪铁观音 赛珍珠1000 250克</a>							<span class=\"del-goods\"></span>						</div>						<div class=\"goods-subtotal\">							<span class=\"goods-price\">￥<b>420.00</b></span>							<div class=\"value-box\">								<span class=\"minus\">-</span>								<input type=\"text\" class=\"num\" value=\"1\" />								<span class=\"add\">+</span>							</div>						</div>					</div>				</li>			</ul>		</div>	</section>	<footer>		<div class=\"all-check\">			<input type=\"checkbox\" id=\"all_checkbox\" class=\"all_checkbox\" checked value=\"\" />		</div>		<div class=\"total\">			<dl>				<dt>合计总金额：</dt>				<dd>￥<b>525.00</b></dd>			</dl>		</div>		<div class=\"check-out\">			<a href=\"javascript:void(0);\">确认信息</a>		</div>	</footer></div>"
>>>>>>> wuhuizhang

/***/ }
/******/ ]);