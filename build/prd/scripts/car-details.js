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

	module.exports = __webpack_require__(24);


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

/***/ 9:
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


/***/ },

/***/ 24:
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	__webpack_require__(25);



/***/ },

/***/ 25:
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	var str = __webpack_require__(26);

	var common = __webpack_require__(3);
	var cookieObj = __webpack_require__(9);

	common.renderBody($('body'),str);

	/**
	 * 轮播图
	 */
	var mySwiper = new Swiper('.swiper-container',{
		pagination:'.swiper-pagination',
		paginationClickable:true,
		
	});

	/**
	 * 头部导航点击出现
	 */
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

	/**
	 * 点击加入购物车弹出
	 */
	$('#car-handles').on('click',function(){
		$('#bottom-mask').css('display','block');
	})
	$('#mask-close').on('click',function(){
		$('#bottom-mask').css('display','none');
	})

	/**
	 * 页面滚动
	 */
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

	/**
	 * 增加商品
	 */
	$("#add").on('click',function(){
		var num = parseInt($("#num").val());
		$("#num").val(++num);
		
	})

	/**
	 * 减少商品
	 */
	$("#sub").on('click',function(){
		var num = parseInt($("#num").val());
		if(num-1 < 0){
			alert("对不起，商品数量不能为负");
		}else{
			$("#num").val(--num);
		}
		
	})

	/**
	 * 获取地址栏参数
	 */
	function UrlSearch(id){
		var value = '';
		var str = location.href;
		var num = str.indexOf('#');
		str = str.substr(num+1);
		var arr = str.split('&');
		for(var i = 0;i < arr.length;i++){
			num = arr[i].indexOf('=');
			if(num>0){
				var name = arr[i].substring(0,num);
				if(name == id){
					value = arr[i].substr(num+1);
					break;
				}
			}
		}
		return value;
	}

	/**
	 * ajax获取商品信息
	 */
	var id = UrlSearch('id');
	$.ajax({
		type:"get",
		url:"/build/mock/list.json",
		data:{
			"goods_id":id
		},
		success:function(res){
			var arr = res.data.list;
	//		console.log(arr)
			for(var i = 0;i < arr.length;i++){
				if(arr[i].goods_id == id){
					var productObj = arr[i];
					$('.goods-detail-name').html(productObj.goods_name);
					$('#goods_marketprice').html(productObj.goods_marketprice);
					$('#goods_price').html(productObj.goods_price);
					$('#goods_salenum').html(productObj.goods_salenum);
					$('#goods-img img').attr('src',productObj.goods_image_url);
					
					$('#gname').html(productObj.goods_name);
					$('#mprice').html(productObj.goods_marketprice);
					$('#sprice').html(productObj.goods_price);
					$('#snum').html(productObj.goods_salenum);
					$('#gimg').attr('src',productObj.goods_image_url);
				}
			}
		},
		typeData:'json'
	});



	/**
	 * 把商品信息存储到cookie
	 */

	var totalCount = cookieObj.getCookie('totalCount'); //所有商品个数
	if(totalCount.length>0){
		totalCount = parseInt(totalCount);
	}else{
		totalCount = 0;
	}
	$('#cart_count').html(totalCount);
	$('#cart_counts').html(totalCount);

	$('#car-handle').on('click', function(){
		var goodsInfo = new Object();
		goodsInfo.name = $('#gname').html();
		goodsInfo.img = $('#gimg').attr('src');
		goodsInfo.price = $('#sprice').html();
		goodsInfo.count = $('#num').val();
		goodsInfo.xiaoji = (($('#sprice').html())*($('#num').val())).toFixed(2);
		
		var goods = cookieObj.getCookie('cartcookie');
		var arrProducts = []; //存储所有商品
	//	购物车中有旧数据
		if(goods.length>0){
			arrProducts = JSON.parse(goods);
		}
	//	判断是否有同一个商品
		var flag = false;
		var total = 0;
		for(var j = 0;j < arrProducts.length;j++){
			console.log(j+'----'+arrProducts[j].count)
			total += parseInt(arrProducts[j].count);
			if(arrProducts[j].name == goodsInfo.name){
				arrProducts[j].count = parseInt(arrProducts[j].count) + parseInt(goodsInfo.count);
				arrProducts[j].xiaoji = (arrProducts[j].price*arrProducts[j].count).toFixed(2);
				flag = true;
			}
		}
		if(!flag){
			arrProducts.push(goodsInfo);
		}
		
	//	存储到cookie中
		var strProInfo = JSON.stringify(arrProducts);
		cookieObj.setCookie('cartcookie',strProInfo,30);
		
		cookieObj.setCookie('totalCount',(total+''),30);
		
		$('#cart_count').html(total);
		$('#cart_counts').html(total);
	});







