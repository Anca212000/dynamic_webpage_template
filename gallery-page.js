$(document).ready(function () {
  var $nrpage = 1;
  $(".butNext").click(function () {
    if ($nrpage != 1) {
      $nrpage = 1;
    }
    $nrpage = $nrpage + 1;
    $(".subcontent#mGallery" + $nrpage)
      .fadeIn("slow")
      .show();
    $(".subcontent#mGallery" + ($nrpage - 1)).hide();
    $("#textPage").text("Page " + $nrpage + " of 2");
  });

  $(".butBack").click(function () {
    $nrpage = $nrpage - 1;
    $(".subcontent#mGallery" + $nrpage)
      .fadeIn("slow")
      .show();
    $(".subcontent#mGallery" + ($nrpage + 1)).hide();
    $("#textPage").text("Page " + $nrpage + " of 2");
  });
});
