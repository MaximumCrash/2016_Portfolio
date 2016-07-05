var pageType = ["portfolio", "about", "case"];


$(window).bind('load', function() {

});


var $portfolio = $('#portfolio');


$portfolio.flickity({
  cellAlign:'left',
  contain: true,
  freeScroll: true,
  prevNextButtons: false,
pageDots: false,
imagesLoaded: true
})

var Shuffle = window.shuffle;
var element = document.getElementById('portfolio');
var $filterOptions = $('.secondary > ul > li')


$(document).ready(function () {
  var shuffle = new Shuffle(element, {
    itemSelector: '.carousel-cell'
  })

  $filterOptions.children().on('click', function () {


    $this = $(this);

    if (!$this.hasClass('active')){
    console.log($this)
    var sort = $this.attr('data-sort'),
        opts = {};
        console.log(sort)
        if (sort === 'games') {
          opts = {
            by: function($el) {
              return el.data('games')
            }
          }
        }
          for (var k =0; k < $filterOptions.children().length; k++) {
            var which = $filterOptions.children()[k];
            var $which = $(which);
            if ($which.hasClass('active')) {
              $which.removeClass('active').addClass('inactive');
              break;
            }
          }

          $this.removeClass('inactive').addClass('active');
        shuffle.sort( opts);
      }
  })
  var setupFilters = function () {
    var $btns = $filterOptions.children();
    $btns.on('click', function () {
      console.log("Hello")
      var $this = $(this),
      isActive = $this.hasClass('active'),
      group =isActive ? 'all' : $this.data('group');

      if (!isActive) {
        $('.secondary > ul >li > .active').removeClass('active');
      }
        $this.toggleClass('active');

        $('#portfolio').shuffle('shuffle', group);

    });
    $btns = null;
  }
})
