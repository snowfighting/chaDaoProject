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

	module.exports = __webpack_require__(28);


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

/***/ 28:
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	  __webpack_require__(29);



/***/ },

/***/ 29:
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	var common=__webpack_require__(3);
	var str=__webpack_require__(30);
	// var foot=require('../tpls/footer.string');
	common.renderBody($('body'),str);
	common.switchPage(1);
	// common.append($('.container'),foot);
	var myScroll=new IScroll('#list-scroll',{
	  click:true,
	  mouseWheel: true,
	  probetype:3
	    // scrollbars: true
	});



/***/ },

/***/ 30:
/***/ function(module, exports) {

	module.exports = "<div class=\"container\">  <header>    <div class=\"header-left\">      <a href=\"javascript:history.go(-1)\">        <i class=\"back\"></i>      </a>    </div>    <div class=\"header-search\">      <i></i>      <span>请输入关键字</span>    </div>    <div class=\"header-more\">      <a href=\"#\">        <i></i>      </a>    </div>  </header>  <section>    <div class=\"list\">      <div class=\"list2\" id=\"list-scroll\">        <ul class=\"goodlist\">          <li>            <a href=\"#\">              <i>                <img src=\"../../../images/degault.png\" alt=\"\" />              </i>              <p>品牌推荐</p>            </a>          </li>          <li>            <a href=\"#\">              <i>                <img src=\"../../../images/degault.png\" alt=\"\" />              </i>              <p>品牌推荐</p>            </a>          </li>          <li>            <a href=\"#\">              <i>                <img src=\"../../../images/degault.png\" alt=\"\" />              </i>              <p>品牌推荐</p>            </a>          </li>          <li>            <a href=\"#\">              <i>                <img src=\"../../../images/degault.png\" alt=\"\" />              </i>              <p>品牌推荐</p>            </a>          </li>          <li>            <a href=\"#\">              <i>                <img src=\"../../../images/degault.png\" alt=\"\" />              </i>              <p>品牌推荐</p>            </a>          </li>          <li>            <a href=\"#\">              <i>                <img src=\"../../../images/degault.png\" alt=\"\" />              </i>              <p>品牌推荐</p>            </a>          </li>          <li>            <a href=\"#\">              <i>                <img src=\"../../../images/degault.png\" alt=\"\" />              </i>              <p>品牌推荐</p>            </a>          </li>          <li>            <a href=\"#\">              <i>                <img src=\"../../../images/degault.png\" alt=\"\" />              </i>              <p>品牌推荐</p>            </a>          </li>          <li>            <a href=\"#\">              <i>                <img src=\"../../../images/degault.png\" alt=\"\" />              </i>              <p>品牌推荐</p>            </a>          </li>          <li>            <a href=\"#\">              <i>                <img src=\"../../../images/degault.png\" alt=\"\" />              </i>              <p>品牌推荐</p>            </a>          </li>          <li>            <a href=\"#\">              <i>                <img src=\"../../../images/degault.png\" alt=\"\" />              </i>              <p>品牌推荐</p>            </a>          </li>        </ul>      </div>    </div>    <div class=\"list-detail\">      <ul class=\"tu\">        <li>          <a href=\"#\">            <img src=\"../../../images/tu_4.png\" alt=\"\" />          </a>        </li>        <li>          <a href=\"#\">            <img src=\"../../../images/tu_4.png\" alt=\"\" />          </a>        </li>        <li>          <a href=\"#\">            <img src=\"../../../images/tu_4.png\" alt=\"\" />          </a>        </li>        <li>          <a href=\"#\">            <img src=\"../../../images/tu_4.png\" alt=\"\" />          </a>        </li>        <li>          <a href=\"#\">            <img src=\"../../../images/tu_4.png\" alt=\"\" />          </a>        </li>        <li>          <a href=\"#\">            <img src=\"../../../images/tu_4.png\" alt=\"\" />          </a>        </li>        <li>          <a href=\"#\">            <img src=\"../../../images/tu_4.png\" alt=\"\" />          </a>        </li>        <li>          <a href=\"#\">            <img src=\"../../../images/tu_4.png\" alt=\"\" />          </a>        </li>        <li>          <a href=\"#\">            <img src=\"../../../images/tu_4.png\" alt=\"\" />          </a>        </li>        <li>          <a href=\"#\">            <img src=\"../../../images/tu_4.png\" alt=\"\" />          </a>        </li>      </ul>    </div>  </section></div>"

/***/ }

/******/ });