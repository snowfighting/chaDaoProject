var common=require('../utils/common.util.js');
var str=require('../tpls/index-class.string');
// var foot=require('../tpls/footer.string');
common.renderBody($('body'),str);
common.switchPage(1);
// common.append($('.container'),foot);
var myScroll=new IScroll('#list-scroll',{
  click:true,
  mouseWheel: true,
  probetype:3
    // scrollbars: true
});
