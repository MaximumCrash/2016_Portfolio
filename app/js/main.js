var pageType = ["portfolio", "about", "lab", "case"];
var portfolioTitles = [];
var startPage = 0;
var portfolioIsMoving = false;
var pm = {};
var previousPage = 0;
var currentPage = 0;
var currentpageType = pageType[startPage];
var handleTemp = Handlebars.templates;

function exitCase() {
  $(".wrapcase > .header").velocity({
    opacity: 0,
    top: 20
  },{
    complete: function() {
      $(".wrapcase > .extra").velocity({
        top:-25,
        opacity:0
      });

      $(".wrapcase > .content").velocity({
        marginTop: 25,
        opacity: 0
      }, {
        complete: function() {
          $(".wrapcase > .trophycase").velocity({
            opacity: 0,
            bottom: 0
          },{
            complete: function () {
              $(".wrapcase > .bottom").velocity({
                opacity:0,
                bottom: 0
              })
            }
          });
        }
      })
    }
  });

  $(".transcircle").velocity({
    opacity: 0
  }, {
    complete: function() {
      $(".transcircle").css({
        width: 0
      })
    }
  })
}

function initCase(to) {
  compileCase(to);
  $(".wrapcase > .header").velocity({
    opacity: 1,
    top: 0
  },{
    complete: function () {
      $(".wrapcase > .extra").velocity({
        top:0,
        opacity:1
      });

      $(".wrapcase > .content").velocity({
        marginTop: 0,
        opacity: 1
      },{
        complete: function () {
          $(".wrapcase > .trophycase").velocity({
            opacity: 1,
            bottom: 32
          },{
            complete: function () {
              $(".wrapcase > .bottom").velocity({
                opacity:1,
                bottom: 25
              })
            }
          });
        }
      })
    }
  });

  $(".wrapcase > .subheader").velocity({
    opacity: 1,
    top: 0
  })

}

function switchCase(to) {
  $(".wrapcasee").css({


    zIndex: 1001
  })
  //animate out
  $(".wrapcase > .header").velocity({
    opacity: 0,
    top: 20
  },{
    complete: function() {
      $(".wrapcase > .extra").velocity({
        top:-25,
        opacity:0
      });

      $(".wrapcase > .content").velocity({
        marginTop: 25,
        opacity: 0
      }, {
        complete: function() {
          $(".wrapcase > .trophycase").velocity({
            opacity: 0,
            bottom: 0
          },{
            complete: function () {
              $(".wrapcase > .bottom").velocity({
                opacity:0,
                bottom: 0
              })
            }
          });
        }
      })
    }
  });

  $(".wrapcase > .subheader").velocity({
    opacity: 0,
    top: 15
  })







  compileCase(to);

  //animate in
  $(".wrapcase>.header").velocity({
    opacity: 1,
    top: 0
  },{
    complete: function () {
      $(".wrapcase > .extra").velocity({
        top:0,
        opacity:1
      });

      $(".wrapcase > .content").velocity({
        marginTop: 0,
        opacity: 1
      },{
        complete: function () {
          $(".wrapcase > .trophycase").velocity({
            opacity: 1,
            bottom: 32
          },{
            complete: function () {
              $(".wrapcase > .bottom").velocity({
                opacity:1,
                bottom: 25
              })
            }
          });
        }
      })
    }
  });

  $(".wrapcase > .subheader").velocity({
    opacity: 1,
    top: 0
  })






}

