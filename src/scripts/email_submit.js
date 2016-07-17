"use strict";
var message = "";

$(".button--signup").on("click", function() {
    message = $("#form--contact").serialize();
    $.ajax({
        url: "//formspree.io/peter@cameroncodes.com",
        method: "POST",
        data: {message: message},
        dataType: "json"
    });
    alert('Thanks for the email, we\'ll be in touch promptly.');
    return false;
  });
