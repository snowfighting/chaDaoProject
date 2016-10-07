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

<<<<<<< HEAD
	module.exports = __webpack_require__(14);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */
=======
	module.exports = __webpack_require__(20);


/***/ },

/***/ 6:
>>>>>>> fengyuchao
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
<<<<<<< HEAD
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */
=======

/***/ 11:
/***/ function(module, exports) {

	module.exports = "<footer id=\"footer\">	<ul>		<li data-url=\'/build/index.html\'>			<i class=\"iconfont\">&#xe60e;</i>			<b>首页</b>		</li>		<li data-url=\'/build/index-class.html\'>			<i class=\"iconfont\">&#xe647;</i>			<b>分类</b>		</li>		<li data-url=\'\'>			<i class=\"iconfont\">&#xe638;</i>			<b>消息</b>		</li>		<li data-url=\'/build/index-car.html\'>			<i class=\"iconfont\">&#xe764;</i>			<b>购物车</b>		</li>		<li data-url=\'/build/index-person.html\'>			<i class=\"iconfont\">&#xe655;</i>			<b>个人中心</b>		</li>	</ul></footer>"

/***/ },

/***/ 20:
>>>>>>> fengyuchao
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

<<<<<<< HEAD
	__webpack_require__(15);
=======
	__webpack_require__(21);
>>>>>>> fengyuchao



/***/ },
<<<<<<< HEAD
/* 15 */
=======

/***/ 21:
>>>>>>> fengyuchao
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

<<<<<<< HEAD
	var str = __webpack_require__(16);

	var common = __webpack_require__(3);
=======
	var str = __webpack_require__(22);
	var footer = __webpack_require__(11);

	var common = __webpack_require__(6);
>>>>>>> fengyuchao

	common.renderBody($('body'),str);

	var mySwiper = new Swiper('.swiper-container',{
		pagination:'.swiper-pagination',
		paginationClickable:true,
		
	});

	var countFlag = 0,countFlags = 0;
	$('#menu-block').on('click',function(){
		if(countFlag%2 == 0){
			$('#head-nav-menu').css('display','block');
		}else{
			$('#head-nav-menu').css('display','none');
		}
		countFlag++;
	})
	$('#menu-blocks').on('click',function(){
		if(countFlags%2 == 0){
			$('#head-nav-menus').css('display','block');
		}else{
			$('#head-nav-menus').css('display','none');
		}
		countFlags++;
	})

	$('#car-handle').on('click',function(){
		$('#bottom-mask').css('display','block');
	})
	$('#mask-close').on('click',function(){
		$('#bottom-mask').css('display','none');
	})

	window.onload = function(){
		var myScroll = new IScroll('#detail-scroll',{
			mouseWheel:true,
			scrollbars:true,
			probeType:3,
			click:true
			
		});
		myScroll.on('scroll',function(){
			var y = this.y;
			if(y<=-44){
				$('#detail-header-s').css('display','block');
			}else if(y> -44){
				$('#detail-header-s').css('display','none');
			}
		})
	}


<<<<<<< HEAD


