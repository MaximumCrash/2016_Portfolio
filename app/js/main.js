var pageType = ["portfolio", "about", "lab", "case"];
var portfolioTitles = [];
var startPage = 0;
var portfolioIsMoving = false;
var pm = {};
var previousPage = 0;
var currentPage = 0;
var currentCase = 0;
var currentpageType = pageType[startPage];
var handleTemp = Handlebars.templates;
var modalOpen = false;

function exitCase() {
  portfolioIsMoving = false;
  $('.wrapcase').animate({
    scrollTop: 0
  });
  $(".wrapcase > .header").velocity({
    opacity: 0,
    top: 20
  }, {
    duration: "fast"
  });

  $(".wrapcase > .content").velocity({
    marginTop: 25,
    opacity: 0
  }, {
    duration: "fast"
  });

  $(".wrapcase > .subheader").velocity({
    opacity: 0,
    top: 25
  }, {
    complete: function() {
      $(".transcircle").velocity({
        opacity: 0
      }, {
        complete: function() {
          $(".wrapcase").css({
            "z-index": "0",
            "opacity": "0"
          });
          $(".transcircle").css({
            "z-index": "1000",
            "width": "0",
            "height": "100%",
            "margin": "-5px"
          });
          $(".wrapcase > .subheader > .trophycase.righty").empty();
          $(".wrapcase > .subheader > .trophycase.lefty").empty();
          $(".wrapcase > .content > .row").empty();
          $(".wrapcase > .content > p").first().empty();
          $(".wrapcase .content p:nth-child(3)").empty();
          $(".wrapcase > .content > .gallery-col").empty();
          $(".wrapcase > .content > .finalwords > p").empty();
        }
      })
    },
    duration: "fast"
  })

  $(".wrapcase > .bottom").velocity({
    opacity: 0,
    bottom: 0
  }, {
    duration: "fast"
  })

  $(".wrapcase > .trophycase").velocity({
    opacity: 0,
    bottom: 0
  }, {
    duration: "fast"
  });

  $("#extraheader").velocity({
    top: "25px",
    opacity: 0
  }, {
    duration: "fast",
    complete: function() {
      $(".header > .modalbg").css({

        "top": "0",
        "left": "0",
        "height": "0",
        "width": "0",
        "position": "fixed",
        "z-index": "0"

      })
    }
  });

  modalOpen = false;
  $(".wrapcase > .bottom").css({
    "z-index": "3"
  })


  $(".extra > .extraimg").attr("class", "extraimg");


  $('#extraheader > .extraimg').remove('iframe')

}

