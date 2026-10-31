$(document).ready(function () {
  const $image = $("#fade-image");

  function reportVisibility() {
    $("#fade-status").text($image.is(":visible") ? "The image is visible." : "The image has faded out.");
  }

  $("#fade-in").on("click", function () {
    $image.stop(true, true).fadeIn(450, reportVisibility);
  });
  $("#fade-out").on("click", function () {
    $image.stop(true, true).fadeOut(450, reportVisibility);
  });
  $("#fade-toggle").on("click", function () {
    $image.stop(true, true).fadeToggle(450, reportVisibility);
  });
});
