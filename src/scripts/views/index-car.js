var str = require('../tpls/index-car.string');

var common = require('../utils/common.util.js');

common.renderBody($('body'),str);


/**
 * 增加商品
 */
$("#add").on('click',function(){
	var num = parseInt($(".num").val());
	$(".num").val(++num);
	
})

/**
 * 减少商品
 */
$("#minus").on('click',function(){
	var num = parseInt($(".num").val());
	if(num-1 < 0){
		alert("对不起，商品数量不能为负");
	}else{
		$(".num").val(--num);
//		getMoney(num);
//		setTotal();
	}
	
})

$('#all_checkbox').on('click',function(){
		$('input[name=goods]').each(function(){
			$(this).attr('checked',true);
		});
})


