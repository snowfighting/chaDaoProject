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

	module.exports = __webpack_require__(12);


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
	},
	setHeader:function($el,str){
		$el.html(str);
	//>>>>>>> fengyuchao
	}
	};
	//
	module.exports = common;
	//console.log(2)


/***/ },
/* 4 */,
/* 5 */
/***/ function(module, exports) {

	module.exports = "<footer id=\"footer\">	<ul>		<li data-url=\'/build/index.html\'>			<i class=\"iconfont\">&#xe60e;</i>			<b>首页</b>		</li>		<li data-url=\'/build/index-class.html\'>			<i class=\"iconfont\">&#xe647;</i>			<b>分类</b>		</li>		<li data-url=\'\'>			<i class=\"iconfont\">&#xe638;</i>			<b>消息</b>		</li>		<li data-url=\'/build/index-car.html\'>			<i class=\"iconfont\">&#xe764;</i>			<b>购物车</b>		</li>		<li data-url=\'/build/index-person.html\'>			<i class=\"iconfont\">&#xe655;</i>			<b>个人中心</b>		</li>	</ul></footer>"

/***/ },
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	__webpack_require__(13);



/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	//var str = require('../tpls/car-details.string');
	var footer = __webpack_require__(5);

	var common = __webpack_require__(3);

	//common.renderBody($('body'),str);
	//common.append($('.container'),footer);




/***/ }
/******/ ]);