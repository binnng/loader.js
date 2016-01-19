!function() {


var $ = window.$;

var noop = function() {};

var dataLoaderTemplate = [
  '<div class=loader-mask>',
  '<div class="loader data-loader"><b></b><b></b><b></b><b></b><b></b><b></b><b></b><b></b></div>',
  '</div>'
].join("");

var elBody = $("body");
var elLoaderMask;
var elLoader;

var dataLoader = function() {
  show();
};

dataLoader.show = show;
dataLoader.hide = hide;
dataLoader.destroy = destroy;

init();

function init() {
  elLoaderMask = $(dataLoaderTemplate);
  elLoader = $(".data-loader", elLoaderMask);
  elLoaderMask.appendTo(elBody);

  "unload pageshow popstate".split(" ").forEach(function(event) {
    elBody[0].addEventListener(event, function() {
      return hide();
    });
  });
}

function show() {
  var top = document.body.scrollTop;
  elLoader.css("top", (top + 200) + "px");
  elLoaderMask.css({
    "display": "block"
  });
}

function hide() {
  elLoaderMask.css("display", "none");
}

function destroy() {
  elLoader.remove();
}


if (typeof module != "undefined" && module.exports) {
  module.exports = dataLoader;
} else {
  window.Loader = dataLoader;
}

}();