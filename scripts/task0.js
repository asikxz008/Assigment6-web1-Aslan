$(document).ready(function () {
  console.log("jQuery is ready!");
  $("#ready-dot").addClass("is-ready");
  $("#ready-message").text("jQuery is ready!");
  $("#jquery-version").text($.fn.jquery);
  $("#console-output").text("jQuery is ready!");

  $("#run-ready").on("click", function () {
    console.log("jQuery is ready!");
    $("#ready-status").text("The message was printed again. Open F12 → Console to see it.");
  });
});
