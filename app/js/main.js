var pageType = ["portfolio", "about", "case"];


$(window).bind('load', function() {

});

$(document).ready(function () {

})

var $portfolio = $('#portfolio');


$portfolio.flickity({
  cellAlign:'left',
  contain: true,
  freeScroll: true,
  prevNextButtons: false,
pageDots: false,
imagesLoaded: true
})
