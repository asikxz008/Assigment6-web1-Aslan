$(document).ready(function () {
  const $panel = $("#slide-panel");

  function reportPanel() {
    const expanded = $panel.is(":visible");
    $("#slide-toggle").attr("aria-expanded", String(expanded));
    $panel.attr("aria-hidden", String(!expanded));
    $("#slide-status").text(expanded ? "The panel is expanded." : "The panel is collapsed.");
  }

  $("#slide-up").on("click", function () {
    $panel.stop(true, true).slideUp(400, reportPanel);
  });
  $("#slide-down").on("click", function () {
    $panel.stop(true, true).slideDown(400, reportPanel);
  });
  $("#slide-toggle").on("click", function () {
    $panel.stop(true, true).slideToggle(400, reportPanel);
  });
});
