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

	module.exports = __webpack_require__(13);


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
/* 5 */
/***/ function(module, exports) {

	module.exports = "<footer id=\"footer\">	<ul>		<li data-url=\'../../../index.html\'>			<i class=\"iconfont\">&#xe60e;</i>			<b>首页</b>		</li>		<li data-url=\'../../../index-class.html\'>			<i class=\"iconfont\">&#xe647;</i>			<b>分类</b>		</li>		<li data-url=\'\'>			<i class=\"iconfont\">&#xe638;</i>			<b>消息</b>		</li>		<li data-url=\'../../../index-car.html\'>			<i class=\"iconfont\">&#xe764;</i>			<b>购物车</b>		</li>		<li data-url=\'../../../index-person.html\'>			<i class=\"iconfont\">&#xe655;</i>			<b>个人中心</b>		</li>	</ul></footer>"

/***/ },
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ function(module, exports) {

	module.exports = "<header id=\"header\">	<div id=\"header-wrap\">		<span class=\"iconfont\" id=\"header-left\">左边</span>		<div id=\"header-title\">标题</div>		<span class=\"iconfont\" id=\"header-right\">右边</span>	</div></header>"

/***/ },
/* 12 */,
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	__webpack_require__(14);



/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	var common = __webpack_require__(3);

	var footer=__webpack_require__(5);
	var header=__webpack_require__(11);
	var body=__webpack_require__(15);
	var comlist=__webpack_require__(16);

	$.ajax({
	  url: '/mock/comlist.json',
	  success: function (res) {
	  	var strScrollTop='<div><div class="head">\
	                <img src="/build/images/arrow.png" width="18" height="18"/>\
	                <span>下拉刷新...</span>\
	            </div>';
	    var strScrollBottom='<div class="foot">\
	                <img src="/build/images/arrow.png" width="18" height="18"/>\
	                <span>上拉加载更多...</span>\
	            </div></div>';
	    var html = template('list', res.data);
	    html=strScrollTop+html+strScrollBottom;
	    common.inner($('#index-scroll'), html);
	  }
	});
	            
	common.renderBody($('body'),body);
	common.renderBody($('.container'),header);
	common.append($('.container'),footer);

	common.setHeader($('#header-title'),"我的订单");
	common.setHeader($('#header-left'),"&#xf007a");
	common.setHeader($('#header-right'),"&#xf0013");


	window.onload=function(){
		var mySwiper = new Swiper('.swiper-container', {
			onSlideChangeEnd: function(swiper){
			    $('nav li span').eq(swiper.activeIndex).addClass('active').parent().siblings().children().removeClass('active');
			}
		});
		$("nav li").on('click',function(){
			mySwiper.slideTo($(this).index());	
		});
		
		//返回上一个页面
		$("#header-left").on("click",function(){
			window.location.href="index-person.html";
		});
		
		//刷新加载iscroll
		var myScroll = new IScroll('#index-scroll', {
		      probeType: 3,
		      mouseWheel: true
		  });
		  myScroll.scrollBy(0, -35);
		
		  var head = $('.head img'),
		      topImgHasClass = head.hasClass('up');
		  var foot = $('.foot img'),
		      bottomImgHasClass = head.hasClass('down');
		
		  myScroll.on('scroll', function () {
		      var y = this.y,
		          maxY = this.maxScrollY - y;
		      if (y >= 0) {
		          !topImgHasClass && head.addClass('up');
		          return '';
		      }
		      if (maxY >= 0) {
		          !bottomImgHasClass && foot.addClass('down');
		          return '';
		      }
		  });
		
		  myScroll.on('scrollEnd', function () {
		      if (this.y >= -35 && this.y < 0) {
		          myScroll.scrollTo(0, -35);
		          head.removeClass('up');
		      } else if (this.y >= 0) {
		          head.attr('src', '/build/images/ajax-loader.gif');
		          //TODO ajax下拉刷新数据
					$.ajax({
						  url: '/mock/comlist_more.json',
						  success: function (res) {
						    var html = template('list', res.data);
						    $("#index-scroll ul").prepend($(html).unwrap().html());
						  }
						});
				
		          setTimeout(function () {
		              myScroll.scrollTo(0, -35);
		              head.removeClass('up');
		              head.attr('src', '/build/images/arrow.png');
		              myScroll.refresh();
		          }, 1000);
		      }
		
		      var maxY = this.maxScrollY - this.y;
		      if (maxY > -35 && maxY < 0) {
		          var self = this;
		          myScroll.scrollTo(0, self.maxScrollY + 35);
		          foot.removeClass('down')
		      } else if (maxY >= 0) {
		          foot.attr('src', '/build/images/ajax-loader.gif');
		          //TODO ajax上拉加载数据
		          var self = this;
		          $.ajax({
						  url: '/mock/comlist_refresh.json',
						  success: function (res) {
						    var html = template('list', res.data);
						    $("#index-scroll ul").append($(html).unwrap().html());
						  }
						});
				
		          setTimeout(function () {	
		              myScroll.scrollTo(0, self.y + 35);
		              foot.removeClass('down');
		              foot.attr('src', '/build/images/arrow.png');
		              myScroll.refresh();
		          }, 1000);
		      }
		  });

	}



