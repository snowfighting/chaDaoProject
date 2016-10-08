var common = require('../utils/common.util.js');

var footer=require('../tpls/footer.string');
var body=require('../tpls/person.string');


common.renderBody($('body'),body);
common.append($('.container'),footer);
common.switchPage(3);

window.onload=function(){
	$(".orders-title").on("click",function(){
		window.location.href="orders.html";
	});
	
	var mUrl = document.URL;
	var  paramAll =mUrl.split('?')[1];
	var paramValue= mUrl.split("=")[1];
	console.log(mUrl);
	$("#username").text(paramValue);
	
	$(".container").on("touchmove",function(event){
		var touch = event.touches[0];
	});
	
	
}

