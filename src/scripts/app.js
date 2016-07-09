var patternApp = {};

//show the download modal when the download button is clicked
patternApp.openDownload = function() {
  console.log("test");
  $(".modal--download__background").fadeIn();
};

patternApp.init = function() {
  $(".button--download").on("click", function() {
    console.log("test1");
    patternApp.openDownload();
  });
};

$(function() {
  patternApp.init();
});