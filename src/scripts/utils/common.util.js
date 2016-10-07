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
    $('#footer').on('tap', 'li', function () {
      location.href = $(this).attr('data-url');
    })
//<<<<<<< HEAD
//=======
<<<<<<< HEAD
// <<<<<<< HEAD
=======
//<<<<<<< HEAD
>>>>>>> master
},
setHeader:function($el,str){
	$el.html(str);
//>>>>>>> fengyuchao
<<<<<<< HEAD
},
// =======

  setHeader:function($el,str){
  	$el.html(str);
//>>>>>>> fengyuchao
  },
// >>>>>>> master
switchPage: function (index) {
  // $('#footer li').eq(index).addClass('active').siblings().removeClass('active');
  $('#footer').on('click', 'li', function () {
    location.href = $(this).attr('data-url');
  })
}
=======
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
>>>>>>> master
};
//

module.exports = common;
//console.log(2)
