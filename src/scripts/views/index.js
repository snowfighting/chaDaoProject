var common=require('../utils/common.util.js');
var str = require('../tpls/index.string');
var footer=require('../tpls/footer.string');
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
