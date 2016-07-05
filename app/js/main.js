var pageType = ["portfolio", "about", "case"];


$(window).bind('load', function() {

});


var $portfolio = $('#portfolio');

/*
$portfolio.flickity({
  cellAlign:'left',
  contain: true,
  freeScroll: true,
  prevNextButtons: false,
pageDots: false,
imagesLoaded: true
})*/

var element = document.getElementById('portfolio');
var $filterOptions = $('.secondary > ul > li')


$(document).ready(function () {

  $portfolio.kinetic({
    y: false
  })
  /*
  window.mySwipe = new Swipe(element, {
  startSlide: 0,
  speed: 400,
  auto: 0,
  continuous: false,
  disableScroll: true,
  stopPropagation: false,
  callback: function(index, elem) {},
  transitionEnd: function(index, elem) {}
});*/
$portfolio.mixItUp();

})