/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = "<div class=\"container\">	<section>		<div class=\"searchbox\">			<input type=\"text\" name=\"\" id=\"text\" placeholder=\"输入商品标题或者订单号进行查询\" />			<input type=\"button\" name=\"\" id=\"btn\" value=\"&#xe604\" class=\"iconfont\" />		</div>		<nav>			<ul>				<li><span class=\"active\">全部</span></li>				<li><span>待付款</span></li>				<li><span>待收货</span></li>				<li><span>待自提</span></li>				<li><span>待评价</span></li>			</ul>		</nav>		<div class=\"content\">			<div class=\"swiper-container\">			  <div class=\"swiper-wrapper\">			    <div class=\"swiper-slide\">			    	<section id=\"index-scroll\">			    				    		</section>					    </div>			    <div class=\"swiper-slide\">			    				    	<section class=\"emptyinfo\">			    		<i class=\"iconfont\">&#xe622;</i>			    		<span >			    			您还没有相关订单			    		</span>			    		<b>可以看看有什么想买的</b>			    		<a href=\"#\">随便逛逛</a>			    	</section>			    </div>			    <div class=\"swiper-slide\">			    	<section class=\"emptyinfo\">			    		<i class=\"iconfont\">&#xe622;</i>			    		<span >			    			您还没有相关订单			    		</span>			    		<b>可以看看有什么想买的</b>			    		<a href=\"#\">随便逛逛</a>			    	</section>			    </div>			    <div class=\"swiper-slide\">			    	<section class=\"emptyinfo\">			    		<i class=\"iconfont\">&#xe622;</i>			    		<span >			    			您还没有相关订单			    		</span>			    		<b>可以看看有什么想买的</b>			    		<a href=\"#\">随便逛逛</a>			    	</section>			    </div>			    <div class=\"swiper-slide\">			    	<section class=\"emptyinfo\">			    		<i class=\"iconfont\">&#xe622;</i>			    		<span >			    			您还没有相关订单			    		</span>			    		<b>可以看看有什么想买的</b>			    		<a href=\"#\">随便逛逛</a>			    	</section>			    </div>			  </div>			</div>		</div>			</section>	<script id=\"list\" type=\"text/html\">		<ul>			{{each list as value i}}				<li>			    			<div class=\"item\">			    				<div id=\"order-title\">			    					<i class=\"iconfont\">&#xe638;</i>			    					<span class=\"title\">{{value.title}}</span>			    					<span id=\"status\">{{value.status}}</span>			    				</div>			    				<div class=\"order-com\">			    					<img src={{value.img}}>			    					<p>{{value.content}}</p>			    					<div class=\"priceandnum\">			    						<span id=\"price\">			    							￥{{value.perprice}}			    						</span>			    						<span id=\"num\">			    							x{{value.num}}			    						</span>			    					</div>			    				</div>			    				<div class=\"total\">			    					<p>共<span class=\"total_num\">{{value.num}}</span>键商品，合计<span class=\"total_price\">￥{{value.totalprice}}</span></p>			    				</div>			    				<div class=\"cancel\">			    					<a href=\"#\">取消订单</a>			    				</div>			    							    				<button>订单支付(<span>￥{{value.totalprice}}元</span>)</button>			    			</div>			    		</li>			{{/each}}		</ul>	</script></div>"

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = "			    		<li>			    			<div class=\"item\">			    				<div id=\"order-title\">			    					<i class=\"iconfont\">&#xe638;</i>			    					<span class=\"title\">八马茶叶</span>			    					<span id=\"status\">待付款</span>			    				</div>			    				<div class=\"order-com\">			    					<img src=\"http://upload.chadaodian.com/shop/store/goods/3/3_53904065nba9baa43_240.jpg\"/>			    					<p>卡拉加速度克劳馥就阿斯顿分类空间速度发</p>			    					<div class=\"priceandnum\">			    						<span id=\"price\">			    							￥420.0			    						</span>			    						<span id=\"num\">			    							1			    						</span>			    					</div>			    				</div>			    				<div class=\"total\">			    					<p>共<span class=\"total_num\">1</span>键商品，合计<span class=\"total_price\">￥421.3</span></p>			    				</div>			    				<div class=\"cancel\">			    					<a href=\"#\">取消订单</a>			    				</div>			    							    				<button>订单支付(<span>￥313元</span>)</button>			    			</div>			    		</li>			    		<li>			    			<div class=\"item\">			    				<div id=\"order-title\">			    					<i class=\"iconfont\">&#xe638;</i>			    					<span class=\"title\">八马茶叶</span>			    					<span id=\"status\">待付款</span>			    				</div>			    				<div class=\"order-com\">			    					<img src=\"http://upload.chadaodian.com/shop/store/goods/3/3_53904065nba9baa43_240.jpg\"/>			    					<p>卡拉加速度克劳馥就阿斯顿分类空间速度发</p>			    					<div class=\"priceandnum\">			    						<span id=\"price\">			    							￥420.0			    						</span>			    						<span id=\"num\">			    							1			    						</span>			    					</div>			    				</div>			    				<div class=\"total\">			    					<p>共<span class=\"total_num\">1</span>键商品，合计<span class=\"total_price\">￥421.3</span></p>			    				</div>			    				<div class=\"cancel\">			    					<a href=\"#\">取消订单</a>			    				</div>			    							    				<button>订单支付(<span>￥313元</span>)</button>			    			</div>			    		</li>			    		<li>			    			<div class=\"item\">			    				<div id=\"order-title\">			    					<i class=\"iconfont\">&#xe638;</i>			    					<span class=\"title\">八马茶叶</span>			    					<span id=\"status\">待付款</span>			    				</div>			    				<div class=\"order-com\">			    					<img src=\"http://upload.chadaodian.com/shop/store/goods/3/3_53904065nba9baa43_240.jpg\"/>			    					<p>卡拉加速度克劳馥就阿斯顿分类空间速度发</p>			    					<div class=\"priceandnum\">			    						<span id=\"price\">			    							￥420.0			    						</span>			    						<span id=\"num\">			    							1			    						</span>			    					</div>			    				</div>			    				<div class=\"total\">			    					<p>共<span class=\"total_num\">1</span>键商品，合计<span class=\"total_price\">￥421.3</span></p>			    				</div>			    				<div class=\"cancel\">			    					<a href=\"#\">取消订单</a>			    				</div>			    							    				<button>订单支付(<span>￥313元</span>)</button>			    			</div>			    		</li>			    		<li>			    			<div class=\"item\">			    				<div id=\"order-title\">			    					<i class=\"iconfont\">&#xe638;</i>			    					<span class=\"title\">八马茶叶</span>			    					<span id=\"status\">待付款</span>			    				</div>			    				<div class=\"order-com\">			    					<img src=\"http://upload.chadaodian.com/shop/store/goods/3/3_53904065nba9baa43_240.jpg\"/>			    					<p>卡拉加速度克劳馥就阿斯顿分类空间速度发</p>			    					<div class=\"priceandnum\">			    						<span id=\"price\">			    							￥420.0			    						</span>			    						<span id=\"num\">			    							1			    						</span>			    					</div>			    				</div>			    				<div class=\"total\">			    					<p>共<span class=\"total_num\">1</span>键商品，合计<span class=\"total_price\">￥421.3</span></p>			    				</div>			    				<div class=\"cancel\">			    					<a href=\"#\">取消订单</a>			    				</div>			    							    				<button>订单支付(<span>￥313元</span>)</button>			    			</div>			    		</li>			    "

/***/ }
/******/ ]);