function initCase(to) {
  portfolioIsMoving = false;
  currentCase = to;

  $(".wrapcase").css({

    "opacity": "1",
    "z-index": "1002"
  });

  compileCase(to);



  $(".wrapcase > .header").velocity({
    opacity: 1,
    top: 0
  }, {
    complete: function() {
      $("#extraheader").velocity({
        top: 0,
        opacity: 1
      }, {
        duration: "slow"
      });
      $(".wrapcase > .content").velocity({
        marginTop: 0,
        opacity: 1
      }, {
        complete: function() {
          $(".wrapcase > .trophycase").velocity({
            opacity: 1,
            bottom: 32
          }, {
            complete: function() {

            }
          });

          $(".wrapcase > .bottom").velocity({
            opacity: 1,
            bottom: 15
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
  portfolioIsMoving = false;
  currentCase = to;
  $(".wrapcase").css({


      "z-index": "1001"
    })
    //animate out
  $(".wrapcase > .header").velocity({
    opacity: 0,
    top: 20
  }, {
    duration: "fast"
  });

  $(".wrapcase > .content").velocity({
    marginTop: 25,
    opacity: 0
  }, {
    duration: "fast"
  });

  $(".wrapcase > .subheader").velocity({
    opacity: 0,
    top: 25
  }, {
    complete: function() {
      $('.wrapcase').animate({
        scrollTop: 0
      }, function() {

        $(".wrapcase > .header").velocity({
          opacity: 1,
          top: 0
        }, {
          complete: function() {
            $("#extraheader").velocity({
              top: 0,
              opacity: 1
            }, {
              duration: "slow"
            });
            $(".wrapcase > .content").velocity({
              marginTop: 0,
              opacity: 1
            }, {
              complete: function() {
                $(".wrapcase > .trophycase").velocity({
                  opacity: 1,
                  bottom: 32
                }, {
                  complete: function() {

                  }
                });

                $(".wrapcase > .bottom").velocity({
                  opacity: 1,
                  bottom: 15
                });

              }
            })
          }
        });


        $(".wrapcase > .subheader").velocity({
          opacity: 1,
          top: 0
        })




        $(".wrapcase > .subheader > .trophycase.righty").empty();
        $(".wrapcase > .subheader > .trophycase.lefty").empty();
        $(".wrapcase > .content > .row").empty();
        $(".wrapcase > .content > p").first().empty();
        $(".wrapcase .content p:nth-child(3)").empty();
        $(".wrapcase > .content > .gallery-col").empty();
        $(".wrapcase > .content > .finalwords > p").empty();

        compileCase(to);
        //animate in
      });



    },
    duration: "fast"
  })
  $(".dragattention").velocity({
    opacity: 0
  }, {
    complete: function() {
      $(".dragattention").remove();
    }
  })
  $(".wrapcase > .bottom").velocity({
    opacity: 0,
    bottom: 0
  }, {
    duration: "fast"
  })

  $(".wrapcase > .trophycase").velocity({
    opacity: 0,
    bottom: 0
  }, {
    duration: "fast"
  });

  $("#extraheader").velocity({
    top: "25px",
    opacity: 0
  }, {
    duration: "fast"
  });

  modalOpen = false;
  $(".header > .modalbg").css({

    "top": "0",
    "left": "0",
    "height": "0",
    "width": "0",
    "position": "fixed",
    "z-index": "0"

  })
  $(".wrapcase > .bottom").css({
    "z-index": "3"
  })

  $(".extra > .extraimg").attr("class", "extraimg");

  $('.extra > .extraimg').remove('iframe')

  $('.extra > .extraimg').removeAttr("style");









}


function compileCase(which) {
  var breakType, breakDistro, nameString, iconString, extraString, trophyString, checkout;
  var portfolio = pm.portfolio[which];
  breakType = portfolio.type.split(" ");
  if (portfolio.distro != "" && portfolio.distro != undefined) {
    breakDistro = portfolio.distro.split(",");
  }

  nameString = portfolio.title.replace(/\s/g, '');
  iconString = nameString + "icon.svg";
  extraString = nameString + "extra.svg";

    $("#videoplace > div:nth-child(2)").remove();


  for (var k = pm.portfolio.length - 1; k > -1; k--) {
    if (portfolio.checkout == pm.portfolio[k].title) {
      checkout = k;
      break;
    }
  }



  $(".wrapcase > .header > .gameicon").css({
    background: "url(/images/" + iconString + ");"
  })

  $(".wrapcase > .header").css({
    "background-image": "url(/images/header/" + portfolio.header[0] + ")",
    "background-repeat": portfolio.header[1],
    "background-size": portfolio.header[2],
    "background-position": portfolio.header[3]
  });



  $(".wrapcase > .header > .extra").attr('class', 'extra');
  $(".wrapcase > .subheader").attr('class', 'subheader');
  if (breakType[0] == "mobile") {

    $(".wrapcase > .subheader").attr('class', 'subheader mobile');

    if (breakDistro[0] == "googleplay") {
      $(".wrapcase > .header > .extra").addClass("mobile-android");
      $('#extraheader > .extraimg').velocity({
        opacity: 1
      })
    } else if (breakDistro[0] == "appstore") {
      $(".wrapcase > .header > .extra").addClass("mobile-iphone");
      $('#extraheader > .extraimg').velocity({
        opacity: 1
      })
    }
    if (portfolio.horizontal) {
      $(".wrapcase > .header > .extra").css({
        "transform": "rotate(90deg)",
        "left": "41%"
      });



    }

    console.log(portfolio.frontcover[0])
    $("#extraheader > div").css({
      "background-image": "url(/images/header/" + portfolio.frontcover[0] + ")"
    })




  } else {

    $(".wrapcase > .subheader").attr('class', 'subheader');
    $('#extraheader > .extraimg').velocity({
      opacity: 0
    })
  }


  $('.wrapcase > .subheader > .title').attr('class', "f0 title");
  $('.wrapcase > .subheader > .subtitle').attr('class', "f1 subtitle");


  switch (breakType[0]) {
    case "games":
      {
        $('.wrapcase > .subheader > .title').addClass("black");
        $('.wrapcase > .subheader > .subtitle').addClass("black");
        $(".wrapcase > .subheader").addClass("yellow-bg");
        break;
      }
    case "web":
      {
        $('.wrapcase > .subheader > .title').addClass("white");
        $('.wrapcase > .subheader > .subtitle').addClass("white");
        $(".wrapcase > .subheader").addClass("blue-bg");
        break;
      }
    case "mobile":
      {
        $('.wrapcase > .subheader > .title').addClass("white");
        $('.wrapcase > .subheader > .subtitle').addClass("white");
        $(".wrapcase > .subheader").addClass("red-bg");
        break;
      }
    case "design":
      {
        $('.wrapcase > .subheader > .title').addClass("white");
        $('.wrapcase > .subheader > .subtitle').addClass("white");
        $(".wrapcase > .subheader").addClass("green-bg");
        break;
      }
    case "music":
      {
        $('.wrapcase > .subheader > .title').addClass("white");
        $('.wrapcase > .subheader > .subtitle').addClass("white");
        $(".wrapcase > .subheader").addClass("purple-bg");
        break;
      }
  }


  if (portfolio.awardwhat != undefined) {

    for (var a = 0; a < portfolio.awardwhat.length; a++) {
      trophyString = portfolio.awardwhere[a].replace(/\s/g, '').toLowerCase() + "trophy.svg";

      if (a < 4) {
        $(".wrapcase > .subheader > .trophycase.righty").append("<div class='trophy' style='background-image:url(/images/" + trophyString + ")'></div>")
      } else if (a < 8) {
        $(".wrapcase > .subheader > .trophycase.lefty").append("<div class='trophy' style='background-image:url(/images/" + trophyString + ")'></div>")
      } else {
        break;
      }

    }
  }

  $('.wrapcase > .subheader > .title').html(portfolio.title);
  $('.wrapcase > .subheader > .subtitle').html(portfolio.text);

  if (portfolio.distro != "" && portfolio.distro != undefined) {
    $(".wrapcase > .content > .row").css({
      "height": "106px"
    })
    for (var d = 0; d < breakDistro.length; d++) {
      $(".wrapcase > .content > .row").append("<li style='background:url(/images/" + breakDistro[d] + "badge.svg)' onclick=gotoSite(" + d.toString() + ")></li>")
      if (d == 4) {
        break;
      }
    }
  } else {
    $(".wrapcase > .content > .row").css({
      "height": "30px"
    })
  }

  if (portfolio.role != undefined && portfolio.role != "") {
    $(".wrapcase > .content > p").first().append("<span class='f0'>Role: </span>" + portfolio.role + "<br>")
  }
  if (portfolio.released != undefined && portfolio.released != "") {
    $(".wrapcase > .content > p").first().append("<span class='f0'>Released: </span>" + portfolio.released + "<br>")
  }
  if (portfolio.publisher != undefined && portfolio.publisher != "") {
    $(".wrapcase > .content > p").first().append("<span class='f0'>Publisher: </span>" + portfolio.publisher + "")
  }



  $(".wrapcase .content p:nth-child(3)").html(portfolio.about);

  var checkCount = 0;
  $("iframe").remove();
  if (pm.portfolio[which].bandcamp != undefined && pm.portfolio[which].bandcamp != "") {
    $(".wrapcase > .content > .gallery-col").before($.parseHTML(pm.portfolio[which].bandcamp));
  }
  if (portfolio.gallery.length != 0) {
    for (var g = 0; g < portfolio.gallery.length; g++) {
      $(".wrapcase > .content > .gallery-col").append("<li class='image' style='background:url(/images/" + nameString + g.toString() + ".jpeg)'> </li>");
      if (g == 3) {
        //blurb
        $(".wrapcase > .content > .gallery-col").append("<li class='blurb'> <p class='f1'>" + portfolio.blurb[0] + "</p></li>");
      }

      if (g == 8) {
        //blurb
        $(".wrapcase > .content > .gallery-col").append("<li class='blurb'> <p class='f1'>" + portfolio.blurb[1] + "</p></li>");
      }
    }
  }
  $(".wrapcase > .content > .gallery-col").append("<div class='mylogo'> </div> <p class='f0 closure'>“Made with Love”</p>");

  if (portfolio.checkout != undefined && portfolio.checkout != "") {
    $(".wrapcase > .content > .finalwords > p").html("Want more? Check out <a class='f0' href='#' onclick=switchCase(" + checkout + ")>" + portfolio.checkout + "</a>")
  } else {
    $(".wrapcase > .content > .finalwords > p").html("<a class='f0' href='#' onclick=exitCase()>Back to Work</a>");
  }

  if (portfolio.youtube != "" && portfolio.youtube != undefined) {
    $(".extraimg > .icon").css({
      opacity: 1
    });
    $("#videoplace").append($.parseHTML(portfolio.youtube));
    $("#videoplace").fitVids();
  } else {
    $(".extraimg > .icon").css({
      opacity: 0
    })
  }

  if ($("#extraheader").hasClass('mobile-iphone') || $("#extraheader").hasClass('mobile-android')) {


    $(".extra > .extraimg").css({
      width: "78%",
      height: "78%",
      translateY: "-50%",
      translateX: "-50%",
      marginLeft: "0"
    })


  } else {
    $('#extraheader > .extraimg').velocity({
      opacity: 0
    })
  }


}




function pushPortfolio(template, which) {
  $("#portfolio").append(template);
}

function compilePortfolio() {

  var template = {};
  var breakType = "";

  for (var k = pm.portfolio.length - 1; k > -1; k--) {
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
      case "games":
        {
          template.backupColor = "yellow-bg";
          break;
        }
      case "web":
        {
          template.backupColor = "blue-bg";
          break;
        }
      case "mobile":
        {
          template.backupColor = "red-bg";
          break;
        }
      case "design":
        {
          template.backupColor = "green-bg";
          break;
        }
      case "music":
        {
          template.backupColor = "purple-bg";
          break;
        }
    }

    if (breakType.length < 4) {
      template.identify = breakType[0];
    } else {
      template.identify = "archive";
    }

    if (pm.portfolio[k].frontcover[0] != undefined && pm.portfolio[k].frontcover[0] != "") {
      template.bg = "url(/images/header/" + pm.portfolio[k].frontcover[0] + ");";
      template.bgrepeat = pm.portfolio[k].frontcover[1];
      template.bgsize = pm.portfolio[k].frontcover[2];
      template.bgpos = pm.portfolio[k].frontcover[3];
    }


    pushPortfolio(handleTemp.portfolio(template), $portfolio);
  }


}

function pushAbout() {
  $('#portfolio').after($.parseHTML(pm.abouthtml));
}





function switchPage(type, index, pos) {
  $(".dragattention").velocity({
    opacity: 0
  }, {
    complete: function() {
      $(".dragattention").remove();
    }
  })

  switch (type) {
    case 'portfolio':
      {
        $('#portfolio').css({
          "overflow-x": "auto"
        })
        $('#portfolio > .wraplab').css({
          "z-index": "0"
        });
        $('#portfolio > .wraplab').velocity({
          opacity: 0
        });
        $('#portfolio > .wraplab > .labhead > p:nth-child(1)').velocity({
          opacity: 0
        });
        $('#portfolio > .wraplab > .labhead > p:nth-child(2)').velocity({
          opacity: 0
        });
        $('#portfolio > .wraplab > .labhead > p:nth-child(3)').velocity({
          opacity: 0
        });
        $('#portfolio > .wraplab > .labhead > p:nth-child(4)').velocity({
          opacity: 0
        });

        $('#portfolio > .wraplab > .gridbg').velocity({
          opacity: 0
        });

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
          paddingLeft: "0"
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
            $("#portfolio").css({
              display: "block"
            });
            $("#portfolio").velocity({
              opacity: 1
            });
            $(".collumn").velocity({
              marginTop: "0px",
              opacity: 1
            })
          }
        })
        break;
      }
    case 'about':
      {
        $(".secondary").velocity({
          width: "300px"
        }, {
          complete: function() {

          },
          duration: "fast"
        });
        $(".secondary > ul").velocity({
          opacity: 0,
          paddingLeft: "50"
        }, {
          duration: "fast"
        });
        $(".piccover").velocity({
          opacity: 1
        })

        $("#portfolio").velocity({
          opacity: 0
        }, {
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
    case 'lab':
      {
        $('#portfolio').animate({
          scrollLeft: 0
        });
        $(".aboutme").velocity({
          top: "15px",
          opacity: 0
        }, {
          duration: "fast"
        });
        $("#portfolio").css({
          display: "block"
        });
        $("#portfolio").velocity({
          opacity: 1
        })
        $(".secondary").velocity({
          width: "0px"
        }, {
          duration: "fast"
        });
        $(".secondary > ul").velocity({
          opacity: 0,
          paddingLeft: "-50"
        }, {
          duration: "fast"
        });
        $(".piccover").velocity({
          opacity: 0
        });
        $(".aboutme").velocity({
          top: "15px",
          opacity: 0
        }, {
          duration: "fast"
        });

        if (pageType[previousPage] == pageType[1]) {
          $(".collumn").css({
            opacity: 0
          })

          $('#portfolio').css({
            "overflow-x": "hidden"
          })
          $('#portfolio > .wraplab').css({
            "z-index": "1200"
          });
          $('#portfolio > .wraplab').velocity({
            opacity: 1
          });
          $('#portfolio > .wraplab > .labhead > p:nth-child(1)').velocity({
            opacity: 1,
            top: 0
          }, {
            complete: function() {
              $('#portfolio > .wraplab > .labhead > p:nth-child(2)').velocity({
                opacity: 1,
                top: 0
              }, {
                complete: function() {
                  $('#portfolio > .wraplab > .labhead > p:nth-child(3)').velocity({
                    opacity: 1,
                    top: 0
                  }, {
                    complete: function() {
                      $('#portfolio > .wraplab > .labhead > p:nth-child(4)').velocity({
                        opacity: 1,
                        top: 0
                      }, {
                        complete: function() {
                          $('#portfolio > .wraplab > .grid').velocity({
                            opacity: 1,
                            top: 0
                          });
                        }
                      });
                    }
                  });
                }
              });
            }
          });

          $('#portfolio > .wraplab > .gridbg').velocity({
            opacity: 0.2
          });


        } else {
          $(".collumn").velocity({
            marginTop: '-20px',
            opacity: 0

          }, {
            complete: function() {

              $('#portfolio').css({
                "overflow-x": "hidden"
              })
              $('#portfolio > .wraplab').css({
                "z-index": "1200"
              });
              $('#portfolio > .wraplab').velocity({
                opacity: 1
              });
              $('#portfolio > .wraplab > .labhead > p:nth-child(1)').velocity({
                opacity: 1,
                top: 0
              }, {
                complete: function() {
                  $('#portfolio > .wraplab > .labhead > p:nth-child(2)').velocity({
                    opacity: 1,
                    top: 0
                  }, {
                    complete: function() {
                      $('#portfolio > .wraplab > .labhead > p:nth-child(3)').velocity({
                        opacity: 1,
                        top: 0
                      }, {
                        complete: function() {
                          $('#portfolio > .wraplab > .labhead > p:nth-child(4)').velocity({
                            opacity: 1,
                            top: 0
                          }, {
                            complete: function() {
                              $('#portfolio > .wraplab > .grid').velocity({
                                opacity: 1,
                                top: 0
                              });
                            }
                          });
                        }
                      });
                    }
                  });
                }
              });

              $('#portfolio > .wraplab > .gridbg').velocity({
                opacity: 0.2
              });



            }
          })
        }



        break;
      }
    case 'case':
      {
        $(".transcircle").css({
          'left': pos[0],
          'opacity': 1
        });
        $(".transcircle").velocity({

          width: "400%",
          height: "400%",
          margin: "-200%",
          marginTop: "-50%",
          opacity: 1
        }, {
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
    filterTarget: function(target, e) {
      $target = $(target);
      return $target.hasClass('frontcover');
    },
    moved: function() {
      portfolioIsMoving = true;


    },
    stopped: function() {
      portfolioIsMoving = false;
    }
  });

  $(".wraplab").kinetic({
    cursor: "grab",
    x: false,

    moved: function() {
      //portfolioIsMoving =true;
    },
    stopped: function() {
      // portfolioIsMoving = false;
    }
  });

  if (portfolioIsMoving) {
    $(".dragattention").velocity({
      opacity: 0
    }, {
      complete: function() {
        $(".dragattention").remove();
      }
    })
  }


  $('.frontcover').on('click', function(e) {

    $this = $(this);
    $parent = $this.parent();

    which = (pm.portfolio.length) - ($parent.index());
    var properpos = [e.pageX, e.pageY]
    if (!portfolioIsMoving) {
      switchPage(pageType[3], which, properpos);
    }
    $(".dragattention").velocity({
      opacity: 0
    }, {
      complete: function() {
        $(".dragattention").remove();
      }
    })

  });

  $('.main > div > a').on('click', function() {
    $mainLinks.siblings().removeClass().addClass("inactive");
    $mainLinks.first().removeClass("inactive").addClass("active");
    $mainLinks.first().addClass("blue");
    switchPage(pageType[0], 0, null);
  });

  $mainLinks.on('click', function() {
    $this = $(this);
    var parent = $this.parent();
    previousPage = currentPage;
    currentPage = $this.index();
    var actual = $this.index() + 1;

    $this.siblings().removeClass().addClass("inactive");

    $this.removeClass("inactive").addClass("active");

    switch ($this.index()) {
      case 0:
        {
          $this.addClass("blue")
          break;
        }
      case 1:
        {
          $this.addClass("yellow")
          break;
        }
      case 2:
        {
          $this.addClass("red")
          break;
        }
    }

    switchPage(pageType[$this.index()], $this.index(), null);
    console.log($this.index());
  })


  $portfolio.mousewheel(function(event, delta) {
    clearTimeout($.data(this, 'scrollTimer'));
    portfolioIsMoving = true;
    $.data(this, 'scrollTimer', setTimeout(function() {
      // do something
      portfolioIsMoving = false;
      console.log("Haven't scrolled in 250ms!");
    }, 200));
    if (pageType[currentPage] != "lab") {
      this.scrollLeft -= (delta * 50);
    }
    console.log(portfolioIsMoving)

    event.preventDefault();
  });

  $('.wraplab').mousewheel(function(event, delta) {
    this.scrollTop += (delta * 50);
    event.preventDefault();
  })

  $('.grid').masonry({
    // options
    itemSelector: '.grid-item',
    columnWidth: 200,
    gutter: 20
  });

}


$(window).bind('load', function() {


});

function loadLab() {
  var $items = getItems();
  $('.grid').masonryImagesReveal($items);
}

$.fn.masonryImagesReveal = function($items) {
  var msnry = this.data('masonry');
  var itemSelector = msnry.options.itemSelector;

  $items.hide();

  this.append($items);
  $items.imagesLoaded().progress(function(imgLoad, image) {
    var $item = $(image.img).parents(itemSelector);
    $item.show();
    msnry.appended($item);
  });
  return this;
}

function getItem(index) {
  var item = '<div class="grid-item ' + pm.lab[index].type + '">' +
    '<img src="/images/lab' + pm.lab[index].title + '.' + pm.lab[index].imagetype + '" /></div>';
  return item;
}

function getItems() {
  var items = '';
  for (var i = 0; i < pm.lab.length; i++) {
    items += getItem(i);
  }

  return $(items);
}

var $mainLinks = $('.main > .container > .links > li');


var $portfolio = $('#portfolio');

$('.wrapcase > .bottom > .righty').on('click', function() {
  if (currentCase > 0) {
    currentCase--;
  } else {
    currentCase = pm.portfolio.length - 1;
  }
  console.log(currentCase)
  switchCase(currentCase);
});

$('.wrapcase > .bottom > .lefty').on('click', function() {
  if (currentCase < pm.portfolio.length - 1) {
    currentCase++;
  } else {
    currentCase = 0;
  }
  console.log(currentCase)
  switchCase(currentCase);
});

$(document).ready(function() {

});

$("#extraheader > .extraimg > .icon").on("click", function() {
  if (!modalOpen) {
    $(".wrapcase > .modalbg").css({
      "height": "100%",
      "width": "100%"
    });

    $("#videoplace").css({
      "width": "80%",
      "height" : "64%"
    })

    $(".wrapcase > .modalbg").velocity({
      opacity: 0.7
    });
    $("#videoplace").velocity({
      opacity: 1,
      top: "50%"
    });
    modalOpen = true;
  }
});

$(".wrapcase > .modalbg").on("click", function() {

  if (modalOpen) {
    $(".wrapcase > .modalbg").velocity({
      opacity: 0
    },{
      complete: function () {
        $(".wrapcase > .modalbg").css({
          "height": "0",
          "width": "0"
        });
      }
    });
    $("#videoplace").velocity({
      opacity: 0,
      top: "51%"
    }, {
      complete: function() {
        $("#videoplace").css({
          "width": "0",
          "height" : "0"
        })
      }
    });
    modalOpen = false;
  }

});


$("#videoplace > .closeme.icon").on("click", function () {

  if (modalOpen) {
  $(".wrapcase > .modalbg").velocity({
    opacity: 0
  },{
    duration: "fast",
    complete: function () {
      $(".wrapcase > .modalbg").css({
        "height": "0",
        "width": "0"
      });
    }
  });
  $("#videoplace").velocity({
    opacity: 0,
    top: "51%"
  }, {
    duration: "fast",
    complete: function() {
      $("#videoplace").css({
        "width": "0",
        "height" : "0"
      })
    }
  });
  modalOpen = false;
}
})


$(".wrapcase > .header > .nav > .backarr").on("click", function() {
  portfolioIsMoving = false;
  exitCase();
})


$('.wrapcase').on('scroll', function() {
  if ($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight - 40) {
    $(".bottom a").removeClass("black").addClass("white");
  } else {
    $(".bottom a").removeClass("white").addClass("black");
  }
})

$('body').on('click', function(e) {

  console.log(e.target);
});


function gotoSite(whichlink) {
  var breakDistro = pm.portfolio[currentCase].distro.split(",");

  if (breakDistro[whichlink] == "music") {
    $('.wrapcase').animate({
      scrollTop: $("iframe").offset().top
    });
  } else {
    window.open(pm.portfolio[currentCase].links[whichlink], "_blank");
  }



}

//$("#videoplace").fitVids();
