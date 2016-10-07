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
<<<<<<< HEAD
=======

>>>>>>> wuhuizhang
	switchPage: function (index) {
	    $('#footer').on('tap', 'li', function () {
	      location.href = $(this).attr('data-url');
	    })
	//<<<<<<< HEAD
	//=======
<<<<<<< HEAD
	//<<<<<<< HEAD
=======
	// <<<<<<< HEAD
>>>>>>> wuhuizhang
	},
	setHeader:function($el,str){
		$el.html(str);
	//>>>>>>> fengyuchao
<<<<<<< HEAD
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
=======
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
	}
	};
	//

	module.exports = common;
	//console.log(2)
>>>>>>> wuhuizhang

	//>>>>>>> songxuejiao
	};
	//
	module.exports = common;
	//console.log(2)


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





/***/ },
/* 8 */
/***/ function(module, exports) {

<<<<<<< HEAD
	module.exports = "<div class=\"car-container\">	<header>		<div class=\"header-l\">			<a href=\"javascript:history.go(-1)\"></a>		</div>		<div class=\"header-title\">			<h1>购物车</h1>		</div>		<div class=\"header-r\">			<a href=\"javascript:void(0);\"></a>		</div>	</header>	<section>		<div class=\"cart-container\">			<div class=\"cart-store\">				<span class=\"store-check\">					<input type=\"checkbox\" checked value=\"\" />				</span>				<dl>					<dt></dt>					<dd>八马茶业</dd>				</dl>			</div>			<ul class=\"cart-item\">				<li class=\"cart-item-cnt\">					<span class=\"goods-check\">						<input type=\"checkbox\" checked value=\"\" />					</span>					<div class=\"goods-pic\">						<a href=\"../../../car-details.html\">							<img src=\"../../../build/images/sai1.jpg\"/>						</a>					</div>					<div class=\"goods-info\">						<div class=\"goods-name\">							<a href=\"../../../car-details.html\">八马茶业 安溪铁观音 赛珍珠1000 250克</a>							<span class=\"del-goods\"></span>						</div>						<div class=\"goods-subtotal\">							<span class=\"goods-price\">￥<b>420.00</b></span>							<div class=\"value-box\">								<span class=\"minus\">-</span>								<input type=\"text\" class=\"num\" value=\"1\" />								<span class=\"add\">+</span>							</div>						</div>					</div>				</li>			</ul>		</div>	</section>	<footer>		<div class=\"all-check\">			<input type=\"checkbox\" id=\"all_checkbox\" class=\"all_checkbox\" checked value=\"\" />		</div>		<div class=\"total\">			<dl>				<dt>合计总金额：</dt>				<dd>￥<b>525.00</b></dd>			</dl>		</div>		<div class=\"check-out\">			<a href=\"javascript:void(0);\">确认信息</a>		</div>	</footer></div>"
=======
	module.exports = "<div class=\"car-container\">	<header>		<div class=\"header-l\">			<a href=\"javascript:history.go(-1)\"></a>		</div>		<div class=\"header-title\">			<h1>购物车</h1>		</div>		<div class=\"header-r\">			<a href=\"javascript:void(0);\"></a>		</div>	</header>	<section>			</section>	<footer>		<div class=\"all-check\">			<input type=\"checkbox\" id=\"all_checkbox\" class=\"all_checkbox\" checked value=\"\" />			<!--::after-->		</div>		<div class=\"total\">					</div>		<div class=\"check-out\">					</div>	</footer></div>"
>>>>>>> wuhuizhang

/***/ }
/******/ ]);