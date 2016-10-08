var str = require('../tpls/car-details.string');

var common = require('../utils/common.util.js');

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
$('#car-handle').on('click',function(){
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
 * 获取地址栏参数
 */
function UrlSearch(id){
	var value;
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
console.log(id);





$('#car-handle').on(function(){
	var goodsInfo = new Object();
//	goodsInfo.name = 
})
