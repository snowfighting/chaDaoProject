var str = require('../tpls/car-details.string');

var common = require('../utils/common.util.js');

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

