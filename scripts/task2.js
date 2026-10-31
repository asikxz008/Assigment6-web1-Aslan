$(document).ready(function () {
  const $paragraph = $("#visibility-paragraph");

  function reportVisibility() {
    const visible = $paragraph.is(":visible");
    $paragraph.attr("aria-hidden", String(!visible));
    $("#visibility-status").text(visible ? "The paragraph is visible." : "The paragraph is hidden.");
  }

  $("#hide-paragraph").on("click", function () {
    $paragraph.stop(true, true).hide(250, reportVisibility);
  });
  $("#show-paragraph").on("click", function () {
    $paragraph.stop(true, true).show(250, reportVisibility);
  });
  $("#toggle-paragraph").on("click", function () {
    $paragraph.stop(true, true).toggle(250, reportVisibility);
  });
});
