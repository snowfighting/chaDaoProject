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

	module.exports = __webpack_require__(10);


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
<<<<<<< HEAD
	// <<<<<<< HEAD
=======
	//<<<<<<< HEAD
>>>>>>> master
	},
	setHeader:function($el,str){
		$el.html(str);
	//>>>>>>> fengyuchao
<<<<<<< HEAD
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
=======
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
>>>>>>> master
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
/* 9 */,
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	__webpack_require__(11);



/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	var common = __webpack_require__(3);

	var header=__webpack_require__(12);
	var body=__webpack_require__(13);

	common.renderBody($('body'),header);
	common.append($('body'),body);
	common.setHeader($('#header-title'),"注册");
	common.setHeader($('#header-left'),"左");
	common.setHeader($('#header-right'),"右");


/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = "<header id=\"header\">	<div id=\"header-wrap\">		<span id=\"header-left\">左边</span>		<div id=\"header-title\">标题</div>		<span id=\"header-right\">右边</span>	</div></header>"

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = "<div id=\"container\">	</div>"

/***/ }
/******/ ]);