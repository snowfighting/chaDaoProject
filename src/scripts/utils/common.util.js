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
<<<<<<< HEAD
=======
  },
  setHeader:function($el,str){
  	$el.html(str);
>>>>>>> fengyuchao
  }
};

module.exports = common;
