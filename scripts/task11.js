$(document).ready(function () {
  const $thumbnails = $(".gallery-thumbnail");
  const dialog = document.getElementById("image-dialog");

  function reportThumbnails() {
    const count = $thumbnails.filter(":visible").length;
    $("#gallery-status").text(count + " of 4 thumbnails visible. Click a thumbnail to enlarge it.");
  }

  $("#show-thumbnails").on("click", function () {
    $thumbnails.stop(true, true).fadeIn(350, reportThumbnails);
  });
  $("#hide-thumbnails").on("click", function () {
    $thumbnails.stop(true, true).fadeOut(350, reportThumbnails);
  });
  $("#toggle-thumbnails").on("click", function () {
    $thumbnails.stop(true, true).fadeToggle(350, reportThumbnails);
  });

  $thumbnails.on("click", function () {
    const $thumbnail = $(this);
    const $image = $thumbnail.find("img");
    $("#dialog-title").text($thumbnail.attr("data-title"));
    $("#dialog-caption").text($thumbnail.attr("data-caption"));
    $("#full-image").stop(true, true).hide().attr({
      src: $image.attr("src"),
      alt: $image.attr("alt")
    });
    dialog.showModal();
    $("#full-image").fadeIn(300);
  });

  $("#close-dialog").on("click", function () {
    dialog.close();
  });

  $("#image-dialog").on("close", function () {
    $("#full-image").stop(true, true);
  });
});
