var pageType = ["portfolio", "about", "lab", "case"];
var startPage = 0;
var portfolioIsMoving = false;
var pm = {};
var previousPage = 0;
var currentPage = 0;
var currentpageType = pageType[startPage];
var handleTemp = Handlebars.templates;


function pushPortfolio(template, which) {
  $("#portfolio").append(template);
}
function compilePortfolio() {

  var template = {};
  var breakType = "";

  for (var k = pm.portfolio.length-1; k > -1; k--) {
    console.log(k)
      template = {
        type: pm.portfolio[k].type,
        title: pm.portfolio[k].title,
        date: pm.portfolio[k].date,
        text: pm.portfolio[k].text,
        awardwhere: pm.portfolio[k].awardwhere,
        awardwhat: pm.portfolio[k].awardwhat
      }

      breakType = pm.portfolio[k].type.split(" ");


      switch (breakType[0]) {
        case "games" : {
          template.backupColor = "yellow-bg";
          break;
        }
        case "web" : {
          template.backupColor = "blue-bg";
          break;
        }
        case "mobile" : {
          template.backupColor = "red-bg";
          break;
        }
        case "desktop" : {
          template.backupColor = "green-bg";
          break;
        }
        case "music" : {
          template.backupColor = "purple-bg";
          break;
        }
      }

      pushPortfolio(handleTemp.portfolio(template), $portfolio);
  }


}

function pushAbout() {
  //$('#portfolio').after($.parseHTML(pm.abouthtml));
}





function switchPage(type, index) {
  switch(type) {
    case 'portfolio': {
      $(".secondary").velocity({
        width: "93px"
      }, {
        complete: function() {

        }
      })
      $(".secondary > ul").velocity({
        opacity: 1,
        paddingLeft:"0"
      }, {
        complete: function() {


        }
      });
      $(".aboutme").velocity({
        top: "15px",
        opacity: 0
      }, {
        complete: function() {
          $("#portfolio").css({display:"block"});
          $("#portfolio").velocity({
            opacity: 1
          });
          $(".collumn").velocity({
            marginTop: "0px"
          })
        }
      })
      break;
    }
    case 'about': {
      $(".secondary").velocity({
        width: "300px"
      })
      $(".secondary > ul").velocity({
        opacity: 0,
        paddingLeft:"50"
      }, {
        complete: function() {

        },
        duration: "fast"
      });
      $("#portfolio").velocity({
        opacity: 0
      },{
        complete: function() {
          $("#portfolio").css({
            display: "none"
          })
          $(".aboutme").velocity({
            top: "0px",
            opacity: 1
          })

        },
        duration: "fast"
      });
      $(".collumn").velocity({
        marginTop: '-20px'

      })
      break;
    }
    case 'lab': {
      break;
    }
    case 'case': {
      break;
    }

   }
};


$.getJSON("js/ajax/data.json", function(result) {
  pm = result;
  console.log(pm)
  doneLoading();



})

function doneLoading() {
  compilePortfolio();
  pushAbout();
  $portfolio.mixItUp();
  $portfolio.kinetic({
    cursor: "grab",
    y: false,
    filterTarget: function(target, e){
      $target = $(target);
         return $target.hasClass('frontcover');
       },
       moved: function() {
         portfolioIsMoving =true;
       },
       stopped: function() {
         portfolioIsMoving = false;
       }
});



$('.frontcover').on('click', function() {

  $this = $(this);
  $parent = $this.parent();
  which = $parent.index();
  if (!portfolioIsMoving) {
    console.log(which)
  }

});

$mainLinks.on('click', function () {
  $this = $(this);
  var parent = $this.parent();
    previousPage = currentPage;
    currentPage = $this.index();
    var actual = $this.index() + 1;

    $this.siblings().removeClass().addClass("inactive");

    $this.removeClass("inactive").addClass("active");

    switch($this.index()){
      case 0: {
        $this.addClass("blue")
        break;
      }
      case 1: {
        $this.addClass("yellow")
        break;
      }
      case 2: {
        $this.addClass("red")
        break;
      }
    }

  switchPage(pageType[$this.index()],$this.index());
  console.log($this.index());
})


$portfolio.mousewheel(function (event, delta) {
  this.scrollLeft -= (delta * 10);
  event.preventDefault();
});
}


$(window).bind('load', function() {


});

var $mainLinks = $('.main > .container > .links > li');


var $portfolio = $('#portfolio');

$(document).ready(function () {
  console.log($("#portfolio"));

});
