var common = {
renderBody: function ($el, str) {
    $el.prepend(str);
},
inner: function ($el, str) {
    $el.html(str);
},
append: function ($el, str) {
    $el.append(str);
},
switchPage: function (index) {
    $('#footer').on('click', 'li', function () {
      location.href = $(this).attr('data-url');
    })
//<<<<<<< HEAD
//=======
//<<<<<<< HEAD
},
setHeader:function($el,str){
	$el.html(str);
//>>>>>>> fengyuchao
//<<<<<<< HEAD
//}
//=======
},
  setHeader:function($el,str){
  	$el.html(str);
//>>>>>>> fengyuchao
//}
//>>>>>>> master
//=======
}

//>>>>>>> songxuejiao
};
//
module.exports = common;
//console.log(2)