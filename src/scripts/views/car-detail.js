var str = require('../tpls/car-details.string');

var common = require('../utils/common.util.js');

common.renderBody($('body'),str);

var mySwiper = new Swiper('.swiper-container',{
	pagination:'.swiper-pagination',
	paginationClickable:true,
	
});

window.onload = function(){
	var myScroll = new IScroll('#detail-scroll',{
//		mouseWheel:true,
//		scrollbars:true
	});
}
