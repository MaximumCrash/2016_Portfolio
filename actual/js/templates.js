(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['portfolio'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "  <div class=\"award\"><div class=\"icon\"></div><p class=\"tiny f1\">"
    + alias4(((helper = (helper = helpers.awardwhere || (depth0 != null ? depth0.awardwhere : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"awardwhere","hash":{},"data":data}) : helper)))
    + " <br> "
    + alias4(((helper = (helper = helpers.awardwhat || (depth0 != null ? depth0.awardwhat : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"awardwhat","hash":{},"data":data}) : helper)))
    + "</p></div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"collumn "
    + alias4(((helper = (helper = helpers.backupColor || (depth0 != null ? depth0.backupColor : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"backupColor","hash":{},"data":data}) : helper)))
    + " white carousel-cell mix "
    + alias4(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"type","hash":{},"data":data}) : helper)))
    + "\" style=\"background-image:"
    + alias4(((helper = (helper = helpers.bg || (depth0 != null ? depth0.bg : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"bg","hash":{},"data":data}) : helper)))
    + "; background-repeat:"
    + alias4(((helper = (helper = helpers.bgrepeat || (depth0 != null ? depth0.bgrepeat : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"bgrepeat","hash":{},"data":data}) : helper)))
    + "; background-size:"
    + alias4(((helper = (helper = helpers.bgsize || (depth0 != null ? depth0.bgsize : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"bgsize","hash":{},"data":data}) : helper)))
    + "; background-position:"
    + alias4(((helper = (helper = helpers.bgpos || (depth0 != null ? depth0.bgpos : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"bgpos","hash":{},"data":data}) : helper)))
    + ";\" >\r\n  <div class=\"frontcover\"> </div>\r\n  <div class=\"backcover\"> </div>\r\n  <div class=\"topslack\">\r\n    <p class=\"f0 title\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</p>\r\n    <span class=\"f1 date\">"
    + alias4(((helper = (helper = helpers.date || (depth0 != null ? depth0.date : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date","hash":{},"data":data}) : helper)))
    + "</span>\r\n    <p class=\"f1 text\">"
    + alias4(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data}) : helper)))
    + "</p>\r\n  </div>\r\n  <div class=\"identifier\" style=\"background-image:url('images/identify/"
    + alias4(((helper = (helper = helpers.identify || (depth0 != null ? depth0.identify : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"identify","hash":{},"data":data}) : helper)))
    + ".svg')\"> </div>\r\n\r\n\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.awardwhere : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>\r\n";
},"useData":true});
})();