/***/ },

/***/ 26:
/***/ function(module, exports) {

	module.exports = "<div class=\"container\">	<header id=\"detail-header-s\" class=\"detail-header-s\">					<div class=\"header-l\">						<a href=\"javascript:history.go(-1);\">							<i class=\"back\"></i>						</a>					</div>					<ul class=\"header-c\">						<li class=\"cur\">							<a href=\"javascript:void(0)\">商品</a>						</li>						<li>							<a href=\"javascript:void(0)\">详情</a>						</li>						<li>							<a href=\"javascript:void(0)\">评价</a>						</li>					</ul>					<div class=\"header-r\" id=\"menu-block\">						<a href=\"javascripts:void(0);\" class=\"header-nav\">							<div class=\"more\"></div>							<i class=\"dot\"></i>						</a>						<div class=\"head-nav-menu\" id=\"head-nav-menu\">							<span class=\"arrow\"></span>							<ul>								<li>									<a href=\"../../../index.html\"><i class=\"iconfont\">&#xe60e;</i>首页</a>								</li>								<li>									<a href=\"../../../#\"><i class=\"iconfont\">&#xe6b5;</i>搜索</a>								</li>								<li>									<a href=\"../../../index-class.html\"><i class=\"iconfont\">&#xe647;</i>分类</a>								</li>								<li>									<a href=\"../../../#\"><i class=\"iconfont\">&#xe638;</i>消息</a>								</li>								<li>									<a href=\"../../../index-car.html\"><i class=\"iconfont\">&#xe764;</i>购物车</a>								</li>								<li>									<a href=\"../../../index-person.html\"><i class=\"iconfont\">&#xe655;</i>我的商城</a>								</li>							</ul>						</div>					</div>					</header>	<div class=\"swiper-container swiper-container-horizontal\">		<ul class=\"swiper-wrapper\">			<li class=\"swiper-slide\" id=\"goods-img\">				<img src=\"../../../images/sai1.jpg\" />			</li>			<li class=\"swiper-slide\">				<img src=\"../../../images/sai2.jpg\" />			</li>			<li class=\"swiper-slide\">				<img src=\"../../../images/sai3.jpg\" />			</li>			<li class=\"swiper-slide\">				<img src=\"../../../images/sai4.jpg\" />			</li>			<li class=\"swiper-slide\">				<img src=\"../../../images/sai5.jpg\" />			</li>		</ul>		<div class=\"swiper-pagination\"></div>	</div>	<section>		<div class=\"wai\" id=\"detail-scroll\">			<div class=\"section-container\">				<header id=\"detali-header\">					<div class=\"header-l\">						<a href=\"javascript:history.go(-1);\">							<i class=\"back\" id=\"detali-back\"></i>						</a>					</div>					<div class=\"header-r\" id=\"menu-blocks\">						<a href=\"javascripts:void(0);\" class=\"header-nav\">							<div class=\"more\"></div>							<i class=\"dot\"></i>						</a>						<div class=\"head-nav-menu\" id=\"head-nav-menus\">							<span class=\"arrow\"></span>							<ul>								<li>									<a href=\"../../../index.html\"><i class=\"iconfont\">&#xe60e;</i>首页</a>								</li>								<li>									<a href=\"../../../#\"><i class=\"iconfont\">&#xe6b5;</i>搜索</a>								</li>								<li>									<a href=\"../../../index-class.html\"><i class=\"iconfont\">&#xe647;</i>分类</a>								</li>								<li>									<a href=\"../../../#\"><i class=\"iconfont\">&#xe638;</i>消息</a>								</li>								<li>									<a href=\"../../../index-car.html\"><i class=\"iconfont\">&#xe764;</i>购物车</a>								</li>								<li>									<a href=\"../../../index-person.html\"><i class=\"iconfont\">&#xe655;</i>我的商城</a>								</li>							</ul>						</div>					</div>				</header>								<div class=\"scroll-opa\"></div>				<div class=\"goods-detail-t\">					<div class=\"goods-detail-name\">						八马茶业 安溪铁观音 赛珍珠1000 250克					</div>					<div class=\"goods-detail-price\">						<dl>							<dt>直供价￥<i id=\"goods_marketprice\">420.00</i></dt>							<dd>零售价￥<i id=\"goods_price\">600.00</i></dd>						</dl>						<span class=\"sold\">销量：<i id=\"goods_salenum\">359</i>件</span>					</div>					<div class=\"goods-detail-item\">						<span class=\"item-name\">送至</span>						<div class=\"item-con\">							<a href=\"javascript:void(0);\" id=\"get_area_selected\">								<dl class=\"goods-detail-freight\">									<dt>									<span>全国</span>									<b>有货</b>								</dt>									<dd>运费：10.00元</dd>								</dl>							</a>						</div>						<span class=\"item-location\"></span>					</div>					<div class=\"goods-detail-select\">						<span class=\"item-name\">已选</span>						<div class=\"item-con\">默认</div>						<div class=\"item-more\"></div>					</div>				</div>				<div class=\"goods-detail-c\">					<div class=\"title\">						<a href=\"javascript:void(0);\">							<span class=\"goods-eval\">商品评价</span>							<span class=\"rate\">好评率 <b>100%</b></span>							<span class=\"rate-num\">(7人评价)</span>							<span class=\"item-more\"></span>						</a>					</div>					<div class=\"commont-info\">						<dl>							<dt>							<div class=\"goods-raty\">								<i class=\"star5\"></i>							</div>							<span class=\"user-name\">13083815595</span>						</dt>							<dd>顾客很喜欢，卖得很快，包装好，发货快</dd>						</dl>						<dl>							<dt>							<div class=\"goods-raty\">								<i class=\"star5\"></i>							</div>							<span class=\"user-name\">13083815595</span>						</dt>							<dd>顾客很喜欢，卖得很快，包装好，发货快</dd>						</dl>						<dl>							<dt>							<div class=\"goods-raty\">								<i class=\"star5\"></i>							</div>							<span class=\"user-name\">13083815595</span>						</dt>							<dd>顾客很喜欢，卖得很快，包装好，发货快</dd>						</dl>						<dl>							<dt>							<div class=\"goods-raty\">								<i class=\"star5\"></i>							</div>							<span class=\"user-name\">13083815595</span>						</dt>							<dd>顾客很喜欢，卖得很快，包装好，发货快</dd>						</dl>					</div>				</div>				<div class=\"goods-detail-store\">					<a href=\"javascript:void(0);\">						<div class=\"store-name\">							<i class=\"icon-store\"></i>八马茶业							<span class=\"icon-mall\">自营店铺</span>						</div>						<div class=\"store-rate\">							<span class=\"equal\">							描述相符							<b>5</b>							<i>平</i>						</span>							<span class=\"equal\">							服务态度							<b>5</b>							<i>平</i>						</span>							<span class=\"equal\">							发货速度							<b>5</b>							<i>平</i>						</span>						</div>					</a>				</div>				<div class=\"goods-detail-recom\">					<h4>店铺推荐</h4>					<ul>						<li>							<a href=\"javascript:void(0);\">								<dl>									<dt><img src=\"../../../images/d1.jpg\"  /> </dt>									<dd>										<span>八马茶业 八马安溪铁观音 小</span>										<b>￥<i>105.00</i></b>									</dd>								</dl>							</a>						</li>						<li>							<a href=\"javascript:void(0);\">								<dl>									<dt><img src=\"../../../images/d1.jpg\"  /> </dt>									<dd>										<span>八马茶业 八马安溪铁观音 小</span>										<b>￥<i>105.00</i></b>									</dd>								</dl>							</a>						</li>						<li>							<a href=\"javascript:void(0);\">								<dl>									<dt><img src=\"../../../images/d1.jpg\"  /> </dt>									<dd>										<span>八马茶业 八马安溪铁观音 小</span>										<b>￥<i>105.00</i></b>									</dd>								</dl>							</a>						</li>						<li>							<a href=\"javascript:void(0);\">								<dl>									<dt><img src=\"../../../images/d1.jpg\"  /> </dt>									<dd>										<span>八马茶业 八马安溪铁观音 小</span>										<b>￥<i>105.00</i></b>									</dd>								</dl>							</a>						</li>						<li>							<a href=\"javascript:void(0);\">								<dl>									<dt><img src=\"../../../images/d1.jpg\"  /> </dt>									<dd>										<span>八马茶业 八马安溪铁观音 小</span>										<b>￥<i>105.00</i></b>									</dd>								</dl>							</a>						</li>						<li>							<a href=\"javascript:void(0);\">								<dl>									<dt><img src=\"../../../images/d1.jpg\"  /> </dt>									<dd>										<span>八马茶业 八马安溪铁观音 小</span>										<b>￥<i>105.00</i></b>									</dd>								</dl>							</a>						</li>						<li>							<a href=\"javascript:void(0);\">								<dl>									<dt><img src=\"../../../images/d1.jpg\"  /> </dt>									<dd>										<span>八马茶业 八马安溪铁观音 小</span>										<b>￥<i>105.00</i></b>									</dd>								</dl>							</a>						</li>						<li>							<a href=\"javascript:void(0);\">								<dl>									<dt><img src=\"../../../images/d1.jpg\"  /> </dt>									<dd>										<span>八马茶业 八马安溪铁观音 小</span>										<b>￥<i>105.00</i></b>									</dd>								</dl>							</a>						</li>					</ul>				</div>				<div class=\"goods-detail-bottom\">					<a href=\"javascript:void(0);\">点击查看商品详情</a>				</div>			</div>		</div>	</section>	<footer>		<div class=\"otreh-handle\">			<a href=\"javascript:void(0);\" class=\"kefu\">				<i></i>				<p>客服</p>			</a>			<a href=\"../../../index-car.html\" class=\"cart\">				<i class=\"iconfont\">&#xe764;</i>				<p>购物车</p>				<span id=\"cart_counts\"></span>			</a>		</div>		<div class=\"buy-handle\">			<a href=\"javascript:void:(0);\">立即购买</a>		</div>		<div class=\"car-handle\" id=\"car-handles\">			<a href=\"javascript:void(0);\">加入购物车</a>		</div>	</footer></div><div class=\"bottom-mask\" id=\"bottom-mask\">	<div class=\"bottom-mask-bg\"></div>	<div class=\"bottom-mask-block\">		<div class=\"mask-block-tip\">			<i></i><span>点击此处返回</span>		</div>		<div class=\"mask-block-top\">			<dl class=\"goods-pic\">				<dt><img id=\"gimg\" src=\"../../../build/images/sai1.jpg\" /></dt>				<dd>					<span class=\"goods-name\" id=\"gname\">八马茶业 安溪铁观音 赛珍珠1000 250克</span>					<div>						<p class=\"goods-price\">							<span class=\"pricenow\">￥<i id=\"sprice\">420.00</i></span><span class=\"priceago\">￥<i id=\"mprice\">600.00</i></span>						</p>						<span class=\"goods-num\">库存：<i id=\"snum\">1356</i>件</span>					</div>				</dd>			</dl>			<a href=\"javascript:void(0);\" class=\"bottom-mask-close\" id=\"mask-close\">				<i></i>			</a>		</div>		<div class=\"goods-value\">			购买数量			<div class=\"value-box\">				<a href=\"javascript:void(0);\" id=\"sub\" class=\"sub\">-</a>				<input type=\"text\" value=\"1\" id=\"num\" />				<a href=\"javascript:void(0);\" id=\"add\" class=\"sub\">+</a>			</div>		</div>		<div class=\"goods-footer\">			<div class=\"otreh-handle\">				<a href=\"javascript:void(0);\" class=\"kefu\">					<i></i>					<p>客服</p>				</a>				<a href=\"../../../index-car.html\" class=\"cart\">					<i class=\"iconfont\">&#xe764;</i>					<p>购物车</p>					<span id=\"cart_count\"></span>				</a>			</div>			<div class=\"buy-handle\">				<a href=\"javascript:void:(0);\">立即购买</a>			</div>			<div class=\"car-handle\" id=\"car-handle\">				<a href=\"javascript:void(0);\">加入购物车</a>			</div>		</div>	</div></div>"

/***/ }

/******/ });