function compileCase(which) {
  var breakType, breakDistro, nameString,iconString, extraString, trophyString, checkout;
  var portfolio = pm.portfolio[which];
  breakType = portfolio.type.split(" ");
  breakDistro = portfolio.distro.split(",");
  nameString = portfolio.title.replace(/\s/g, '');
  iconString = nameString + "icon.svg";
  extraString = nameString + "extra.svg";

    for (var k = pm.portfolio.length-1; k > -1; k--) {
      if (portfolio.checkout == pm.portfolio[k].title) {
        checkout = k;
        break;
      }
    }



  $(".wrapcase > .header > .gameicon").css({
    background: "url(/images/" + iconString +  ");"
  })




  if (breakType[0] == "mobile") {
    if (breakDistro[0] == "googleplay") {
    $(".wrapcase > extra").addClass("mobile-android");
    }
    else if (breakDistro[0] == "appstore") {
      $(".wrapcase > extra").addClass("mobile-iphone");
    }
  }

  $(".wrapcase > .subheader").attr('class', '.subheader');

  switch (breakType[0]) {
    case "games" : {
      $(".wrapcase > .subheader").addClass("yellow-bg");
      break;
    }
    case "web" : {
      $(".wrapcase > .subheader").addClass("blue-bg");
      break;
    }
    case "mobile" : {
      $(".wrapcase > .subheader").addClass("red-bg");
      break;
    }
    case "desktop" : {
      $(".wrapcase > .subheader").addClass("green-bg-bg");
      break;
    }
    case "music" : {
      $(".wrapcase > .subheader").addClass("purple-bg");
      break;
    }
  }

  if (portfolio.awardwhat != undefined) {

    for (var a =0; a < portfolio.awardwhat.length; a++) {
      trophyString = portfolio.awardwhere[a] + "trophy.svg";

      if (a < 4) {
        $(".wrapcase > .subheader > .trophycase.righty").append("<div class='trophy' style='background:url(/images/"+trophyString+")'></div>")
      }
      else if (a < 8) {
        $(".wrapcase > .subheader > .trophycase.lefty").append("<div class='trophy' style='background:url(/images/"+trophyString+")'></div>")
      }
      else {
        break;
      }

    }
  }

  $('.wrapcase > .subheader > .title').html(portfolio.title);
    $('.wrapcase > .subheader > .subtitle').html(portfolio.text);

    for (var d = 0; d < breakDistro.length; d++) {
      $(".wrapcase > .content > .row").append("<li style='background:url(/images/"+breakDistro[d]+".svg)'></li>")
      if (d == 4) {
        break;
      }
    }
    if (portfolio.role != undefined) {
      $(".wrapcase > .content > p").first().append("<span class='f0'>Role: </span>" + portfolio.role + "<br>")
    }
    if (portfolio.released != undefined) {
      $(".wrapcase > .content > p").first().append("<span class='f0'>Released: </span>" + portfolio.released + "<br>")
    }
    if (portfolio.publisher != undefined) {
      $(".wrapcase > .content > p").first().append("<span class='f0'>Publisher: </span>" + portfolio.publisher + "")
    }

    $(".wrapcase > .content > p").first().append("<br><br>");

    $(".wrapcase .content p:nth-child(3)").html(portfolio.about);

    var checkCount = 0;
    for (var g = 0; g < portfolio.gallery.length; g++) {
      $(".wrapcase > .content > .gallery-col").append("<li class='image' style='background:url(/images/"+nameString+g.toString()+".jpeg)'> </li>");
      if (g == 3) {
        //blurb
        $(".wrapcase > .content > .gallery-col").append("<li class='blurb'> <p class='f1'>"+portfolio.blurb[0]+"</p></li>");
      }

      if (g == 8) {
        //blurb
        $(".wrapcase > .content > .gallery-col").append("<li class='blurb'> <p class='f1'>"+portfolio.blurb[1]+"</p></li>");
      }
      }

      $(".wrapcase > .content > .gallery-col").append("<div class='mylogo'> </div> <p class='f0 closure'>“Made with Love”</p>");

      if (portfolio.checkout != undefined || portfolio.checkout != "") {
        $(".wrapcase > .content > .finalwords > p").html("Want more? Check out <a class='f0' href='#' onclick=switchCase("+checkout+")>"+portfolio.checkout+"</a>")
      }
      else {
        $(".wrapcase > .content > .finalwords > p").html("<a class='f0' href='#' onclick=exitCase()>Back to Work</a>");
      }

    }




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
  $('#portfolio').after($.parseHTML(pm.abouthtml));
}





function switchPage(type, index,pos) {
  switch(type) {
    case 'portfolio': {
      $(".piccover").velocity({
        opacity: 0
      })
      $(".secondary").velocity({
        width: "93px"
      }, {
        complete: function() {

        },
        duration: "fast"
      })
      $(".secondary > ul").velocity({
        opacity: 1,
        paddingLeft:"0"
      }, {
        complete: function() {


        },
        duration: "fast"
      });
      $(".aboutme").velocity({
        top: "15px",
        opacity: 0
      }, {
        duration: "fast",
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
      }, {
        complete: function () {

        },
        duration: "fast"
      });
      $(".secondary > ul").velocity({
        opacity: 0,
        paddingLeft:"50"
      },{
        duration: "fast"
      });
      $(".piccover").velocity({
        opacity: 1
      })

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
      var width = $(".transcircle").width()*.25;
      var height = $(".transcircle").height()*.25;
      $(".transcircle").css({'left':pos[0], 'opacity':0.5});
      $(".transcircle").velocity({

        width: "400%",
        height: "400%",
        margin:"-200%",
        marginTop:"-50%",
        opacity: 1
      },{
        complete: function() {
          initCase(index);
        }
      })
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



$('.frontcover').on('click', function(e) {

  $this = $(this);
  $parent = $this.parent();
  which = $parent.index();
  var properpos = [e.pageX, e.pageY]
  if (!portfolioIsMoving) {
    switchPage(pageType[3],which,properpos);
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

  switchPage(pageType[$this.index()],$this.index(),null);
  console.log($this.index());
})


$portfolio.mousewheel(function (event, delta) {
  this.scrollLeft -= (delta * 50);
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
