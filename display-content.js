$(document).ready(function () {
  $("#linkHome").click(function (event) {
    $(".subcontent#mHome").fadeIn().show();
    $("#linkHome").css({
      color: "azure",
      "text-decoration": "none",
      "text-shadow": "2px 2px 3px black,-2px -2px 6px grey",
    });
    $("#linkAbout").css({
      "text-decoration": "none",
      color: "darkslateblue",
      "text-shadow": "1px 1px 1px grey",
    });
    $("#linkCont").css({
      "text-decoration": "none",
      color: "darkslateblue",
      "text-shadow": "1px 1px 1px grey",
    });
    $("#linkGall").css({
      "text-decoration": "none",
      color: "darkslateblue",
      "text-shadow": "1px 1px 1px grey",
    });
    $(".subcontent#mAbout").hide();
    $(".subcontent#mContact").hide();
    for (var $i = 1; $i <= 2; $i++) {
      $(".subcontent#mGallery" + $i).hide();
    }
  });

  $("#linkAbout").click(function (event) {
    $(".subcontent#mAbout").fadeIn().show();
    $("#linkAbout").css({
      color: "azure",
      "text-decoration": "none",
      "text-shadow": "2px 2px 3px black,-2px -2px 6px grey",
    });
    $("#linkHome").css({
      "text-decoration": "none",
      color: "darkslateblue",
      "text-shadow": "1px 1px 1px grey",
    });
    $("#linkCont").css({
      "text-decoration": "none",
      color: "darkslateblue",
      "text-shadow": "1px 1px 1px grey",
    });
    $("#linkGall").css({
      "text-decoration": "none",
      color: "darkslateblue",
      "text-shadow": "1px 1px 1px grey",
    });
    $(".subcontent#mHome").fadeIn().hide();
    $(".subcontent#mContact").hide();
    for (var $i = 1; $i <= 2; $i++) {
      $(".subcontent#mGallery" + $i).hide();
    }
  });

  $("#linkCont").click(function (event) {
    $(".subcontent#mContact").fadeIn().show();
    $("#linkCont").css({
      color: "azure",
      "text-decoration": "none",
      "text-shadow": "2px 2px 3px black,-2px -2px 6px grey",
    });
    $("#linkHome").css({
      "text-decoration": "none",
      color: "darkslateblue",
      "text-shadow": "1px 1px 1px grey",
    });
    $("#linkAbout").css({
      "text-decoration": "none",
      color: "darkslateblue",
      "text-shadow": "1px 1px 1px grey",
    });
    $("#linkGall").css({
      "text-decoration": "none",
      color: "darkslateblue",
      "text-shadow": "1px 1px 1px grey",
    });
    $(".subcontent#mHome").hide();
    $(".subcontent#mAbout").hide();
    for (var $i = 1; $i <= 2; $i++) {
      $(".subcontent#mGallery" + $i).hide();
    }
  });

  $("#linkGall").click(function (event) {
    $(".subcontent#mGallery1").fadeIn().show();
    $("#linkGall").css({
      color: "azure",
      "text-decoration": "none",
      "text-shadow": "2px 2px 3px black,-2px -2px 6px grey",
    });
    $("#linkHome").css({
      "text-decoration": "none",
      color: "darkslateblue",
      "text-shadow": "1px 1px 1px grey",
    });
    $("#linkCont").css({
      "text-decoration": "none",
      color: "darkslateblue",
      "text-shadow": "1px 1px 1px grey",
    });
    $("#linkAbout").css({
      "text-decoration": "none",
      color: "darkslateblue",
      "text-shadow": "1px 1px 1px grey",
    });
    $(".subcontent#mHome").hide();
    $(".subcontent#mContact").hide();
    $(".subcontent#mAbout").hide();
    $(".subcontent#mGallery2").hide();
  });
});
