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

patternApp.openThanks = function() {
  $(".modal--thanks__background").fadeIn();
};

patternApp.closeThanks = function() {
  $(".modal--thanks__background").fadeOut();
}

//show the download modal when the download button is clicked
// patternApp.openDownload = function() {
//   $(".modal--download__background").fadeIn();
// };

//close the download when the user clicks exit
// patternApp.closeDownload = function() {
//   $(".modal--download__background").fadeOut();
// };

// patternApp.downloadReady = function(patternDownload) {
//   var imgSmall = $(patternDownload).closest(".pattern").data("small");
//   var imgLarge = $(patternDownload).closest(".pattern").data("large");
//   var smallTile = "<li><a href='" + imgSmall + "' download='small_tile.png'><div class='download--small'></div><img src='" + imgSmall + "'/></li>";
//   var largeTile = "<input type='checkbox' name='large'><li><a href='" + imgLarge + "' download='large_tile.png'><img src='" + imgLarge + "'/></a></li>"
//  $(".modal__tiles").append(smallTile).append(largeTile);
// };

// patternApp.downloadTiles = function(){
//   var $smallCheck = $("input:checkbox[name='small']");
//   var $largeCheck = $("input:checkbox[name='large']");
//   if($smallCheck.is(":checked")){
//     $smallCheck.siblings("a").click();
//   };
//   if($largeCheck.is(":checked")){
//     $largeCheck.siblings("a").click();
//   };
// };

patternApp.download = function(patternDownload){
   var imgSmall = $(patternDownload).closest(".pattern").data("small");
}

patternApp.init = function() {

  //click to open the download modal
  $(".button--download").on("click", function() {
    // patternApp.openDownload();
    // patternApp.downloadReady(this);
    patternApp.download(this);
    patternApp.openThanks();
  });

  //click 'back' to close the download modal
  $(".modal__button--back").on("click", function() {
    // patternApp.closeDownload();
    patternApp.closeThanks();
  });

   //click 'get tiles' to download the tiles and close the modal
  // $(".modal__button--download").on("click", function() {
  //   patternApp.downloadTiles();
  //   patternApp.closeDownload();
  // });

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