/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = "<div class=\"container\">	<header id=\"detail-header-s\" class=\"detail-header-s\">					<div class=\"header-l\">						<a href=\"javascript:history.go(-1);\">							<i class=\"back\"></i>						</a>					</div>					<ul class=\"header-c\">						<li class=\"cur\">							<a href=\"javascript:void(0)\">商品</a>						</li>						<li>							<a href=\"javascript:void(0)\">详情</a>						</li>						<li>							<a href=\"javascript:void(0)\">评价</a>						</li>					</ul>					<div class=\"header-r\" id=\"menu-block\">						<a href=\"javascripts:void(0);\" class=\"header-nav\">							<div class=\"more\"></div>							<i class=\"dot\"></i>						</a>						<div class=\"head-nav-menu\" id=\"head-nav-menu\">							<span class=\"arrow\"></span>							<ul>								<li>									<a href=\"../../../index.html\"><i class=\"iconfont\">&#xe60e;</i>首页</a>								</li>								<li>									<a href=\"../../../#\"><i class=\"iconfont\">&#xe6b5;</i>搜索</a>								</li>								<li>									<a href=\"../../../index-class.html\"><i class=\"iconfont\">&#xe647;</i>分类</a>								</li>								<li>									<a href=\"../../../#\"><i class=\"iconfont\">&#xe638;</i>消息</a>								</li>								<li>									<a href=\"../../../index-car.html\"><i class=\"iconfont\">&#xe764;</i>购物车</a>								</li>								<li>									<a href=\"../../../index-person.html\"><i class=\"iconfont\">&#xe655;</i>我的商城</a>								</li>							</ul>						</div>					</div>					</header>	<div class=\"swiper-container swiper-container-horizontal\">		<ul class=\"swiper-wrapper\">			<li class=\"swiper-slide\">				<img src=\"../../../images/sai1.jpg\" />			</li>			<li class=\"swiper-slide\">				<img src=\"../../../images/sai2.jpg\" />			</li>			<li class=\"swiper-slide\">				<img src=\"../../../images/sai3.jpg\" />			</li>			<li class=\"swiper-slide\">				<img src=\"../../../images/sai4.jpg\" />			</li>			<li class=\"swiper-slide\">				<img src=\"../../../images/sai5.jpg\" />			</li>		</ul>		<div class=\"swiper-pagination\"></div>	</div>	<section>		<div class=\"wai\" id=\"detail-scroll\">			<div class=\"section-container\">				<header id=\"detali-header\">					<div class=\"header-l\">						<a href=\"javascript:history.go(-1);\">							<i class=\"back\" id=\"detali-back\"></i>						</a>					</div>					<div class=\"header-r\" id=\"menu-blocks\">						<a href=\"javascripts:void(0);\" class=\"header-nav\">							<div class=\"more\"></div>							<i class=\"dot\"></i>						</a>						<div class=\"head-nav-menu\" id=\"head-nav-menus\">							<span class=\"arrow\"></span>							<ul>								<li>									<a href=\"../../../index.html\"><i class=\"iconfont\">&#xe60e;</i>首页</a>								</li>								<li>									<a href=\"../../../#\"><i class=\"iconfont\">&#xe6b5;</i>搜索</a>								</li>								<li>									<a href=\"../../../index-class.html\"><i class=\"iconfont\">&#xe647;</i>分类</a>								</li>								<li>									<a href=\"../../../#\"><i class=\"iconfont\">&#xe638;</i>消息</a>								</li>								<li>									<a href=\"../../../index-car.html\"><i class=\"iconfont\">&#xe764;</i>购物车</a>								</li>								<li>									<a href=\"../../../index-person.html\"><i class=\"iconfont\">&#xe655;</i>我的商城</a>								</li>							</ul>						</div>					</div>				</header>								<div class=\"scroll-opa\"></div>				<div class=\"goods-detail-t\">					<div class=\"goods-detail-name\">						八马茶业 安溪铁观音 赛珍珠1000 250克					</div>					<div class=\"goods-detail-price\">						<dl>							<dt>直供价￥<i>420.00</i></dt>							<dd>零售价￥<i>600.00</i></dd>						</dl>						<span class=\"sold\">销量：359件</span>					</div>					<div class=\"goods-detail-item\">						<span class=\"item-name\">送至</span>						<div class=\"item-con\">							<a href=\"javascript:void(0);\" id=\"get_area_selected\">								<dl class=\"goods-detail-freight\">									<dt>									<span>全国</span>									<b>有货</b>								</dt>									<dd>运费：10.00元</dd>								</dl>							</a>						</div>						<span class=\"item-location\"></span>					</div>					<div class=\"goods-detail-select\">						<span class=\"item-name\">已选</span>						<div class=\"item-con\">默认</div>						<div class=\"item-more\"></div>					</div>				</div>				<div class=\"goods-detail-c\">					<div class=\"title\">						<a href=\"javascript:void(0);\">							<span class=\"goods-eval\">商品评价</span>							<span class=\"rate\">好评率 <b>100%</b></span>							<span class=\"rate-num\">(7人评价)</span>							<span class=\"item-more\"></span>						</a>					</div>					<div class=\"commont-info\">						<dl>							<dt>							<div class=\"goods-raty\">								<i class=\"star5\"></i>							</div>							<span class=\"user-name\">13083815595</span>						</dt>							<dd>顾客很喜欢，卖得很快，包装好，发货快</dd>						</dl>						<dl>							<dt>							<div class=\"goods-raty\">								<i class=\"star5\"></i>							</div>							<span class=\"user-name\">13083815595</span>						</dt>							<dd>顾客很喜欢，卖得很快，包装好，发货快</dd>						</dl>						<dl>							<dt>							<div class=\"goods-raty\">								<i class=\"star5\"></i>							</div>							<span class=\"user-name\">13083815595</span>						</dt>							<dd>顾客很喜欢，卖得很快，包装好，发货快</dd>						</dl>						<dl>							<dt>							<div class=\"goods-raty\">								<i class=\"star5\"></i>							</div>							<span class=\"user-name\">13083815595</span>						</dt>							<dd>顾客很喜欢，卖得很快，包装好，发货快</dd>						</dl>					</div>				</div>				<div class=\"goods-detail-store\">					<a href=\"javascript:void(0);\">						<div class=\"store-name\">							<i class=\"icon-store\"></i>八马茶业							<span class=\"icon-mall\">自营店铺</span>						</div>						<div class=\"store-rate\">							<span class=\"equal\">							描述相符							<b>5</b>							<i>平</i>						</span>							<span class=\"equal\">							服务态度							<b>5</b>							<i>平</i>						</span>							<span class=\"equal\">							发货速度							<b>5</b>							<i>平</i>						</span>						</div>					</a>				</div>				<div class=\"goods-detail-recom\">					<h4>店铺推荐</h4>					<ul>						<li>							<a href=\"javascript:void(0);\">								<dl>									<dt><img src=\"../../../images/d1.jpg\"  /> </dt>									<dd>										<span>八马茶业 八马安溪铁观音 小</span>										<b>￥<i>105.00</i></b>									</dd>								</dl>							</a>						</li>						<li>							<a href=\"javascript:void(0);\">								<dl>									<dt><img src=\"../../../images/d1.jpg\"  /> </dt>									<dd>										<span>八马茶业 八马安溪铁观音 小</span>										<b>￥<i>105.00</i></b>									</dd>								</dl>							</a>						</li>						<li>							<a href=\"javascript:void(0);\">								<dl>									<dt><img src=\"../../../images/d1.jpg\"  /> </dt>									<dd>										<span>八马茶业 八马安溪铁观音 小</span>										<b>￥<i>105.00</i></b>									</dd>								</dl>							</a>						</li>						<li>							<a href=\"javascript:void(0);\">								<dl>									<dt><img src=\"../../../images/d1.jpg\"  /> </dt>									<dd>										<span>八马茶业 八马安溪铁观音 小</span>										<b>￥<i>105.00</i></b>									</dd>								</dl>							</a>						</li>						<li>							<a href=\"javascript:void(0);\">								<dl>									<dt><img src=\"../../../images/d1.jpg\"  /> </dt>									<dd>										<span>八马茶业 八马安溪铁观音 小</span>										<b>￥<i>105.00</i></b>									</dd>								</dl>							</a>						</li>						<li>							<a href=\"javascript:void(0);\">								<dl>									<dt><img src=\"../../../images/d1.jpg\"  /> </dt>									<dd>										<span>八马茶业 八马安溪铁观音 小</span>										<b>￥<i>105.00</i></b>									</dd>								</dl>							</a>						</li>						<li>							<a href=\"javascript:void(0);\">								<dl>									<dt><img src=\"../../../images/d1.jpg\"  /> </dt>									<dd>										<span>八马茶业 八马安溪铁观音 小</span>										<b>￥<i>105.00</i></b>									</dd>								</dl>							</a>						</li>						<li>							<a href=\"javascript:void(0);\">								<dl>									<dt><img src=\"../../../images/d1.jpg\"  /> </dt>									<dd>										<span>八马茶业 八马安溪铁观音 小</span>										<b>￥<i>105.00</i></b>									</dd>								</dl>							</a>						</li>					</ul>				</div>				<div class=\"goods-detail-bottom\">					<a href=\"javascript:void(0);\">点击查看商品详情</a>				</div>			</div>		</div>	</section>	<footer>		<div class=\"otreh-handle\">			<a href=\"javascript:void(0);\" class=\"kefu\">				<i></i>				<p>客服</p>			</a>			<a href=\"../../../index-car.html\" class=\"cart\">				<i class=\"iconfont\">&#xe764;</i>				<p>购物车</p>				<span id=\"cart_count\">1</span>			</a>		</div>		<div class=\"buy-handle\">			<a href=\"javascript:void:(0);\">立即购买</a>		</div>		<div class=\"car-handle\" id=\"car-handle\">			<a href=\"javascript:void(0);\">加入购物车</a>		</div>	</footer></div><div class=\"bottom-mask\" id=\"bottom-mask\">	<div class=\"bottom-mask-bg\"></div>	<div class=\"bottom-mask-block\">		<div class=\"mask-block-tip\">			<i></i><span>点击此处返回</span>		</div>		<div class=\"mask-block-top\">			<dl class=\"goods-pic\">				<dt><img src=\"../../../build/images/sai1.jpg\" /></dt>				<dd>					<span class=\"goods-name\">八马茶业 安溪铁观音 赛珍珠1000 250克</span>					<div>						<p class=\"goods-price\">							<span class=\"pricenow\">￥<i>420.00</i></span><span class=\"priceago\">￥600.00</span>						</p>						<span class=\"goods-num\">库存：1356件</span>					</div>				</dd>			</dl>			<a href=\"javascript:void(0);\" class=\"bottom-mask-close\" id=\"mask-close\">				<i></i>			</a>		</div>		<div class=\"goods-value\">			购买数量			<div class=\"value-box\">				<a href=\"javascript:void(0);\" id=\"sub\" class=\"sub\">-</a>				<input type=\"text\" value=\"1\" id=\"num\" />				<a href=\"javascript:void(0);\" id=\"add\" class=\"sub\">+</a>			</div>		</div>		<div class=\"goods-footer\">			<div class=\"otreh-handle\">				<a href=\"javascript:void(0);\" class=\"kefu\">					<i></i>					<p>客服</p>				</a>				<a href=\"../../../index-car.html\" class=\"cart\">					<i class=\"iconfont\">&#xe764;</i>					<p>购物车</p>					<span id=\"cart_count\">1</span>				</a>			</div>			<div class=\"buy-handle\">				<a href=\"javascript:void:(0);\">立即购买</a>			</div>			<div class=\"car-handle\">				<a href=\"javascript:void(0);\">加入购物车</a>			</div>		</div>	</div></div>"
=======
/***/ },

/***/ 22:
/***/ function(module, exports) {

	module.exports = "<div class=\"container\">	<header id=\"detali-header\">			</header>	<div class=\"swiper-container\">		<div class=\"swiper-wrapper\">			<div class=\"swiper-slide\">				<img src=\"../../../images/sai1.jpg\"/>			</div>			<div class=\"swiper-slide\">				<img src=\"../../../images/sai2.jpg\"/>			</div>			<div class=\"swiper-slide\">				<img src=\"../../../images/sai3.jpg\"/>			</div>			<div class=\"swiper-slide\">				<img src=\"../../../images/sai4.jpg\"/>			</div>			<div class=\"swiper-slide\">				<img src=\"../../../images/sai5.jpg\"/>			</div>		</div>		<div class=\"swiper-pagination-h\"></div>	</div>	<section>			</section>	</div>"
>>>>>>> fengyuchao

/***/ }

/******/ });
