var str = require('../tpls/car-details.string');

var common = require('../utils/common.util.js');
var cookieObj = require('../utils/cookie.js');

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




