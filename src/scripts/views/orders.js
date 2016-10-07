var common = require('../utils/common.util.js');

var footer=require('../tpls/footer.string');
var header=require('../tpls/header.string');
var body=require('../tpls/orders.string');
var comlist=require('../tpls/comlist.string');

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
