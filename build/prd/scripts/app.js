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

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	__webpack_require__(2);



/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	var common=__webpack_require__(3);
	var str = __webpack_require__(4);
	var footer=__webpack_require__(5);
	common.renderBody($('body'),str);
	common.append($('.container'),footer);
	common.switchPage(0);
	$.ajax({
	  url: '/mock/list.json',
	  success: function (res) {
	  	
	    var html = template('list', res.data);
	   
	    common.inner($('.list'), html);
	  }
	});

	var mySwiper = new Swiper('.swiper-container',{
		loop : true,
	autoplay : 2000
	});

	window.onload = function(){
		var myScroll = new IScroll("#index-scroll",{
			click:true,
						scrollbars: true,
					 	mouseWheel: true,
					 	probeType:3

	});
	myScroll.on('scroll',function(){
		var t=this.y;
		if(t<-44){
			$('.back').css('display',"block");
			$('.back').on('click',function(){
				myScroll.scrollTo(0,0);
				// myScroll.y=0;
				console.log(1);
					$('.header').css('display','none');
			});
		}else {
			$('.back').css('display',"none");
		}
		if(t<-210){
			$('.header').css('display','block');
		}else {
			$('.header').css('display','none');
		}
		console.log(t);
	});
	}



/***/ },
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
/* 4 */
/***/ function(module, exports) {

	module.exports = "<div class=\"container\">	<div class=\"header\" id=\"header\">		<div class=\"header_left\"></div>		<div class=\"header_search\">			<a href=\"#\">				<i></i>				<span class=\"search_input\">					请输入关键词				</span>			</a>		</div>		<div class=\"header_message\">			<i></i>		</div>	</div>	<div class=\"box1\" id=\"index-scroll\">		<div class=\"box2\">			<header>				<ul>					<li><a href=\"../../../index-class.html\"><img src=\"../../../images/categroy.png\" alt=\"\" /></a></li>					<li data-url=\"/build/index.html\">茶到店</li>					<li data-url=\"../../../index-car.html\"><a href=\"#\"><img src=\"../../../images/cart_w.png\" alt=\"\" /></a></li>				</ul>			</header>			<section>				<div class=\"swiper-container swiper-container-horizontal loop\">					<ul class=\"swiper-wrapper\">						<li class=\"swiper-slide\"><a href=\"#\"><img src=\"../../../images/loop1.jpg\"/></a></li>						<li class=\"swiper-slide\"><img src=\"../../../images/loop2.jpg\"/></li>						<li class=\"swiper-slide\"><img src=\"../../../images/loop3.jpg\"/></li>						<li class=\"swiper-slide\"><img src=\"../../../images/loop4.jpg\"/></li>					</ul>					<div class=\"header-warp\">						<a href=\"#\">							<i></i>							<span>请输入关键词</span>						</a>					</div>					<div class=\"header-m\">						<a href=\"#\">							<i class=\"iconfont\">&#xe638;</i>							<p>消息</p>						</a>					</div>				</div>				<div class=\"nav\">					<ul class=\"nav-list\">						<li><a href=\"../../../index-class.html	\"><i></i><p>分类</p></a></li>						<li><a href=\"../../../index-car.html\"><i></i><p>购物车</p></a></li>						<li><a href=\"../../../index-person.html\"><i></i><p>我的账号</p></a></li>						<li><a href=\"#\"><i></i><p>每日签到</p></a></li>					</ul>				</div>				<div class=\"zhekou\">					<div class=\"zhekou_biaoti\">						限时折扣					</div>					<ul class=\"zhekou_list\">						<li>							<i>打折</i>							<a href=\"#\">								<img src=\"../../../images/tu_2.jpg\" alt=\"\" />								<dl>									<dt>八马茶业 安溪铁观音 赛珍珠1000  250克</dt>									<dd>￥600.00</dd>								</dl>							</a>						</li>						<li>							<i>打折</i>							<a href=\"#\">								<img src=\"../../../images/tu_1.jpg\" alt=\"\" />								<dl>									<dt>八马茶业 龙井3000  250克</dt>									<dd>￥1500.00</dd>								</dl>							</a>						</li>					</ul>				</div>				<div class=\"tuijian\">					<div class=\"tuijian_biaoti\">						为您推荐					</div>					<div class=\"list\">						<!--<ul class=\"good_list\">							<li>								<span>									<a href=\"#\">										<img src=\"../../../images/tu_3.jpg\" alt=\"\" />									</a>								</span>								<dl>									<dt>										<a href=\"#\">											八马茶业 八马安溪铁观音·小清新1号 252克										</a>									</dt>									<dd class=\"list_pinpai\"><span>品牌:八马茶业</span>&nbsp;&nbsp;&nbsp;<span>销量:506</span></dd>									<dd class=\"list_price\"><i>￥150.00</i></dd>								</dl>							</li>							<li>								<span>									<a href=\"#\">										<img src=\"../../../images/tu_3.jpg\" alt=\"\" />									</a>								</span>								<dl>									<dt>										<a href=\"#\">											八马茶业 八马安溪铁观音·小清新1号 252克										</a>									</dt>									<dd class=\"list_pinpai\"><span>品牌:八马茶业</span>&nbsp;&nbsp;&nbsp;<span>销量:506</span></dd>									<dd class=\"list_price\"><i>￥150.00</i></dd>								</dl>							</li>							<li>								<span>									<a href=\"#\">										<img src=\"../../../images/tu_3.jpg\" alt=\"\" />									</a>								</span>								<dl>									<dt>										<a href=\"#\">											八马茶业 八马安溪铁观音·小清新1号 252克										</a>									</dt>									<dd class=\"list_pinpai\"><span>品牌:八马茶业</span>&nbsp;&nbsp;&nbsp;<span>销量:506</span></dd>									<dd class=\"list_price\"><i>￥150.00</i></dd>								</dl>							</li>							<li>								<span>									<a href=\"#\">										<img src=\"../../../images/tu_3.jpg\" alt=\"\" />									</a>								</span>								<dl>									<dt>										<a href=\"#\">											八马茶业 八马安溪铁观音·小清新1号 252克										</a>									</dt>									<dd class=\"list_pinpai\"><span>品牌:八马茶业</span>&nbsp;&nbsp;&nbsp;<span>销量:506</span></dd>									<dd class=\"list_price\"><i>￥150.00</i></dd>								</dl>							</li>							<li>								<span>									<a href=\"#\">										<img src=\"../../../images/tu_3.jpg\" alt=\"\" />									</a>								</span>								<dl>									<dt>										<a href=\"#\">											八马茶业 八马安溪铁观音·小清新1号 252克										</a>									</dt>									<dd class=\"list_pinpai\"><span>品牌:八马茶业</span>&nbsp;&nbsp;&nbsp;<span>销量:506</span></dd>									<dd class=\"list_price\"><i>￥150.00</i></dd>								</dl>							</li>							<li>								<span>									<a href=\"#\">										<img src=\"../../../images/tu_3.jpg\" alt=\"\" />									</a>								</span>								<dl>									<dt>										<a href=\"#\">											八马茶业 八马安溪铁观音·小清新1号 252克										</a>									</dt>									<dd class=\"list_pinpai\"><span>品牌:八马茶业</span>&nbsp;&nbsp;&nbsp;<span>销量:506</span></dd>									<dd class=\"list_price\"><i>￥150.00</i></dd>								</dl>							</li>						</ul>-->					</div>				</div>				<div class=\"bottom\">					<div class=\"bottom_top\">						<ul class=\"bottom_list\">							<li><a href=\"#\">我的账号</a></li>							<li><a href=\"#\">安全退出</a></li>							<li><a href=\"#\">反馈</a></li>							<li><a href=\"#\">返回顶部</a></li>						</ul>					</div>					<div class=\"bottom_banben\">						<ul class=\"bottom_ban\">							<li><a href=\"#\"><span></span><p>客户端</p></a></li>							<li><a href=\"#\"><span></span><p>触屏版</p></a></li>							<li><a href=\"#\"><span></span><p>电脑版</p></a></li>						</ul>					</div>				</div>			</section>		</div>	</div>	<div class=\"back\">		<i></i>	</div>	<script id=\"list\" type=\"text/html\">		<ul class=\"good_list\">		{{each list as value i}}							<li>								<span>									<a href=\"../../../car-detail.html#id={{value.goods_id}}\">										<img src={{value.goods_image_url}}>									</a>								</span>								<dl>									<dt>										<a href=\"../../../car-detail.html#id={{value.goods_id}}\">											{{value.goods_name}}										</a>									</dt>									<dd class=\"list_pinpai\"><span>品牌:{{value.store_name}}</span> &nbsp;&nbsp;&nbsp; <span>销量:506</span></dd>									<dd class=\"list_price\"><i>￥{{value.goods_price}}</i></dd>								</dl>							</li>							{{/each}}						</ul>	</script></div>"

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = "<footer id=\"footer\">	<ul>		<li data-url=\'../../../index.html\'>			<i class=\"iconfont\">&#xe60e;</i>			<b>首页</b>		</li>		<li data-url=\'../../../index-class.html\'>			<i class=\"iconfont\">&#xe647;</i>			<b>分类</b>		</li>		<li data-url=\'\'>			<i class=\"iconfont\">&#xe638;</i>			<b>消息</b>		</li>		<li data-url=\'../../../index-car.html\'>			<i class=\"iconfont\">&#xe764;</i>			<b>购物车</b>		</li>		<li data-url=\'../../../index-person.html\'>			<i class=\"iconfont\">&#xe655;</i>			<b>个人中心</b>		</li>	</ul></footer>"

/***/ }
/******/ ]);