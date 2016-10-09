var str = require('../tpls/index-car.string');

var common = require('../utils/common.util.js');
var cookieObj = require('../utils/cookie.js');

common.renderBody($('body'),str);

var totalMoney = 0;
init();
function init(){
	showGoods();
	$('#totalM').html(totalMoney.toFixed(2));
}

/**
 * 设置总价
 */
function setTotal(mon){
	var totalMoney = parseFloat($('#totalM').html());
	$('#totalM').html((totalMoney+mon).toFixed(2));
}

/**
 * 减少商品
 */
$('#cart-item').on('click','li',function(event){
	var event = event || window.event;
	var target = event.target || event.srcElement;
	var mon = parseFloat($(this).children().eq(2).children().eq(1).children().eq(0).children().eq(0).html());
	if(target.className == 'minus'){
		var n = parseInt($(this).children().eq(2).children().eq(1).children().eq(1).children().eq(1).val());
		if(n-1 < 0){
			alert("对不起，商品数量不能为负");
		}else{
			$(this).children().eq(2).children().eq(1).children().eq(1).children().eq(1).val(--n);
			setTotal(-mon);
		}
	}
})

/**
 * 增加商品
 */
$('#cart-item').on('click','li',function(){
	var event = event || window.event;
	var target = event.target || event.srcElement;
	var mon = parseFloat($(this).children().eq(2).children().eq(1).children().eq(0).children().eq(0).html());
	if(target.className == 'add'){
		var n = parseInt($(this).children().eq(2).children().eq(1).children().eq(1).children().eq(1).val());
		$(this).children().eq(2).children().eq(1).children().eq(1).children().eq(1).val(++n);
		setTotal(mon);
	}
})

/**
   * 全选
   */
$('#all_checkbox').on('click',function(){
		$('input[name=goods]').each(function(){
			$(this).attr('checked',true);
		});
})

/**
 * cookie获取数据
 */
function showGoods(){
	var goods = cookieObj.getCookie('cartcookie');
	var arrProducts = [];
	if(goods.length>0){
		arrProducts = JSON.parse(goods);
	}
	
	var html='';
	for(var i = 0;i < arrProducts.length;i++){
		html+= '<li class="cart-item-cnt">';
		html+= '<span class="goods-check">';
		html+= '<input type="checkbox" name="goods" value="" /></span>';
		html+= '<div class="goods-pic">';
		html+= '<a href="../../../car-details.html">';
		html+= '<img src="'+arrProducts[i].img+'"/></a></div>';
		html+= '<div class="goods-info">';
		html+= '<div class="goods-name">';
		html+= '<a href="../../../car-details.html">'+arrProducts[i].name+'</a>';
		html+= '<span class="del-goods"></span></div>';
		html+= '<div class="goods-subtotal">';
		html+= '<span class="goods-price">￥<b id="xiaoji">'+arrProducts[i].price+'</b></span>';
		html+= '<div class="value-box">';
		html+= '<span class = "minus">-</span>';
		html+= '<input type="text" class="num" value="'+arrProducts[i].count+'" />';
		html+= '<span class = "add">+</span></div></div></div></li>';

		totalMoney += parseFloat(arrProducts[i].xiaoji);
	}
	
	$('#cart-item').html(html);
}


