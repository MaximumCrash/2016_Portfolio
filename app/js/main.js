var pageType = ["portfolio", "about", "case"];


$(window).bind('load', function() {

});

$(document).ready(function () {

})

var $portfolio = $('#portfolio');

var element = document.getElementById('portfolio');
window.mySwipe = new Swipe(element, {
  startSlide: 0,
  auto: 3000,
  draggable: true,
  autoRestart: false,
  continuous: false,
  disableScroll: true,
  stopPropagation: true,
  callback: function(index, element) {},
  transitionEnd: function(index, element) {}
});
