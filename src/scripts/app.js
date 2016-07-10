var patternApp = {};

//expand the background when the expand button is clicked
patternApp.expand = function(expandButton) {
  $(expandButton).closest("section").toggleClass("section--expanded");
  $(expandButton).closest(".area__info").toggleClass("area__info--expanded");
};

//variant on the expand code above:
// var backgroundPattern = $(expandButton).closest("section").css("background");
// $(expandButton).closest(".area__info").toggleClass("higher-z");
// $(".modal--expanded-view").toggleClass("visible");
// $(".modal--expanded-view--inner").css("background",backgroundPattern);

//show the detailed image when the magnify button is clicked
patternApp.magnify = function(magnifyTarget) {
  $(".modal--magnify__background").fadeIn();
  var magnifiedImage = `${magnifyTarget.zoom}`;
  var magnifiedImageAlt = `${magnifyTarget.alt}`;
  $(".modal--magnify__card img").attr({
    src : magnifiedImage,
    alt : magnifiedImageAlt
  });
};

patternApp.closeMagnify = function() {
  $(".modal--magnify__background").fadeOut();
};

//show the download modal when the download button is clicked
patternApp.openDownload = function() {
  $(".modal--download__background").fadeIn();
};

//close the download when the user clicks exit
patternApp.closeDownload = function() {
  $(".modal--download__background").fadeOut();
};

patternApp.init = function() {

  //click to open the download modal
  $(".button--download").on("click", function() {
    patternApp.openDownload();
  });

  //click 'back' to close the download modal
  $(".modal__button--back").on("click", function() {
    patternApp.closeDownload();
  });

  //click to show the zoomed-in view
  $(".icon--zoom").on("click", function() {
    var magnifyData = $(this).data();
    patternApp.magnify(magnifyData);
  });

  //click to close the zoomed-in view
  $(".modal--magnify__card .button--close").on("click", function() {
    patternApp.closeMagnify();
  });

  //click to expand the pattern
  $(".icon--expand").on("click",function() {
    patternApp.expand(this);
  });


};

$(function() {
  patternApp.init();
});